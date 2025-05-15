import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../images/icon.svg";
import OperatorIcon from "../../images/operator.png";
import Button from "../ui/Button";
import Dropdown from "../../images/dropdown.png";
import Flag_RU from "../../images/flag-ru.png";
import Flag_UZ from "../../images/flag-uz.png";
import Flag_EN from "../../images/flag-en.png";
import Modal from "../ui/Modal";

const Header = () => {
    const [langActive, setLangActive] = useState(false);
    const [headerActive, setHeaderActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className='bg-pink-900 transition-colors relative z-[2] text-white delay-0  min-w-screen'>
                <nav className='container mx-auto flex justify-between items-center p-4'>
                    <Link to='/' className='text-xl font-bold'>
                        <img src={Icon} alt='Icon' />
                    </Link>
                    <a
                        href='tel:+998997180303'
                        className='flex gap-1.5 items-center no-underline!'>
                        <img
                            src={OperatorIcon}
                            alt='Operator icon'
                            width={40}
                            height={40}
                            className='p-[3px] border border-pink-600 bg-pink-500/30 rounded-[10px]'
                        />
                        <div>
                            <p className='text-white'>+998 99 718 03-03</p>
                            <small>Turk Buxoro Eku Markazi</small>
                        </div>
                    </a>
                    <div className='flex items-center gap-3.5'>
                        <Button
                            className='font-bold'
                            onClick={() => setIsModalOpen(true)}>
                            Записаться
                        </Button>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title='Salom, bu modal oyna!'>
                            <div className='space-y-4'>
                                <p>
                                    Bu modal komponentining tarkibi. Bu yerga
                                    istalgan JSX kontentini qo'shishingiz
                                    mumkin.
                                </p>

                                <div className='bg-gray-100 p-4 rounded'>
                                    <p className='text-gray-800'>
                                        Matn, rasmlar, formalar yoki boshqa
                                        komponentlar qo'shishingiz mumkin.
                                    </p>
                                </div>

                                <div className='flex justify-end space-x-2'>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className='px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors'>
                                        Bekor qilish
                                    </button>
                                    <button
                                        onClick={() => {
                                            alert("Tasdiqlandi!");
                                            setIsModalOpen(true);
                                        }}
                                        className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors'>
                                        Tasdiqlash
                                    </button>
                                </div>
                            </div>
                        </Modal>
                        <button
                            className={`dropdown ${
                                langActive ? "dropdown-active" : ""
                            }`}
                            onClick={() => setLangActive(!langActive)}>
                            <ul>
                                <li>
                                    <img src={Flag_RU} alt='flag ru' /> RU
                                    <img
                                        src={Dropdown}
                                        alt='dropdown'
                                        width={15}
                                        height={15}
                                        className='inline'
                                    />
                                </li>
                                <ul onClick={(e) => e.stopPropagation()}>
                                    <li>
                                        <img src={Flag_UZ} alt='flag uz' />
                                        UZ
                                    </li>
                                    <li>
                                        <img src={Flag_EN} alt='flag en' />
                                        EN
                                    </li>
                                </ul>
                            </ul>
                        </button>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Link
                            to='/about'
                            className='hover:text-blue-300 no-underline! transition-colors'>
                            O нас
                        </Link>
                        <Link
                            to='/services'
                            className='hover:text-blue-300 no-underline! transition-colors'>
                            Услуги
                        </Link>
                        <Link
                            to='/news'
                            className='hover:text-blue-300 no-underline! transition-colors'>
                            Новости и блог
                        </Link>
                        <Link
                            to='/contacts'
                            className='hover:text-blue-300 no-underline! transition-colors'>
                            Контакты
                        </Link>
                        <button
                            className={`burger-menu ${
                                headerActive ? "burger-close" : ""
                            }`}
                            onClick={() => setHeaderActive(!headerActive)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </header>
            <div
                className={`header-popup ${headerActive ? "active" : ""}`}
                onClick={() => setHeaderActive(false)}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className='flex flex-col gap-1.5'>
                    <h2>
                        <Link to='/about' className='no-underline w-max'>
                            <b>O нас</b>
                        </Link>
                    </h2>
                    <h2 className='flex flex-col'>
                        <Link to='/services' className='no-underline w-max'>
                            <b>Услуги</b>
                        </Link>
                        <Link
                            to='/services'
                            className='text-gray-600 no-underline w-max'>
                            Искусственное оплодотворение (ЭКО)
                        </Link>
                        <Link
                            to='/services'
                            className='text-gray-600 no-underline w-max'>
                            Интрацитоплазматическая инъекция сперматозоидов
                            (ИКСИ)
                        </Link>
                        <Link
                            to='/services'
                            className='text-gray-600 no-underline w-max'>
                            Консультации по репродукции и лечению бесплодия
                        </Link>
                    </h2>
                    <h2>
                        <Link to='/services'>
                            <b>Процедуры и процессы</b>
                        </Link>
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Header;
