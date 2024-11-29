function Confirm({ title, couleur, onClick, classNameAddon ,listItem}: { title: string, couleur: string, onClick?: () => void, classNameAddon?: string ,listItem?: boolean}) {
    switch (couleur) {
        case 'green':
            classNameAddon = classNameAddon + `
                                    text-black
                                    bg-green-button
                                    hover:bg-green-hover
                                    focus:ring-green-border`;
            break;
        case 'red':
            classNameAddon = classNameAddon + `
                                    text-black
                                    bg-red-button
                                    hover:bg-red-hover
                                    focus:ring-red-border`;
            break;
        case 'brown':
            classNameAddon = classNameAddon + `
                                    text-black
                                    bg-brown-button
                                    hover:bg-brown-hover
                                    focus:ring-brown-border`;
            break;
        case 'dark':
            classNameAddon = classNameAddon + `
                                    text-white
                                    bg-dark-button
                                    hover:bg-dark-hover
                                    focus:ring-dark-border`;
            break;
    }
    let redDot = null;
    if (!listItem) {
        redDot= <div
        className="absolute bottom-auto left-auto right-1 top-7 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-1 text-xs"></div>
    }
    return (
        <div className="relative inline-flex w-full">
        {redDot}
        <button
            type="button"
            className={`focus:ring-2
                        focus:outline-none
                        font-medium
                        rounded-jb
                        text-base
                        px-5
                        py-2.5
                        text-center
                        mb-2
                        ${classNameAddon || ''}`}
            onClick={onClick}
        >
            {title}
        </button>
        </div>
    );
}

export default Confirm;