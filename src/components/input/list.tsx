import React from "react";

interface ListProps{
    id: string;
    label: string;
    items: string[];
    values: string[];
    defaultValue?: string;
}

export const ListeDeroulante: React.FC<ListProps> = ({id,label,items,values,defaultValue}) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id} className="mb-2 text-xs sm:text-sm tracking-wide">{label}</label>
            <select
                id={id}
                defaultValue={defaultValue}
                className=" px-4
                            py-2 border
                            mb-4
                            bg-gray-100
                            dark:bg-gray-200
                            border-gray-300
                            dark:border-gray-600
                            rounded-lg
                            appearance-none
                            text-black
                            dark:text-black
                            leading-tight
                            focus:outline-none
                            focus:border-blue-500
                            dark:focus:border-blue-500
                            focus:bg-blue-50
                            dark:focus:bg-blue-900"
            >
                {items.map((item, index) => (
                    <option key={item} value={values[index]}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default ListeDeroulante;

