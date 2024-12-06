import React from 'react';
import Dialogues from './Dialogues.json';
import { useState } from 'react';
import HeaderAccueil from '../../components/header_footer/headerAccueil';
import Confirm from '../../components/confirm/confirm';
import { dialogueImage } from '../../constants/dialogueImage';
import { speakerImage } from '../../constants/speakerImage';

interface Phrase {
    personnage: 'marin' | 'lucie';
    texte: string;
}

interface Dialogue {
    titre: string;
    img: keyof typeof dialogueImage;
    phrases: Phrase[];
}

const Dialogue1: React.FC = () => {

    const dialogues: Dialogue[] = (Dialogues as Dialogue[]).map((dialogue: Dialogue) => {
        return {
            titre: dialogue.titre,
            img: dialogue.img as keyof typeof dialogueImage,
            phrases: (dialogue.phrases as Phrase[]).map((phrase: Phrase) => {
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
    const currentDialogue: Dialogue = dialogues[currentDialogueIndex];
    const imagePath: string = dialogueImage[currentDialogue.img];

    const currentPhrase = currentDialogue.phrases[currentPhraseIndex];

    // Gestion du bouton Next
    const handleNext = () => {
        if (currentDialogueIndex < (dialogues as Dialogue[]).length - 1) {
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

    const handleBackPhrase = () => {
        if (currentPhraseIndex > 0) {
            setCurrentPhraseIndex(currentPhraseIndex - 1);
        } else {
            if (currentDialogueIndex > 0) {
                setCurrentDialogueIndex(currentDialogueIndex - 1);
                setCurrentPhraseIndex(dialogues[currentDialogueIndex - 1].phrases.length - 1);
            } else {
                alert("Début des dialogues !");
            }
        }
    }

    const otherPersonnage = currentPhrase.personnage === 'marin' ? 'lucie' : 'marin';

    return (
        <div className="flex-col flex items-center justify-end pb-12 w-full max-w-[100vw] overflow-hidden relative min-h-[100vh]">
            <HeaderAccueil />

            <img
                src={imagePath}
                className="absolute top-0 left-0 w-[100vw] h-[100vw] object-cover brightness-50"
            />

            <div className="bg-white/30 border-2 z-10 backdrop-blur-2xl border-white p-8 w-[45vw] rounded-xl gap-y-8 flex flex-col items-center justify-center shadow-xl">
                <div className='flex flex-row items-center justify-between w-full gap-x-8'>
                    <div className='flex flex-col gap-y-2 items-end justify-center'>
                        <div className='flex items-center justify-center gap-x-1'>
                            <div className='h-2 w-2 bg-white/70 rounded-full' />
                            <div className='h-2 w-2 bg-white/70 rounded-full' />
                            <div className='h-2 w-2 bg-white/70 rounded-full' />
                        </div>
                        <img
                            src={speakerImage[currentPhrase.personnage]}
                            className="w-20 h-20 object-cover"
                        />
                    </div>

                    <div className='flex items-start justify-center flex-col gap-y-8 flex-1 w-full'>
                        <p className='font-Mandali text-black text-base font-medium'>
                            <span className='font-bold text-lg capitalize'>{currentPhrase.personnage} :</span> <br /> {currentPhrase.texte}
                        </p>
                        <div className="flex w-full items-center justify-center gap-x-2">
                            <Confirm onClick={handleBackPhrase} title='Retour' couleur='gray' />
                            <Confirm onClick={handleNextPhrase} title='Suivant' couleur='blue' />
                        </div>
                    </div>

                    <img
                        src={speakerImage[otherPersonnage]}
                        className="w-20 h-20 object-cover"
                    />
                </div>
            </div >
        </div >
    );
};

export default Dialogue1;