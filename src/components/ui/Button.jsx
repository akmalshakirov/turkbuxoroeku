import React from "react";

const Button = ({ children }) => {
    return (
        <button className='p-[7px] bg-[#E5006A] rounded-[10px] hover:bg-[#e5006bb6] transition-colors'>
            {children}
        </button>
    );
};

export default Button;
