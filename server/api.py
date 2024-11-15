import os
from pymongo import MongoClient
from dotenv import load_dotenv
import random as rd
import time

load_dotenv()

# Ensure MongoDB_URI is correctly set in your .env file
mongo_uri = os.getenv("MONGO_URI")
if not mongo_uri:
    raise ValueError("MongoDB_URI environment variable not set")

client = MongoClient(mongo_uri)
db = client.get_database("CarFuelManagement")
collection = db.get_collection("fuelData")

while True:
    sensor_value = rd.uniform(20.0, 100.0)
    result = collection.insert_one({"sensor_value": sensor_value})
    print("Inserted document with sensor value:", sensor_value)
    time.sleep(10)