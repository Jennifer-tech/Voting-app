import React from "react";

interface IProps{
    handleClick: () => void;
    label: string;
}

const Button = ({ handleClick, label }: IProps) => {
    return (
        <button onClick= {handleClick} className='w-full h-12 rounded-md bg-green-600 text-white'>
            {label}
        </button>
    )
}

export default Button