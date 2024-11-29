import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-indigo-100 p-8 flex justify-center space-x-8">
            <div className="bg-pink-200 p-4 rounded-full flex items-center space-x-4 shadow-md">
                <div>
                    <p className="text-sm">mail.adresse@mail.com</p>
                    <p className="text-sm">06 78 68 19 66</p>
                    <p className="text-sm">27 rue des Petits Poneys</p>
                </div>
                <button className="bg-indigo-400 text-white px-4 py-2 rounded-full text-sm">Contactez nous !</button>
            </div>
            <div className="bg-pink-200 p-4 rounded-full flex items-center space-x-4 shadow-md">
                <div>
                    <p className="text-sm">mail.adresse@mail.com</p>
                    <p className="text-sm">06 78 68 19 66</p>
                    <p className="text-sm">27 rue des Petits Poneys</p>
                </div>
                <button className="bg-indigo-400 text-white px-4 py-2 rounded-full text-sm">Contactez nous !</button>
            </div>
            <div className="bg-pink-200 p-4 rounded-full flex items-center space-x-4 shadow-md">
                <div>
                    <p className="text-sm">mail.adresse@mail.com</p>
                    <p className="text-sm">06 78 68 19 66</p>
                    <p className="text-sm">27 rue des Petits Poneys</p>
                </div>
                <button className="bg-indigo-400 text-white px-4 py-2 rounded-full text-sm">Contactez nous !</button>
            </div>
        </footer>

    );
};

export default Footer;