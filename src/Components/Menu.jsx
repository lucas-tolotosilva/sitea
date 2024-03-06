import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import logo from './../img/logo.png';
import DropdownMenu from './DropdownMenu';
import { BiCaretRight } from 'react-icons/bi';

export default function Menu(props) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const scrollToContact = () => {
        // Rolar suavemente até o componente de formulário (ID "contato")
        scroll.scrollTo("contato", { smooth: true, duration: 500 });
    };

    return (
        <>
            <div className="w-[1280px] mx-auto lg:p-4 absolute top-0 z-50">
                <div className="flex items-center justify-center font-bold text-sm">
                    <Link to="/"><span className='flex justify-center hover:cursor-pointer w-[180px] py-2 shadow-xl bg-[#FAFAFA] hover:bg-[#F0CC2B] rounded-s-full'>
                        HOME
                    </span></Link>
                    {window.location.pathname === '/' ? (
                        <ScrollLink to="contato" smooth={true} duration={500}><span className='flex justify-center hover:cursor-pointer w-[200px] -mr-[10px] py-2 shadow-xl bg-[#FAFAFA] hover:bg-[#F0CC2B]'>
                            CONTATO
                        </span></ScrollLink>
                    ) : (
                        <a href="/#contato" onClick={scrollToContact} ><span className='flex justify-center hover:cursor-pointer w-[200px] -mr-[10px] py-2 shadow-xl bg-[#FAFAFA] hover:bg-[#F0CC2B]'>
                            CONTATO
                        </span></a>
                    )}
                
                    <div className="flex justify-center rounded-full w-[140px] z-30">
                        <img className='w-32 h-32 object-contain' src={logo} alt="Logo" />
                    </div>
                    <Link to="/assessoria"> <span className='flex justify-center hover:cursor-pointer w-[200px] -ml-[10px] py-2 shadow-xl bg-[#FAFAFA] hover:bg-[#F0CC2B]'>
                        ASSESSORIA
                    </span> </Link>
                    <div className="flex justify-center overflow-hidden w-[180px] py-2 shadow-xl bg-[#FAFAFA] hover:bg-[#F0CC2B] rounded-r-full">
                        <div
                            className=""
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='flex gap-1 items-center'>
                                <Link><button className='hover:cursor-pointer'>
                                    RECREAÇÃO
                                </button></Link>
                                <BiCaretRight />
                            </div>

                            {isDropdownVisible ? <DropdownMenu /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
