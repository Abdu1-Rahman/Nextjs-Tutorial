import React from 'react';
import { IoArrowUpCircleSharp } from "react-icons/io5";

const Button = ({content}) => {
    return (
            <button
                type="button"
                className="flex w-fit items-center gap-2 text-white bg-orange-500 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-4 py-2 transition duration-200 dark:focus:ring-yellow-900"
            >
                {content}
                <IoArrowUpCircleSharp className="text-3xl transform rotate-45 pb-[2px]" />
            </button>
    );
};

export default Button;
