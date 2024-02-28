import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// npm i @emailjs/browser
// https://dashboard.emailjs.com/admin
// Conta usada - tolotosilva.lucas@gmail.com

export default function Formulario() {
    const form = useRef();
    const [showPopup, setShowPopup] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Exibindo popup de carregamento
        setShowPopup(true);
        setProgress(0); // Reinicia o progresso
        setShowSuccessMessage(false);

        const intervalId = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 15); // Incrementa o progresso a cada 100ms
        }, 300);

        emailjs
            .sendForm(
                'service_8108gtx',
                'template_1adwmw2', form.current, {
                publicKey: 'ZMNtjki2GBxdfYHgI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Ocultando popup após 3 segundos e exibindo mensagem de sucesso
                    setTimeout(() => {
                        setShowPopup(false);
                        form.current.reset(); // Limpando o formulário
                        setShowSuccessMessage(true);

                        // Ocultando mensagem de sucesso após 2 segundos
                        setTimeout(() => {
                            setShowSuccessMessage(false);
                        }, 2000);
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    // Ocultando popup
                    setShowPopup(false);
                }
            )
            .finally(() => {
                clearInterval(intervalId); // Limpa o intervalo
            });
    };
    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='w-2/4 relative flex justify-center items-center bg-white shadow-2xl shadow-[#00000011] rounded-lg'>
                <div className='w-4/5'>
                    <label className='text-gray2 text-lg font-bold '>Nome</label> <br />
                    <input name="user_name" className='outline-none border-0 bg-whitee rounded-sm border-b-4 border-[#A4A4A4] w-full mb-10' placeholder='Insira o seu nome' required></input><br />

                    <label className='text-gray2 text-lg font-bold'>Escola/Instituição</label><br />
                    <input name="escola" className='outline-none border-0 bg-whitee rounded-sm border-b-4 border-[#A4A4A4] w-full mb-10' placeholder='Insira sua Escola/Instituição' required></input><br />

                    <label className='text-gray2 text-lg font-bold'>E-mail</label><br />
                    <input name="user_email" className='outline-none border-0 bg-whitee rounded-sm border-b-4 border-[#A4A4A4] w-full mb-10' placeholder='Insira o seu e-mail' required></input><br />

                    <label className='text-gray2 text-lg font-bold'>Mensagem</label><br />
                    <textarea name="message" className='outline-none border-0 bg-whitee rounded-sm border-b-4 border-[#A4A4A4] w-full mb-10' placeholder='Insira a mensagem' required></textarea><br />
                        
                    <div className="w-full flex justify-center">
                        <button type='submit' className='bg-[#F0CC2B] rounded-md text-md font-bold py-3 px-10 mb-8'>Enviar</button>
                    </div>
                </div>

            </form>
            {/* Popup de carregamento */}
            {showPopup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg text-center">
                        <p>Enviando formulário...</p>
                        <div className="w-full relative bg-gray-200 rounded-full overflow-hidden mt-4">
                            <div className="bg-yellow-500 h-2 " style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                </div>
            )}
            {/* Popup de sucesso após o envio */}
            {showSuccessMessage && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg text-center">
                        <p>Formulário enviado com sucesso!</p>
                    </div>
                </div>
            )}
        </>
    );
};