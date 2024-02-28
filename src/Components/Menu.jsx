import React from 'react';
import { Link } from 'react-router-dom';
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
        const contactSection = document.getElementById('contato');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

    return (
        <>
            <div className="max-w-7xl mx-auto lg:p-4 absolute top-0 z-50">
                <div className="flex items-center justify-center font-bold text-base ml-20 gap-24">
                    <span className='hover:cursor-pointer'>
                        <Link to="/">HOME</Link>
                    </span>
                    <span className='hover:cursor-pointer'>
                        <Link href="/#contato" onClick={scrollToContact}>CONTATO</Link>
                    </span>
                    <div className="w-36 rounded-full">
                        <img className='w-full h-full object-fill' src={logo} alt="Logo" />
                    </div>
                    <span className='hover:cursor-pointer'>
                        <Link to="/assessoria">ASSESSORIA</Link>
                    </span>
                    <div className="inline-flex overflow-hidden">
                        <div
                            className=""
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='flex gap-1 items-center'>
                                <button className='hover:cursor-pointer'>
                                    <Link to="/recreacao">RECREAÇÃO</Link>
                                </button>
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
