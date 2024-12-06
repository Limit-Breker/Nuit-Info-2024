import React from "react"

interface ConfirmProps {
    iconURL: string;
    couleur: string;
    label?: string; // Nouvelle prop pour le texte
    onClick?: () => void;
}

const ConfirmIcon: React.FC<ConfirmProps> = ({ iconURL, couleur, label, onClick}) => {
    
    let color = "bg-transparent"; // Par défaut
    
    let cn = "w-5 h-5";
    switch (couleur) {
        case "green":
            color = "flex justify-center items-center rounded-vb bg-green-button text-black hover:bg-green-hover focus:ring-green-border focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2";
            break;
        case "brown":
            color = "bg-brown-button text-black hover:bg-brown-hover focus:ring-brown-border focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2";
            break;
        case "red":
            color = "bg-red-button text-black hover:bg-red-hover focus:ring-red-border focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2";
            break;
        case "dark":
            color = "bg-dark-button text-white hover:bg-dark-hover focus:ring-dark-border focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2";
            break;
        case "none":
            color = "bg-transparent justify-center";
            cn = "w-16 h-16";
            break;
        case "none_medium":
            color = "bg-transparent";
            cn = "w-12 h-12";
            break;
        case "event":
            color = "bg-transparent";
            cn = "w-8 h-8";
            break;
        case "none_small":
            color = "bg-transparent";
            cn = "w-6 h-6";
            break;
        default:
            color = "bg-transparent";
            break;
    }

    return (
        <div className={`${color} flex items-center justify-center`} onClick={onClick}> {/* Flex pour aligner icône et texte */}
            <img className={cn} src={iconURL} alt="icon" />
            {label && <span className="ml-2 text-sm font-medium">{label}</span>} {/* Affichage du texte si label est fourni */}
        </div>
    )
}

export default ConfirmIcon;
