
import { useState } from "react";
import Confirm from "../../components/confirm/confirm";
import PopupCredit from "../../components/popup/popupCredit";
import bonhomme from "../../images/bonhomme.png";
import { link } from "fs";

const ListePerso: React.FC = () => {
    //liste d'objets pour chaque personne
    const initialDonnée=[{
        title: "Christian GIKAPA",
        role: ["L'Homme qui fait tout"],
        github: ["gamingdy"],
        linkedin: ["christian-gikapa-9a12122a9"],
        popupState: false,
        image: bonhomme
    },
    {
        title: "Sofia GRIBANOVA",
        role: ["Graphiste"],
        github: ["pavuchochek"],
        linkedin: ["sofia-gribanova"],
        popupState: false,
        image: bonhomme
    },
    {
        title: "Yanis CROGUENNOC",
        role: ["Directeur des médias"],
        github: ["Yeetnus"],
        linkedin: ["yanis-croguennoc-4255782a6"],
        popupState: false,
        image: bonhomme
    },
    {
        title: "Romain BOUÏSSOU",
        role: ["Scénariste designer"],
        github: ["uNastyy"],
        linkedin: ["romain-bouissou"],
        popupState: false,
        image: bonhomme
    },
    {
        title: "Célia TOGNINI",
        role: ["Scénariste designer"],
        github: ["Cemailla"],
        linkedin: ["célia-tognini-8ab182264"],
        popupState: false,
        image: bonhomme
    },
    {
        title: "Cédric LONGUET",
        role: ["Employé polyvalent"],
        github: ["Tigropoil"],
        linkedin: ["cédric-longuet-88a99018a"],
        popupState: false,
        image: bonhomme
    },
    {
        title: "Simon ARMAND",
        role: ["Product Owner"],
        github: ["username-Everam"],
        linkedin: ["simon-armand"],
        popupState: false,
        image: bonhomme
    },
    {
        title: "Naïl LAMARTI",
        role: ["GIMP Master"],
        github: ["Barukzeg"],
        linkedin: ["naïl-lamarti-922251293"],
        popupState: false,
        image: bonhomme
    },
    {
        title: "Titouan HELBERT",
        role: ["Frontend Developer"],
        github: ["unkn0wndfbx"],
        linkedin: ["titouan-helbert-1600b4320"],
        popupState: false,
        image: bonhomme
    },
    {
        title: "Titouan HERBAUT",
        role: ["dit 'le petit'"],
        github: ["Xispho"],
        linkedin: ["titouan-herbaut-209b372a7"],
        popupState: false,
        image: bonhomme
    }];

    const [donnée, setDonnée] = useState(initialDonnée);
    const resetAllPopups = () => {  
        const newDonnée = [...donnée];
        newDonnée.forEach((person) => {
            person.popupState = false;
        });
        setDonnée(newDonnée);
    };
   return (
    <div>
        {donnée.map((person, index) => (
            <div key={index}>
                <img 
                    src={person.image} 
                    alt={person.title}
                    onClick={() => {
                        resetAllPopups();
                        const newDonnée = [...donnée];
                        newDonnée[index].popupState = true;
                        setDonnée(newDonnée);
                    }} 
                />
                {person.popupState && (
                    <PopupCredit
                        title={person.title}
                        role={person.role}
                        github={person.github} 
                        linkedin={person.linkedin}
                        onClose={() => {
                            const newDonnée = [...donnée];
                            newDonnée[index].popupState = false;
                            setDonnée(newDonnée);
                        }}
                        isOpen={person.popupState}
                    />
                )}
            </div>
        ))}
    </div>
   );
                    
};
export default ListePerso;