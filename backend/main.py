from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from pydantic import BaseModel
from typing import List
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
import asyncio
# MongoDB Setup
db = client["fuel_surveillance"]
camions_collection = db["camions"]


async def update_fuel_level():
    """
    Periodically update the fuel level of all camions:
    - If fuel level is below 50, refill by 200 liters.
    - Otherwise, decrement fuel level by 1.
    """
    while True:
        camions = list(camions_collection.find())  # Fetch all camions
        for camion in camions:
            camion_id = camion["_id"]
            fuel_level = camion.get("fuelLevel", 0)
            
            # Skip if fuel level is already 0 or not defined
           

            # If fuel level is less than 50, refill it
            if fuel_level < 50:
                print(f"Refilling camion {camion_id} with 200 liters.")
                result = camions_collection.update_one(
                    {"_id": camion_id},
                    {"$set": {"fuelLevel": fuel_level + 200}}
                )
            else:
                # Otherwise, decrement the fuel level by 1
                print(f"Decreasing fuel level for camion {camion_id}.")
                result = camions_collection.update_one(
                    {"_id": camion_id},
                    {"$set": {"fuelLevel": fuel_level - 20}}
                )

            # Check if the camion was found and updated
            if result.matched_count == 0:
                print(f"Camion {camion_id} not found or already updated.")

        print("Fuel levels updated for all camions.")
        await asyncio.sleep(1)
# FastAPI App
app = FastAPI()

origins = [
    "http://localhost:3000",  # React app
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Pydantic Models
class DestinationLog(BaseModel):
    date: str
    from_: str  # Avoid using `from` as it's a Python keyword
    to: str
    distance: float
    fuelUsed: float

class Camion(BaseModel):
    camionId: str
    fuelLevel: float
    fuelCapacity: float
    destinationLogs: List[DestinationLog]


# Endpoints

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(update_fuel_level())

@app.get("/camions", response_model=List[Camion])
def get_all_camions():
    camions = list(camions_collection.find({}, {"_id": 0}))
    return camions

@app.get("/camions/{camionId}", response_model=Camion)
def get_camion(camionId: str):
    camion = camions_collection.find_one({"camionId": camionId}, {"_id": 0})
    if not camion:
        raise HTTPException(status_code=404, detail="Camion not found")
    return camion

@app.get("/camions/{camionId}/logs", response_model=List[DestinationLog])
def get_camion_logs(camionId: str):
    camion = camions_collection.find_one({"camionId": camionId}, {"_id": 0, "destinationLogs": 1})
    if not camion:
        raise HTTPException(status_code=404, detail="Camion not found")
    return camion.get("destinationLogs", [])
