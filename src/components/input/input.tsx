import React, { forwardRef } from 'react';

interface InputProps {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

// Utilisation de React.forwardRef pour permettre le passage d'une ref
const Input = forwardRef<HTMLInputElement, InputProps>(({
    id,
    label,
    placeholder,
    type,
    defaultValue,
    onChange,
    onKeyDown,
}, ref) => {
    return (
        <div className="mb-1">
            <label
                htmlFor={id}
                className=" block
                            font-Krub
                            mt-6
                            ml-1"
            >
                {label}
                <span className="red-">
                    *
                </span>
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
                onKeyDown={onKeyDown} // Ajout de onKeyDown
                ref={ref} // Ajout de la ref
                className=" rounded-md
                            border-spacing-1
                            border-2
                            border-input-border
                            bg-input-background
                            focus:bg-input-background
                            focus:dark:bg-input-background
                            focus:ring-1
                            focus:ring-black
                            text-black
                            w-full
                            p-1
                            font-Krub"
            />
        </div>
    );
});

export default Input;
