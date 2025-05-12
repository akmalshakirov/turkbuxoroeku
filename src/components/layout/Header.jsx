import React from "react";
import { Link } from "react-router-dom";
import con from "../../images/icon.svg";

const Header = () => {
    return (
        <header className='bg-red-900 text-white  min-w-screen container'>
            <nav className='container mx-auto flex justify-between items-center p-4'>
                <Link to='/' className='text-xl font-bold'>
                    <img src={con} alt='Icon' />
                </Link>
                <div className='flex gap-4'>
                    <Link
                        to='/services'
                        className='hover:text-blue-300 transition-colors'>
                        Xizmatlar
                    </Link>
                    <Link
                        to='/about'
                        className='hover:text-blue-300 transition-colors'>
                        Biz haqimizda
                    </Link>
                    <Link
                        to='/news'
                        className='hover:text-blue-300 transition-colors'>
                        Yangiliklar
                    </Link>
                    <Link
                        to='/contacts'
                        className='hover:text-blue-300 transition-colors'>
                        Kontaktlar
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
