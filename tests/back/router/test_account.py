from tests.back.utils import change_identifer_pseudo, get_identifier, login_user


class TestRegister:
    route = "/account/register"

    def test_register(self, client):
        data = {
            "pseudo": "test",
            "email": "palendar.s1j+user1@gmail.com",
            "password": "mdp",
        }
        response = client.post(self.route, json=data)
        assert response.status_code == 201
        assert response.json() == {"message": "Account created"}

    def test_register_login(self, client):
        data = {
            "pseudo": "test",
            "email": "palendar.s1j+user1@gmail.com",
            "password": "mdp",
        }
        response = client.post(self.route, json=data)
        assert response.status_code == 201

        identifier = get_identifier("test")[0]
        response = client.post(f"/account/validate/{identifier}")
        assert response.status_code == 200
        assert response.json() == {"message": "User validated"}

        response = login_user(client, data["email"], data["password"])
        assert response.status_code == 200
        assert response.json()["message"] == "Login success"

    def test_email_exist(self, client):
        data = {
            "pseudo": "test",
            "email": "yanis@example.com",
            "password": "mdp",
        }
        response = client.post(self.route, json=data)
        assert response.status_code == 409
        assert response.json()["error"] == "EmailAlreadyExist"

    def test_pseudo_exist(self, client):
        data = {
            "pseudo": "Yanis",
            "email": "user42@example.com",
            "password": "mdp",
        }
        response = client.post(self.route, json=data)
        assert response.status_code == 409
        assert response.json()["error"] == "PseudoAlreadyExist"

    def test_email_format(self, client):
        data = {
            "pseudo": "test",
            "email": "user1",
            "password": "mdp",
        }
        response = client.post(self.route, json=data)
        assert response.status_code == 422
        assert response.json()["error"] == "EmailFormatError"

    def test_pseudo_format(self, client):
        data = {
            "pseudo": "test test",
            "email": "user42@example.com",
            "password": "mdp",
        }
        response = client.post(self.route, json=data)
        assert response.status_code == 422
        assert response.json()["error"] == "PseudoFormatError"


class TestLogin:
    route = "/account/login"

    def test_login(self, client):
        response = login_user(client, "yanis@example.com", "mdp")
        assert response.status_code == 200
        assert response.json()["message"] == "Login success"

    def test_account_not_found(self, client):
        response = login_user(client, "user42@example.com", "mdp")
        assert response.status_code == 404
        assert response.json()["error"] == "AccountNotFound"

    def test_incorrect_password(self, client):
        response = login_user(client, "yanis@example.com", "wrong")
        assert response.status_code == 400
        assert response.json()["error"] == "IncorrectPassword"

    def test_user_not_validated(self, client):
        data = {
            "pseudo": "test",
            "email": "palendar.s1j+user1@gmail.com",
            "password": "mdp",
        }
        response = client.post("/account/register", json=data)
        assert response.status_code == 201

        response = login_user(client, "palendar.s1j+user1@gmail.com", "mdp")
        assert response.status_code == 409
        assert response.json()["error"] == "UserNotValidated"


class TestValidate:
    route = "/account/validate"

    def test_validate(self, client):
        data = {
            "pseudo": "test",
            "email": "palendar.s1j+user1@gmail.com",
            "password": "mdp",
        }
        response = client.post("/account/register", json=data)
        assert response.status_code == 201

        identifier = get_identifier("test")[0]
        response = client.post(f"{self.route}/{identifier}")
        assert response.status_code == 200
        assert response.json() == {"message": "User validated"}

    def test_identifier_not_found(self, client):
        response = client.post(f"{self.route}/wrong")
        assert response.status_code == 404
        assert response.json()["error"] == "IdentifierNotFound"

    def test_account_not_found(self, client):
        data = {
            "pseudo": "test",
            "email": "palendar.s1j+user1@gmail.com",
            "password": "mdp",
        }
        response = client.post("/account/register", json=data)
        assert response.status_code == 201

        identifier = get_identifier(data["pseudo"])[0]
        change_identifer_pseudo(data["pseudo"], "wrong")

        response = client.post(f"{self.route}/{identifier}")
        assert response.status_code == 404
        assert response.json()["error"] == "AccountNotFound"


class TestAccount:
    route = "/account"

    def test_account(self, client):
        data_info = login_user(client, "yanis@example.com", "mdp")
        token = data_info.json()["access_token"]
        headers = {"authorization": f"Bearer {token}"}

        response = client.get(self.route, headers=headers)
        assert response.status_code == 200
        assert response.json() == {
            "email": "yanis@example.com",
            "id": 1,
            "is_valid": 1,
            "pseudo": "Yanis",
        }
