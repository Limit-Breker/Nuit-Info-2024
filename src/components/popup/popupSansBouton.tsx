import React, { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
    acceptText?: string;
    declineText?: string;
    onAccept?: () => void;
    onDecline?: () => void;
}

const PopupAmis: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    content,
    onAccept,
    onDecline
}) => {

    const modalRef = useRef<HTMLDivElement>(null);

    function checkIfClickedOutside(event: MouseEvent) {
        if (isOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', checkIfClickedOutside);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div className="relative p-4 w-full max-w-2xl max-h-full" ref={modalRef}>
                <div className="relative bg-white rounded-jb shadow dark:bg-gray-400">
                    <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl text-gray-900 font-bold">
                            {title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-700 bg-red_button hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                            onClick={onClose}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 space-y-4">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupAmis;

