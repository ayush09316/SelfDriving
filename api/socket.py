from fastapi import WebSocket
from .database import collection



async def send_coordinates(websocket: WebSocket):
    try:
        await websocket.accept()
        async for change in collection.watch(full_document="updateLookup"):
            await websocket.send_json(change["fullDocument"])
            print("Sent data to WebSocket", change["fullDocument"])
    except Exception as e:
        print("Error in WebSocket handler:", e)
