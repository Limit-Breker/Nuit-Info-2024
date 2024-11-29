import os

from dotenv import load_dotenv
from fastapi.security import OAuth2PasswordBearer

load_dotenv()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

TOKEN_EXPIRE_MINUTES = os.getenv("TOKEN_EXPIRE_MINUTES")
if TOKEN_EXPIRE_MINUTES and TOKEN_EXPIRE_MINUTES.isdigit():
    TOKEN_EXPIRE_MINUTES = int(TOKEN_EXPIRE_MINUTES)
else:
    raise ValueError("TOKEN_EXPIRE_MINUTES must be an integer")

DB_USERNAME = os.getenv("DB_USERNAME")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")
DB_PORT = os.getenv("DB_PORT")
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
APP_URL = os.getenv("APP_URL")