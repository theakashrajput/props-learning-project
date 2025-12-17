import React from 'react'

const Button = ({ text, size = "default", color = "default", onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                rounded-md duration-200 ease-in active:scale-95 shadow-md
                ${color === "primary" && "bg-blue-500 text-white hover:bg-blue-600"}
                ${color === "secondary" && "bg-gray-500 text-white hover:bg-gray-600"}
                ${color === "danger" && "bg-red-500 text-white hover:bg-red-600"}
                ${color === "success" && "bg-green-500 text-white hover:bg-green-600"}
                ${color === "default" && "bg-black text-white"}

                ${size === "small" && "text-sm px-3 py-2"}
                ${size === "default" && "px-4 py-3"}
                ${size === "large" && "text-lg px-6 py-4"}

                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                `}
        >{text}</button>
    )
}

export default Button