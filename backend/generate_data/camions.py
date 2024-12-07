from faker import Faker
from random import randint, uniform, choice
import pymongo
from datetime import datetime, timedelta

# Initialize Faker and MongoDB
fake = Faker()
client = pymongo.MongoClient("mongodb+srv://ahmedkacem712:I8Wog6JyYOgGOM4X@cluster0.s0ure.mongodb.net/")
db = client["fuel_surveillance"]
collection = db["camions"]

# Configurations
NUM_CAMIONS = 10  # Number of camions to generate
FUEL_CAPACITY_RANGE = (400, 500)  # Fuel tank capacity (liters)
FUEL_USAGE_RATE = (0.3, 0.6)  # Liters per km
MAX_DISTANCE_PER_DAY = 500  # Max distance a camion can travel in a day (km)

# Helper function to generate destination logs
def generate_destination_logs(start_date, num_days, fuel_capacity):
    logs = []
    current_fuel = fuel_capacity
    for day in range(num_days):
        date = start_date + timedelta(days=day)
        distance = randint(50, MAX_DISTANCE_PER_DAY)
        fuel_used = distance * uniform(*FUEL_USAGE_RATE)

        if current_fuel < fuel_used:
            # Refuel camion if fuel is insufficient
            current_fuel = fuel_capacity
        
        current_fuel -= fuel_used
        logs.append({
            "date": date.isoformat(),
            "from_": fake.city(),
            "to": fake.city(),
            "distance": distance,
            "fuelUsed": round(fuel_used, 2)
        })
    return logs, round(current_fuel, 2)

# Generate camions data
def generate_camions_data():
    for i in range(1, NUM_CAMIONS + 1):
        camion_id = f"C-{i:03}"  # Format as C-001, C-002, etc.
        fuel_capacity = randint(*FUEL_CAPACITY_RANGE)
        start_date = datetime.now() - timedelta(days=30)  # Last 30 days of logs
        destination_logs, remaining_fuel = generate_destination_logs(
            start_date, 30, fuel_capacity
        )

        camion = {
            "camionId": camion_id,
            "fuelLevel": remaining_fuel,
            "fuelCapacity": fuel_capacity,
            "destinationLogs": destination_logs
        }
        collection.insert_one(camion)
    print(f"Inserted {NUM_CAMIONS} camions into the database.")

# Run the script
if __name__ == "__main__":
    collection.drop()  # Drop the collection for a fresh start
    generate_camions_data()
