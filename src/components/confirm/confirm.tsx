function Confirm({ title, couleur, onClick, classNameAddon }: { title: string, couleur: string, onClick?: () => void, classNameAddon?: string }) {
    let baseClasses = "";

    switch (couleur) {
        case 'blue':
            baseClasses = `
                text-black
                bg-light-blue
                hover:bg-black
                hover:text-white
                focus:ring-light-blue`;
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
                bg-black
                hover:bg-light-blue
                hover:text-black
                focus:ring-light-blue`;
            break;
        case 'gray':
            baseClasses = `
                text-black
                bg-dark-gray
                hover:bg-black
                hover:text-white
                focus:ring-light-blue`;
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
                        flex
                        items-center
                        justify-center
                        h-10
                        transition-colors
                        ${baseClasses}
                        ${classNameAddon || ''}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Confirm;
