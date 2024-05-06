from pydantic import BaseModel
from datetime import datetime

class Cordinate(BaseModel):
    lat: str
    long: str
    time: datetime