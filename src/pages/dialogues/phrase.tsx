interface PhraseProps {
    personnage: string;
    texte: string;
}

const Phrase: React.FC<PhraseProps> = ({personnage, texte}) => {
    return (
        <div>
            <div>{personnage}</div>
            <div>{texte}</div>
        </div>
    );
}