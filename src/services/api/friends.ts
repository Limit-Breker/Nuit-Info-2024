
import { getCookieValue, isLoginError } from "./cookies";
import { HttpService } from "./http_service";


export function addFriendToEvent(pseudo: string, id_event: number) {
    let token = getCookieValue('token');
    let url = process.env.REACT_APP_API_URL + "";
    let service = new HttpService(url, { "Authorization": `Bearer ${token}` });
    try { return service.post(`/events/${id_event}/friend`, { pseudo: pseudo }); }
    catch (error) {
        return handleApiError(error);
    }
}

export function removeFriendFromEvent(pseudo: string, id_event: number) {
    let token = getCookieValue('token');
    let url = process.env.REACT_APP_API_URL + "";
    let service = new HttpService(url, { "Authorization": `Bearer ${token}` });
    try {
        return service.delete(`/events/${id_event}/friend/${pseudo}`);
    } catch (error) {
        return handleApiError(error);
    }
}
export async function getFriendList() {
    let token = getCookieValue('token');
    let url = process.env.REACT_APP_API_URL + "";
    let service = new HttpService(url, { "Authorization": `Bearer ${token}` });

    try {
        let response = await service.get("/friend");
        return response.data["friends"];        // Return the data
    } catch (error) {
        return handleApiError(error);
    }
}

export async function getFriendRequestList() {
    let token = getCookieValue('token');
    let url = process.env.REACT_APP_API_URL + "";
    let service = new HttpService(url, { "Authorization": `Bearer ${token}` })

    try {
        let response = await service.get("/friend/requests");
        return response.data["friends"];        // Return the data
    } catch (error) {
        return handleApiError(error);
    }
}

export async function addFriend(pseudo_receiver: string) {
    let token = getCookieValue('token');
    let url = process.env.REACT_APP_API_URL + "";
    let service = new HttpService(url, { "Authorization": `Bearer ${token}` })

    try {
        let response = await service.post("/friend", { pseudo: pseudo_receiver });
        return response.data;        // Return the data
    } catch (error) {
        return handleApiError(error);
    }
}

export async function acceptFriend(pseudo_receiver: string) {
    let token = getCookieValue('token');
    let url = process.env.REACT_APP_API_URL + "";
    let service = new HttpService(url, { "Authorization": `Bearer ${token}` })

    try {
        let response = await service.put("/friend", { pseudo: pseudo_receiver });
        return response.data;        // Return the data
    } catch (error) {
        return handleApiError(error);
    }
}

export async function deleteFriend(pseudo_receiver: string) {
    let token = getCookieValue('token');
    let url = process.env.REACT_APP_API_URL + "";
    let service = new HttpService(url, { "Authorization": `Bearer ${token}` })
    try {
        let response = await service.delete(`/friend/${pseudo_receiver}`);
        return response.data;        // Return the data
    } catch (error) {
        return handleApiError(error);
    }
}

// handleApiError.js
export function handleApiError(error: any) {
    isLoginError(error);
    const status = error.response.data.error;
    switch (status) {
        case "AccountNotFound":
            return { error: true, message: "Utilisateur non trouvé", champ: "erreur_general" };
        case "FriendRequestExist":
            return { error: true, message: "Vous avez deja envoyé une demande d'amis", champ: "erreur_general" };
        default:
            return { error: true, message: "Une erreur non listé est arrivée, " + status, champ: "erreur_general" };
    }

}
