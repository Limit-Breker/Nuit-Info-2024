from sqlalchemy import text

from conftest import engine_data


def login_user(client, email, password):
    data = {"email": email, "password": password}
    response = client.post("/account/login", json=data)
    return response


def create_header(client, email, password):
    data_info = login_user(client, email, password)
    token = data_info.json()["access_token"]
    headers = {"authorization": f"Bearer {token}"}
    return headers


def get_identifier(username):
    with engine_data.connect() as con:
        query = f"SELECT token FROM identifier WHERE pseudo = '{username}'"
        result = con.execute(text(query))
        return result.fetchone()


def change_identifer_pseudo(old_username, new_username):
    with engine_data.connect() as con:
        query = f"UPDATE identifier SET pseudo = '{new_username}' WHERE pseudo = '{old_username}'"
        con.execute(text(query))
        con.commit()
        return True
