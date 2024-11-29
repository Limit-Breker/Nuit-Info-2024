from tests.back.utils import create_header


class TestAddFriend:

    route = "/friend"

    def test_add_friend(self, client):
        header = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": "Romain"}
        response = client.post(self.route, json=data, headers=header)
        assert response.status_code == 200
        assert response.json() == {"message": "Friend request sent"}

    def test_add_friend_pseudo_not_found(self, client):
        header = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": "Romaiiiiiin"}
        response = client.post(self.route, json=data, headers=header)
        assert response.status_code == 404
        assert response.json() == {
            "message": "Account not found",
            "error": "AccountNotFound",
        }

    def test_add_myself(self, client):
        header = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": "Yanis"}
        response = client.post(self.route, json=data, headers=header)
        assert response.status_code == 404
        assert response.json() == {
            "message": "Account not found",
            "error": "AccountNotFound",
        }

    def test_add_friend_already_exist(self, client):
        header = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": "Romain"}
        response = client.post(self.route, json=data, headers=header)
        assert response.status_code == 200
        assert response.json() == {"message": "Friend request sent"}

        response = client.post(self.route, json=data, headers=header)
        assert response.status_code == 409
        assert response.json() == {
            "message": "Friend request already sent",
            "error": "FriendRequestAlreadySent",
        }

    def test_pseudo_not_found(self, client):
        header = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": ""}
        response = client.post(self.route, json=data, headers=header)
        assert response.status_code == 404
        assert response.json() == {
            "message": "Pseudo receiver not found",
            "error": "PseudoReceiverNotFound",
        }


class TestAcceptFriend:

    route = "/friend"

    def test_accept_friend(self, client):
        header = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": "Romain"}
        response = client.post(self.route, json=data, headers=header)
        assert response.status_code == 200
        assert response.json() == {"message": "Friend request sent"}

        header = create_header(client, "romain@example.com", "mdp")

        data = {"pseudo": "Yanis"}
        response = client.put(self.route, json=data, headers=header)
        assert response.status_code == 200
        assert response.json() == {"message": "Friend request accepted"}

    def test_accept_friend_pseudo_not_found(self, client):
        header = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": "Romaain"}
        response = client.put(self.route, json=data, headers=header)
        assert response.status_code == 404
        assert response.json() == {
            "message": "Account not found",
            "error": "AccountNotFound",
        }

    def test_accept_myself(self, client):
        header = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": "Yanis"}
        response = client.put(self.route, json=data, headers=header)
        assert response.status_code == 404
        assert response.json() == {
            "message": "Account not found",
            "error": "AccountNotFound",
        }

    def test_accept_friend_not_found(self, client):
        header = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": "Romain"}
        response = client.put(self.route, json=data, headers=header)
        assert response.status_code == 404
        assert response.json() == {
            "message": "Friend request not found",
            "error": "FriendRequestNotFound",
        }


class TestDeleteFriend:

    route = "/friend"

    def test_delete_friend(self, client):
        header1 = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": "Romain"}
        response = client.post(self.route, json=data, headers=header1)
        assert response.status_code == 200
        assert response.json() == {"message": "Friend request sent"}

        header6 = create_header(client, "romain@example.com", "mdp")
        data = {"pseudo": "Yanis"}
        response = client.put(self.route, json=data, headers=header6)
        assert response.status_code == 200
        assert response.json() == {"message": "Friend request accepted"}

        response = client.delete(self.route + "/Romain", headers=header1)
        assert response.status_code == 200
        assert response.json() == {"message": "Friend deleted"}

    def test_delete_friend_not_found(self, client):
        header1 = create_header(client, "yanis@example.com", "mdp")

        response = client.delete(self.route + "/Romaiin", headers=header1)
        assert response.status_code == 404
        assert response.json() == {
            "message": "Account not found",
            "error": "AccountNotFound",
        }

    def test_delete_myself(self, client):
        header1 = create_header(client, "yanis@example.com", "mdp")

        response = client.delete(self.route + "/Yanis", headers=header1)
        assert response.status_code == 404
        assert response.json() == {
            "message": "Account not found",
            "error": "AccountNotFound",
        }

    def test_delete_friend_not_exist(self, client):
        header1 = create_header(client, "yanis@example.com", "mdp")

        response = client.delete(self.route + "/Romain", headers=header1)
        assert response.status_code == 404
        assert response.json() == {
            "message": "Friend request not found",
            "error": "FriendRequestNotFound",
        }


class TestGetFriends:

    route = "/friend"

    def test_get_friends(self, client):
        header1 = create_header(client, "yanis@example.com", "mdp")

        data = {"pseudo": "Romain"}
        response = client.post(self.route, json=data, headers=header1)
        assert response.status_code == 200
        assert response.json() == {"message": "Friend request sent"}

        header6 = create_header(client, "romain@example.com", "mdp")
        data = {"pseudo": "Yanis"}
        response = client.put(self.route, json=data, headers=header6)
        assert response.status_code == 200
        assert response.json() == {"message": "Friend request accepted"}

        response = client.get(self.route, headers=header1)
        assert response.status_code == 200
        assert response.json() == {
            "message": "Friend list",
            "friends": ["Sofia", "Nail", "Titouan", "Romain"],
        }

    def test_get_friends_empty(self, client):
        header6 = create_header(client, "romain@example.com", "mdp")

        response = client.delete(self.route + "/Titouan", headers=header6)
        assert response.status_code == 200
        assert response.json() == {"message": "Friend deleted"}

        response = client.get(self.route, headers=header6)
        assert response.status_code == 200
        assert response.json() == {
            "message": "Friend list",
            "friends": [],
        }

    def test_get_friends_request_sent(self, client):
        header1 = create_header(client, "yanis@example.com", "mdp")

        response = client.get(self.route + "/requests", headers=header1)
        assert response.status_code == 200
        assert response.json() == {
            "message": "Friend request list",
            "friends": ["Christian"],
        }

    def test_get_friends_request_sent_empty(self, client):
        header6 = create_header(client, "romain@example.com", "mdp")

        response = client.get(self.route + "/requests", headers=header6)
        assert response.status_code == 200
        assert response.json() == {
            "message": "Friend request list",
            "friends": [],
        }
