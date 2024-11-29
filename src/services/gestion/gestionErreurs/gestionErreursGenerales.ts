export function checkChamps(data: any) {
    const errors: { [key: string]: string } = {};  // Objet pour stocker les erreurs

    for (const key in data) {
        if (!data[key]) {
            errors[key] = "Ce champ est obligatoire.";
        }
    }
    return errors;  // Retourne un objet contenant les erreurs
}

export function checkPasswordCreation(data: { password: string, confirm_password: string }) {
    if (data.password !== data.confirm_password) {
        return "Les mots de passe ne correspondent pas.";
    }
    return true;  // Pas d'erreur
}

export function checkEmailCreation(email: string) {
    if (!email.includes("@") || !email.includes(".")) {
        return "Email invalide.";
    }
    return true;  // Pas d'erreur
}

export function checkPasswordConnect(password: string) {
    // Vérification du hash du mdp = hash du mdp dans la base de données associé à l'email donné
    return true;  // Pas d'erreur
}

export function checkEmailConnect(email: string) {
    // vérification de la présence de l'email dans la base de données
    return true;  // Pas d'erreur
}