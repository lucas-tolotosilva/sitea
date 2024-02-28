import React from 'react';
import { useEffect, useState } from 'react';
import { listaPasseios } from './../passeios/Passeios';
import Menu from './../Components/Menu';
import Footer from './../Components/Footer';

export default function PasseioDetalhe() {
  const [passeio, setPasseio] = useState(null);

    useEffect(() => {
        // Recuperar o ID do passeio do localStorage
        const passeioId = localStorage.getItem('passeioId');

        // Procurar o passeio correspondente na lista de passeios com base no ID
        const passeioEncontrado = listaPasseios.find(passeio => passeio.id === parseInt(passeioId));

        // Definir o passeio encontrado no estado
        setPasseio(passeioEncontrado);
    }, []);

    console.log(passeio)
  return (
    <>
      <div className='relative w-full min-h-screen block'>
        <div className='w-full flex justify-center '>
          <Menu />
        </div>
        {
          passeio ? (
              <div className='w-full flex justify-center mt-72 mb-40'>
                        <div className='w-[1094px] h-[585px] bg-[#ffffff] rounded-md shadow-xl flex overflow-hidden'>
                            <div className='w-1/2 h-full'>   
                              <img src={passeio.img} alt="Imagem" className="w-full h-full object-cover" />
                            </div>

                            <div className='w-1/2 full m-10'>
                              <h1 className='font-semibold text-5xl'>{passeio.titulo}</h1>
                              <span className='text-xl text-black opacity-40'>{passeio.categoria}</span>
                              <div className='text-base font-medium mt-5'>
                                <p className='mb-5 '>
                                  {passeio.descricao}
                                </p>
                            
                                <span className='block'>{passeio.incluso === null ? '' : '• Incluso: '+passeio.incluso}</span> 
                                <span className='block'>{passeio.cortesia === null ? '' : '• Cortesia: '+passeio.cortesia}</span>
                                <span className='block'>{passeio.periodo === null ? '' : '• Periodo: '+passeio.periodo}</span>
                                <span className=''>{passeio.faixaEtaria === null ? '' : '• Faixa Etária' + passeio.faixaEtaria.join(' / ')}</span> <br />
                          
                              </div>
                            </div>
                        </div>
                    </div>
            ) : (
              <div>
                    <p>Passeio não encontrado.</p>
                </div>
            )
        }
        

        <Footer />
      </div>
    </>
  );
};