import React, { useState } from "react";
import assessoria from './../img/assessoria.jpg'
import recreacao from './../img/recreacao.png'
import { Recreacao, Assessoria } from "./SobreTextos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { motion } from "framer-motion"

export function Sobre () {

    const variants = {
        current : { x: 0, opacity: 1, scale: 1.15},
        prev: {x: 50, opacity: 0.20, scale: 0.75}
    }

    const slides = [
        {
            title: 'Assessoria',
            slide : assessoria,
            content: Assessoria,
            color: 'bg-[#F0CC2B]'
        },
        {
            title: 'Recreação',
            slide : recreacao,
            content: Recreacao,
            color: 'bg[#F0CC2B]'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isToggled, setIsToggled] = useState(false);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        
        setIsToggled(!isToggled);

        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;

        setIsToggled(!isToggled);
        
        setCurrentIndex(newIndex)
    }

    const posSlide1 = `absolute z-10 left-0 w-[360px] h-[360px] bg-center bg-cover  mt-10 ml-10`
    const posSlide2 = `absolute z-0 right-0 w-[384px] h-[384px] opacity-20 mt-10 mr-20`
    return (
        <div className="w-full flex justify-center">

            <div className=" w-[1280px] flex mb-36">

                <div className="w-6/12">
                    <div className="w-full h-full flex items-center mr-12 mb-36 relative">
                        <div className="h-5/6 w-full relative pl-14">
                        {/* --------- Slide --------- */}
                        <div className="flex ">
                                <div className="flex ">
                                        {slides.map((slide, index) => {
                                            return <motion.img  key={index} src={slide.slide} className={`rounded-md ${currentIndex === index ? posSlide1 : posSlide2}`}
                                                    animate={currentIndex === index ? "current" : "prev"}
                                                    variants={variants}
                                                    /> 
                                        })}
                                </div>
                                
                                <div className="flex  ">
                                    <motion.div 
                                        className="flex items-center justify-center w-auto absolute top-5 right-16"
                                        initial={{ opacity:0 , scale: 0}}
                                        whileInView={{ opacity: 1 , scale: 1}}
                                        transition={{ type: 'spring',delay: 0.8, bounce: 0.55 }}
                                        viewport={{once:true}}>

                                        {/* Seta Esquerda */}
                                        <div className={`flex items-center justify-center w-12 h-12 mr-4 rounded-2xl border-none cursor-pointer bg-[#F0CC2B]`}>
                                            <BsChevronCompactLeft onClick={prevSlide} size={25} color='black' />
                                        </div>

                                        {/* seta Direita */}
                                        <div className={`flex items-center justify-center w-12 h-12 mr-4 rounded-2xl border-none cursor-pointer bg-[#F0CC2B]`}>
                                            <BsChevronCompactRight onClick={nextSlide}  size={25} color='black' />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            {/* --------- Fim Slide --------- */}
                            
                        </div>
                    </div>
                </div>

                <motion.div className="w-6/12 mt-12 flex items-center"
                    initial={{ opacity:0 ,x: 400, scale: 0.5}}
                    whileInView={{ opacity: 1 , x: 0, scale: 1}}
                    transition={{ type: "spring", delay: 0.40 }}
                    viewport={{once:true}}  >

                    {!isToggled ? <Assessoria /> : <Recreacao/>}            
                
                </motion.div>
            </div>
        </div>
    )
}

