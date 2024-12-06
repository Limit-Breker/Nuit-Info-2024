import React, { useEffect, useRef } from "react";
import Confirm from "../confirm/confirm";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
    acceptText: string;
    declineText: string;
    onAccept?: () => void;
    onDecline?: () => void;
    className?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    content,
    acceptText,
    declineText,
    onAccept,
    onDecline,
    className,
}) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-85p">
            <div className="relative p-4 w-full max-w-2xl max-h-full text-black dark:text-black" /*ref={modalRef}*/>
                <div className="relative bg-white rounded-vb">
                    <div className="flex items-center justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            {title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                            onClick={onClose}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className={`p-4 space-y-4 overflow-auto h-[500px] ${className}`}>
                        {content}
                    </div>
                    <div className="flex items-center justify-between p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <Confirm title={acceptText} couleur={"green"} onClick={onAccept} />
                        <Confirm title={declineText} couleur={"red"} onClick={onDecline} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

