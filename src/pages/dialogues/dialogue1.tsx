import React from 'react';
import Dialogues from './Dialogues.json';
import { useState } from 'react';

interface Phrase {
    personnage: string;
    texte: string;
}

const Dialogue1: React.FC = () => {

    const dialogues = Dialogues.flatMap(dialogue => dialogue.phrases.map((phrase: Phrase) => {
        return {
            personnage: phrase.personnage,
            texte: phrase.texte
        };
    }));

    const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  
    // Récupère le dialogue actuel
    const currentDialogue = dialogues[currentDialogueIndex];
  
    // Gestion du bouton Next
    const handleNext = () => {
      if (currentDialogueIndex < dialogues.length - 1) {
        setCurrentDialogueIndex(currentDialogueIndex + 1);
      } else {
        alert("Fin des dialogues !");
      }
    };

    
    return (/*
        <div>
            {tata.map((phrase, index) => (
                <div key={index}>
                    <div className="text-xl font-bold font-Lato">{phrase.personnage}</div>
                    <div className="font-Mandali">{phrase.texte}</div>
                </div>
            ))}
        </div>*/
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <div style={{ marginBottom: "20px" }}>
                <strong>{currentDialogue.personnage} :</strong> {currentDialogue.texte}
            </div>
            <button onClick={handleNext} style={{ padding: "10px 20px" }}>
            Next
            </button>
        </div>
    );
};

export default Dialogue1;