from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from back import config
from back.dao.connection import (
    Base,
    engine
)

Base.metadata.create_all(bind=engine)

app = FastAPI(title="API Palendar", version="0.1", redoc_url=None)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[config.APP_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def index():
    return {"message": "Hello"}
