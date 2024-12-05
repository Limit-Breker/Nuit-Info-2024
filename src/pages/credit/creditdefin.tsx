
import { useState } from "react";
import Confirm from "../../components/confirm/confirm";
import PopupCredit from "../../components/popup/popupCredit";
import background from "../../images/bgtest.png";
import ListePerso from "./liste_perso";

const Credit: React.FC = () => {

    //EXEMPLE POPUP
    //stoquage de l'etat du popup
   


    return (
        <div className="min-h-screen bg-center bg-cover" style={{ backgroundImage: `url(${background})` }}>
            représentation d'un personnage
            <ListePerso></ListePerso>
            
        </div>

    );
};
export default Credit;