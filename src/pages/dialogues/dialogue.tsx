import React from 'react';
import Dialogues from './Dialogues.json';
import { useState } from 'react';

interface Phrase {
    personnage: string;
    texte: string;
}

interface Dialogue {
    titre: string;
    img: string;
    phrases: Phrase[];
}

const Dialogue1: React.FC = () => {

    const dialogues: Dialogue[] = Dialogues.map((dialogue: Dialogue) => {
        return {
            titre: dialogue.titre,
            img: dialogue.img,
            phrases: dialogue.phrases.map((phrase: Phrase) => {
                return {
                    personnage: phrase.personnage,
                    texte: phrase.texte
                };
            })
        };
    });

    const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
    // Récupère le dialogue actuel
    const currentDialogue = dialogues[currentDialogueIndex];

    const currentPhrase = currentDialogue.phrases[currentPhraseIndex];
  
    // Gestion du bouton Next
    const handleNext = () => {
      if (currentDialogueIndex < dialogues.length - 1) {
        setCurrentDialogueIndex(currentDialogueIndex + 1);
      } else {
        alert("Fin des dialogues !");
      }
    };

    const handleNextPhrase = () => {
        if (currentPhraseIndex < currentDialogue.phrases.length - 1) {
            setCurrentPhraseIndex(currentPhraseIndex + 1);
        } else {
            handleNext();
            setCurrentPhraseIndex(0);
        }
    }   

    
    return (
        <div>
            <div>{currentDialogue.titre}</div>
            <img src={currentDialogue.img}/>
            <div>
                {currentPhrase.personnage} : {currentPhrase.texte}
            </div>
            <button onClick={handleNextPhrase} style={{ padding: "10px 20px" }}>
                Next
            </button>
        </div>
    );
};

export default Dialogue1;