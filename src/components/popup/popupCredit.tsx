import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    github: React.ReactNode;
    linkedin: React.ReactNode;
    role: React.ReactNode;
    className?: string;
    image?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    role,
    github,
    linkedin,
    className,
    image,
}) => {

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center h-full w-full">
            <div className="relative p-4 w-full max-w-2xl text-black bg-white rounded-vb">
                <div className="flex items-center justify-between p-4 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900">
                        {title}
                    </h3>
                    <div className={`p-4 ${className}`}>
                        {role}
                    </div>
                    <img src={image} alt={title} className="w-28 h-28 object-contain" />
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center" onClick={onClose}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <div className={`p-4 ${className}`}>
                    {"Github : "}
                    <a href={"https://github.com/" + github as string} target="_blank" className="text-blue-500 underline">{github}</a>
                </div>
                <div className={`p-4 ${className}`}>
                    {"LinkedIn : "}
                    <a href={"https://www.linkedin.com/in/" + linkedin as string} target="_blank" className="text-blue-500 underline">{linkedin}</a>
                </div>
            </div>
        </div>
    );
};

export default Modal;

