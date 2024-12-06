
import { useState } from "react";
import PopupCredit from "../../components/popup/popupCredit";
import { persos } from "../../constants/images";

const ListePerso: React.FC = () => {
    //liste d'objets pour chaque personne
    const initialDonnée = [{
        title: "Christian GIKAPA",
        role: ["L'Homme qui fait tout"],
        github: ["gamingdy"],
        linkedin: ["christian-gikapa-9a12122a9"],
        popupState: false,
        image: persos.cricri
    },
    {
        title: "Sofia GRIBANOVA",
        role: ["Graphiste"],
        github: ["pavuchochek"],
        linkedin: ["sofia-gribanova"],
        popupState: false,
        image: persos.sofia
    },
    {
        title: "Yanis CROGUENNOC",
        role: ["Directeur des médias"],
        github: ["Yeetnus"],
        linkedin: ["yanis-croguennoc-4255782a6"],
        popupState: false,
        image: persos.nisnis
    },
    {
        title: "Romain BOUÏSSOU",
        role: ["Scénariste designer"],
        github: ["uNastyy"],
        linkedin: ["romain-bouissou"],
        popupState: false,
        image: persos.roro
    },
    {
        title: "Célia TOGNINI",
        role: ["Scénariste designer"],
        github: ["Cemailla"],
        linkedin: ["célia-tognini-8ab182264"],
        popupState: false,
        image: persos.celia
    },
    {
        title: "Cédric LONGUET",
        role: ["Employé polyvalent"],
        github: ["Tigropoil"],
        linkedin: ["cédric-longuet-88a99018a"],
        popupState: false,
        image: persos.cedric
    },
    {
        title: "Simon ARMAND",
        role: ["Product Owner"],
        github: ["username-Everam"],
        linkedin: ["simon-armand"],
        popupState: false,
        image: persos.simsi
    },
    {
        title: "Naïl LAMARTI",
        role: ["GIMP Master"],
        github: ["Barukzeg"],
        linkedin: ["naïl-lamarti-922251293"],
        popupState: false,
        image: persos.nail
    },
    {
        title: "Titouan HELBERT",
        role: ["Front-end Developer"],
        github: ["unkn0wndfbx"],
        linkedin: ["titouan-helbert-1600b4320"],
        popupState: false,
        image: persos.titou2
    },
    {
        title: "Titouan HERBAUT",
        role: ["dit 'le petit'"],
        github: ["Xispho"],
        linkedin: ["titouan-herbaut-209b372a7"],
        popupState: false,
        image: persos.titou1
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
        <div
            className="z-40 absolute flex flex-row gap-x-1"
            style={{
                left: window.innerWidth < 850 ? '21%' : '41%',
                bottom: window.innerHeight < 800 ? '296px' : '550px',
            }}
        >
            {
                donnée.map((person, index) => (
                    <div key={index} className={`${person.popupState ? '' : 'hover:-translate-y-2'} transition-transform cursor-pointer`}>
                        <img
                            className="w-10 h-10 object-contain"
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
                                image={person.image}
                                onClose={() => {
                                    const newDonnée = [...donnée];
                                    newDonnée[index].popupState = false;
                                    setDonnée(newDonnée);
                                }}
                                isOpen={person.popupState}
                            />
                        )}
                    </div>
                ))
            }
        </div >
    );

};
export default ListePerso;