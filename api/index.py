from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import collection  # Import database.py here
from .model import Cordinate
from .socket import send_coordinates


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
        "message" : "Api is runinng"
    }
    return res

@app.get("/coordinates/")
async def get_coordinates():
    coordinates = list(collection.find({}, {"_id": 0}))

    return coordinates