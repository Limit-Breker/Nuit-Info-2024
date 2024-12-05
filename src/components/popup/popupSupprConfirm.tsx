import React from 'react';
import Confirm from "../confirm/confirm";

interface SimpleModalProps {
    isOpen: boolean;
    text: string;
    onClose: () => void;
    onAccept: () => void;
    onDecline: () => void;
    acceptText: string;
    declineText: string;
}

const SupprModal: React.FC<SimpleModalProps> = ({ isOpen, text, onClose, onAccept, onDecline, acceptText, declineText }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-jb shadow-lg p-10 w-[500px] h-[220px]">
                <div className="mb-6 text-center">
                    <p className="text-gray-700 text-lg">{text}</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <Confirm title={acceptText} couleur="blue" onClick={onAccept} />
                    </div>
                    <div className="flex-1">
                        <Confirm title={declineText} couleur="red" onClick={onDecline} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupprModal;
