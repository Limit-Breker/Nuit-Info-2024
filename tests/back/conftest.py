import os
import sys
from typing import Any
from typing import Generator

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

sys.path.append(
    os.path.dirname(os.path.dirname(os.path.abspath(f"{__file__}/..")))
)
from back.dao.connection import BaseAccount, BaseData
from back.router.account import router as account_router
from back.router.friend import router as friend_router
from back.utils import get_db, run_command


# this is to include backend dir in sys.path so that we can import from db,main.py


def start_application():
    app = FastAPI()
    app.include_router(account_router)
    app.include_router(friend_router)
    return app


DATA_DATABASE_URL = "sqlite:///./tests/test_db.db"
ACCOUNT_DATABASE_URL = "sqlite:///./tests/test_account_db.db"
engine_data = create_engine(
    DATA_DATABASE_URL, connect_args={"check_same_thread": False}
)
engine_account = create_engine(
    ACCOUNT_DATABASE_URL, connect_args={"check_same_thread": False}
)
# Use connect_args parameter only with sqlite
SessionTesting = sessionmaker()

SessionTesting.configure(
    binds={BaseData: engine_data, BaseAccount: engine_account}
)


def init_database():
    with engine_account.connect() as con:
        with open("sql/compte.sql") as file:
            run_command(file, con)

    with engine_data.connect() as con:
        with open("sql/dataset.sql") as file:
            run_command(file, con)


@pytest.fixture(scope="function")
def app() -> Generator[FastAPI, Any, None]:
    """
    Create a fresh database on each test case.
    """

    BaseData.metadata.create_all(engine_data)  # Create the tables.
    BaseAccount.metadata.create_all(engine_account)  # Create the tables.
    init_database()
    _app = start_application()
    yield _app
    BaseAccount.metadata.drop_all(engine_account)  # Drop the tables.
    BaseData.metadata.drop_all(engine_data)


@pytest.fixture(scope="function")
def client(app: FastAPI) -> Generator[TestClient, Any, None]:
    """
    Create a new FastAPI TestClient that uses the `db_session` fixture to override
    the `get_db` dependency that is injected into routes.
    """

    def _get_test_db():
        db = SessionTesting()
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = _get_test_db
    with TestClient(app) as client:
        yield client
