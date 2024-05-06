import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

load_dotenv('.env.local')

mongodb_uri = os.getenv("MONGODB_URI")

# Create a new client and connect to the server
client = MongoClient(mongodb_uri, server_api=ServerApi('1'))


db = client["Cordinates"]
collection = db["cordinate"]



try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")

except Exception as e:
    print("An unexpected error occurred:", e)

# def check_and_delete_oldest_entry():
#     # Calculate database size (approximation)
#     database_size_mb = sum(db.command('collstats', collection_name)['storageSize'] for collection_name in db.list_collection_names())
#     database_size_mb /= 1024 * 1024  # Convert bytes to MB

#     # Check if database size exceeds threshold (512MB)
#     if database_size_mb > 500:
#         # Find the oldest entry in the collection based on insertion time
#         oldest_entry = collection.find_one({}, sort=[('_id', 1)])  # Assuming _id represents insertion time

#         # Delete the oldest entry
#         if oldest_entry:
#             collection.delete_one({'_id': oldest_entry['_id']})
#             print('Oldest entry deleted successfully.')

