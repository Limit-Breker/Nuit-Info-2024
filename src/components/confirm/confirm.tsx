function Confirm({ title, couleur, onClick, classNameAddon }: { title: string, couleur: string, onClick?: () => void, classNameAddon?: string }) {
    let baseClasses = "";

    switch (couleur) {
        case 'green':
            baseClasses = `
                text-black
                bg-green-button
                hover:bg-green-hover
                focus:ring-green-border`;
            break;
        case 'red':
            baseClasses = `
                text-black
                bg-red-button
                hover:bg-red-hover
                focus:ring-red-border`;
            break;
        case 'dark':
            baseClasses = `
                text-white
                bg-dark-button
                hover:bg-dark-hover
                focus:ring-dark-border`;
            break;
        case 'brown':
            baseClasses = `
                text-black
                bg-brown-button
                hover:bg-brown-hover
                focus:ring-brown-border`;
            break;
    }

    return (
        <button
            type="button"
            className={`focus:ring-2
                        focus:outline-none
                        rounded-jb
                        text-base
                        px-5
                        py-2.5
                        text-center
                        mb-2
                        font-semibold
                        h-10
                        ${baseClasses}
                        ${classNameAddon || ''}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Confirm;
