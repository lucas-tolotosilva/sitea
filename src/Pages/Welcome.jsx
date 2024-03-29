import React, { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import Menu from './../Components/Menu';
import Footer from './../Components/Footer';
import gradientLaranja from './../img/radial-gradient.png'
import imgHeader from './../img/img-header.png'
import { Sobre } from './../Components/Sobre';
import Formulario from './../Components/Formulario';

export default function Welcome(props) {
    
    console.log(window.location.href.split('#')[1])

    useEffect(() => {
        const scrollToContact = () => {
            const contatoElement = document.getElementById("contato");
            if (contatoElement) {
                animateScroll.scrollTo(contatoElement.offsetTop, {
                    smooth: true,
                    duration: 500
                });
            }
        };

        const hash = window.location.hash;
        if (hash === '#contato') {
            scrollToContact();
        } else if (hash === '' && window.location.pathname === '/') {
            // Se estamos na página inicial sem um hash na URL, rolar para o topo da página
            animateScroll.scrollToTop({
                smooth: true,
                duration: 500
            });
        }
    }, []);

    return (
        
        <>
            
            <div className="relative overflow-hidden sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-100 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 text-right">
            
                </div>

                <Menu />
                
                {/* Efeitos Gradientes */}
                <div className='absolute z-10 left-0 top-20 w-80 opacity-70'><img src={gradientLaranja} /></div>
                <div className='absolute z-10 right-0 bottom-10 w-80 opacity-70'><img src={gradientLaranja} /></div>
            

                {/* Fundo translúcido */}
                <div className='w-screen relative h-screen bg-whiteT z-20 backdrop-blur-3xl flex justify-center'>
                    <div className='w-[1280px] h-full flex items-center justify-center px-20 ml-5 mt-8 gap-20'> 
                        <div className='text-7xl font-bold text-blackk '>
                            <h1 >Aqui temos <br/> o melhor dos <br/> dois mundos:</h1>
                            <div className='flex items-center justify-center gap-5 bg-yelowT text-2xl font-semibold rounded-lg p-2 mt-8'>
                                <span>ASSESSORIA</span> |
                                <span>RECREAÇÃO</span> 
                            </div>
                        </div>
                        <div className=''><img src={imgHeader} className='h-[500px] w-[500px]' /></div>
                    </div>
                </div>


            </div>

            <div className='w-full flex justify-center bg-yelowT py-20'>
                <div className='w-[1000px]'>
                    <span className='text-[#6B685B] opacity-50 font-bold'>Sobre Nós</span>
                    <h2 className='font-bold text-5xl text-blackk mb-8'>Venha saber mais sobre a nossa empresa</h2>

                    <p className='text-justify text-lg font-medium'>
                        A <b>A+ Assessoria e Eventos</b> é uma empresa autônoma de Assessoria e Recreação fundada em 2020.
                        <br /><br />
                        Nossa <b>missão</b>, enquanto assessoria, é proporcionar uma divulgação efetiva e ampla dos nossos colaboradores no meio esportivo; enquanto recreação, é proporcionar diversão, entretenimento e renovação, da mente e corpo, sem deixar de lado a absorção de conhecimento e enriquecimento intelectual adaptados para todas as idades, desde os pequenos ao ensino médio, técnico e superior.
                        <br /><br />
                        Nossa <b>visão</b> consiste em atender, com qualidade, segurança e eficiência e nos tornamos referência na área.
                        <br /><br />
                        Nossos <b>valores</b> são baseados no diálogo, respeito e troca mútua, desde os colaboradores que contratam nossos serviços, aos pais e às crianças, adolescentes e adultos envolvidos em nossas atividades.
                        <br /><br />
                        Todos os nossos serviços, desde a divulgação e assessoria esportiva aos recreadores e roteiros, são idealizados para gerar um ambiente confortável e uma experiência enriquecedora, desde o primeiro contato até a conclusão.
                        <br /><br />
                        Nosso combustível é a paixão pelo que fazemos, portanto, se estivermos juntos, a A+ estará a todo vapor.
                    </p>
                </div>
            </div>

            <div className='mt-16 overflow-hidden' >
                <Sobre />
            </div>

            <div className='flex justify-center'>
                <div className='bg-[#FFEB90] opacity-60 w-2/4 h-1 rounded-full' ></div>   
            </div>
            
            <div className='w-full flex justify-center items-center bg-whiteT py-20'>
                <div className='w-[1000px]'>
                    <div className='w-full '>  
                        <span id="contato" className='text-[#6B685B] opacity-50  font-bold'>Nossos Serviços</span>
                        <h2 className='font-bold text-5xl text-blackk mb-16'>Conheça mais sobre nossos serviços</h2>
                    </div>
                    <div className='w-full flex justify-center'>
                        <Formulario />
                    </div>
                </div>
            </div>
            

            <Footer />

        </>
    );
}
