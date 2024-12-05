
import { useState } from "react";
import HeaderAccueil from "../../components/header_footer/headerAccueil";
import PopupAmis from "../../components/popup/popupSansBouton";
import PopupSimple from "../../components/popup/popupSimple";
import Confirm from "../../components/confirm/confirm";
import Input from "../../components/input/input";
import { ajouterItem } from "../../services/gestion/gestionAmis";

const Accueil: React.FC = () => {
    //EXEMPLE LISTE QUI SE MET A JOUR
    const [listeAmis, setListeAmis] = useState<string[]>(["Alice", "Bob", "Charlie"]);

    //EXEMPLE POPUP
    //stoquage de l'etat du popup
    const [isPopupTestOpen, setIsPopupTestOpen] = useState(false);
    //fonction qui toggle son etat
    const togglePopupTest = () => setIsPopupTestOpen(!isPopupTestOpen);

    //fonction qui va s'executer une fois qu'on clique 'ok' dans le popup

    const handleClickPopupList = () => {
        //j'appelle une fonction du controlleur qui peut modifier ma liste
        ajouterItem(setListeAmis);
    }

    const handleClickPopup = () => {
        //j'appelle une fonction du controlleur qui peut modifier ma liste
        alert("coucou")
    }

    return (
        <div>
            <HeaderAccueil />
            <div className="bg-normal-blue min-h-[100vh] pt-24">
                <img src={process.env.PUBLIC_URL + "/images/vrai_bateau.svg"} alt="accueil" />
            </div>




            <div className="bg-white min-h-90p bg-cover bg-center">
                <div className="flex flex-col justify-center">

                    <div className='w-full max-w-xs'>
                        <ul>
                            {listeAmis.map((ami, index) => (
                                <li key={index}>{ami}</li>
                            ))}
                        </ul>
                        <Confirm title="Ajouter un item" couleur="dark" onClick={handleClickPopupList} />
                        <form
                            className=" bg-white
                                        shadow-md
                                        rounded-vb
                                        bg-opacity-65
                                        ring-1
                                        ring-black
                                        min-w-[400px]
                                        min-h-[160px]
                                        px-8
                                        relative
                                        left-1/2
                                        m-16
                                        mt-48
                                        flex
                                        items-center
                                        justify-center"
                        >
                            <div
                                className=" w-full
                                            mt-2"
                            >
                                <h1
                                    className=" text-2xl
                                        font-bold
                                        text-center
                                        text-black"
                                >
                                    Coucou
                                </h1>
                                <Confirm title="Ouvrir un popup test" couleur={"blue"} onClick={togglePopupTest} />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <PopupSimple
                isOpen={isPopupTestOpen}
                onClose={togglePopupTest}
                title={"Je suis un popup"}
                content={
                    <><Input
                        id="nomAmi"
                        label="Ajouter un ami"
                        placeholder="Nom de votre ami"
                        type="text"
                    />
                    </>
                }
                acceptText="Valider"
                declineText="Retour"
                onAccept={handleClickPopup}
                onDecline={togglePopupTest}
            />
        </div>

    );
};
export default Accueil;