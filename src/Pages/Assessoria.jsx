import React, { useState } from 'react';
import Menu from './../Components/Menu';
import Footer from './../Components/Footer';
import { listAssessoria } from './../Assessoria/listAssessoria';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Assessoria() {
    const [startIndex, setStartIndex] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);
  
    const nextPage = () => {
      if (startIndex + 4 >= listAssessoria.length) {
        // Chegou ao final, ocultar botão de avançar
        return;
      } else {
        // Avançar de um em um
        setStartIndex(prevIndex => prevIndex + 1);
      }
    };
  
    const prevPage = () => {
      if (startIndex <= 0) {
        // Chegou ao início, ocultar botão de retornar
        return;
      } else {
        // Retornar de um em um
        setStartIndex(prevIndex => prevIndex - 1);
      }
    };
  
    const toggleExpand = index => {
      setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };
  
    const handleImageClick = id => {
      // Encontrar o índice do item na lista com base no ID
      const itemIndex = listAssessoria.findIndex(item => item.id === id);
      // Definir o índice expandido para o índice encontrado
      setExpandedIndex(itemIndex);
    };
  
    // Função para obter o índice corrigido dentro dos limites da lista
    const getCorrectedIndex = index => {
      return (index + listAssessoria.length) % listAssessoria.length;
    };
  
    // Clonar os últimos itens no início e os primeiros itens no final
    const adjustedList = [...listAssessoria.slice(-4), ...listAssessoria, ...listAssessoria.slice(0, 4)];
  
    // Obter os itens visíveis corrigidos
    const visibleItems = adjustedList.slice(startIndex, startIndex + 4);
  
    return (
      <>
        <div className='relative w-full min-h-screen block'>
          <div className='w-full flex justify-center '>
              <Menu />
              <div className='w-screen flex justify-center text-7xl font-bold text-blackk mt-44'>
                  <div>
                      <h1 className='tracking-widest border-b-8 border-[#FFEB90] '>ASSESSORIA</h1>
                  </div>
              </div>
          </div>
  
          <div className='w-full flex justify-center -mt-2'>
            {startIndex > 0 && (
              <button className=' px-4 py-2 rounded-l' onClick={prevPage}>
                <FaAngleLeft />
              </button>
            )}
            <div className='flex mt-20 overflow-hidden relative'>
              {visibleItems.map((item, index) => (
                <div key={item.id} className='relative flex flex-col items-center'>
                  <Circulo img={item.img} onClick={() => handleImageClick(item.id)} nome={item.nome}/>
                  <h2 className='text-2xl font-semibold mt-5'>{item.nick}</h2>
                </div>
              ))}
            </div>
            {startIndex < listAssessoria.length - 4 && (
              <button className=' px-4 py-2 rounded-r' onClick={nextPage}>
                <FaAngleRight />
              </button>
            )}
          </div>
  
          <div className='w-full flex justify-center mb-20'>
            {expandedIndex !== null && (
              <div className='w-[1200px] bg-white p-14 shadow-md'>
                <h3 className='text-2xl font-semibold'>{listAssessoria[expandedIndex].nome}</h3><br />
                <p className='text-justify'>{listAssessoria[expandedIndex].sobre}</p>
              </div>
            )}
          </div>
  
          <Footer />
        </div>
      </>
    );
  }
  

function Circulo({ img, onClick }) {
  return (
    <div className='w-60 h-60 rounded-full bg-white mx-2 transition-transform cursor-pointer' onClick={onClick}>
      {img && <img src={img} alt='Imagem do Slide' className='w-full h-full object-cover rounded-full' />}
    </div>
    
  );
}
