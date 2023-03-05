import React from "react"

interface Iprops {
    value: string;
    placeholder?: string;
    handleChange: (e: string) => void; 
}

const TextInput = ({ value, placeholder = "Enter text", handleChange }: Iprops) => {
    return (
        <input onChange={(e) => handleChange(e.target.value)} value={value} placeholder={placeholder} className="w-full h-12 rounded-md border-4 border-gray-200 px-2 mb-6 bg-gray-100 text-black" />
    )
}

export default TextInput