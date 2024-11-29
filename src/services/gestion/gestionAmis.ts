import { checkChamps } from "./gestionErreurs/gestionErreursGenerales";
import * as crud from "../api/friends";
// Fonction pour récupérer les valeurs du formulaire
export function getValues() {
    return {
        nomAmi: (document.getElementById("nomAmi") as HTMLInputElement).value,
    };
}

// Fonction pour vérifier les valeurs du formulaire et renvoyer les erreurs
export function checkValues() {
    const values = getValues();
    const errors: { [key: string]: string } = {};  // Objet pour stocker les erreurs

    // Vérification des champs obligatoires
    const champErrors = checkChamps(values);
    Object.assign(errors, champErrors); // Assigne directement les erreurs de champ (s'ils sont vides)


    return errors;  // Retourne un objet contenant toutes les erreurs détectées
}


export async function ajouterAmiCheck(setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>) {
    const errors = checkValues();  // On vérifie les valeurs du formulaire

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return false;
    } else {
        var essai=await ajoutAmiBd(getValues().nomAmi);
        if(essai.error){
            console.log(essai.message);
            setErrors({nomAmi:essai.message});
            return false;
        }
        return true;
    }
}

function ajoutAmiBd(nomAmi: string) {
    // Ajout de l'ami en base de données
   return crud.addFriend(nomAmi)
    
}