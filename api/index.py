from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from bson.json_util import dumps
from pymongo import DESCENDING
from .database import collection # Import database.py here
import asyncio


app = FastAPI()

# CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
    "http://localhost:8080",
    "http://127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




@app.get("/")
def apiRunning():
    res = {
        "status" : "ok" ,
        "message" : "Api is running"
    }
    return res

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    print("Connected to websocket")

    try:
        # Listen for new data indefinitely
        while True:
            # Query the database for the latest document
            latest_document = collection.find_one({}, sort=[('_id', DESCENDING)])

            # Check if a document was found
            if latest_document:
                # Convert ObjectId to string for serialization
                latest_document['_id'] = str(latest_document['_id'])
                # Serialize document to JSON
                latest_document_json = dumps(latest_document)
                # Send the serialized document to the client
                await websocket.send_text(latest_document_json)
                print("Latest document sent")
            else:
                print("No documents found")
            
            # Wait for 5 minutes before checking again
            await asyncio.sleep(30)
    except Exception as e:
        print("An error occurred:", e)


 