import { useState, useEffect } from "react";
import { ref } from "firebase/storage";
import { storage, db } from "./../Firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import logo from './../img/logo.png'
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

export function NossosPasseios() {
  const [data, setData] = useState([])

  const getData = async () => {
    const valRef = collection(db, 'db')
    const dataDb = await getDocs(valRef)
    console.log(dataDb)
    const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
    setData(allData)

  }



  useEffect(() => {
    getData()
  })

  return (
    <div className='relative w-full min-h-screen overflow-x-hidden'>
      <div className='w-full flex justify-center '>
        <Menu />
        <div className='w-screen flex justify-center text-7xl font-bold text-blackk mt-44'>
          <div>
            <h1 className='tracking-widest border-b-8 border-[#FFEB90] '>NOSSOS PASSEIOS</h1>
          </div>
        </div>
      </div>

      {/* Renderizar os cards dos passeios filtrados */}
      <div className='w-full rounded-md flex justify-center pb-20 pt-16  gap-10 flex-wrap overflow-hidden'>
        <div className="w-[1100px] flex justify-center">
          <div className="flex gap-10">
            {data.map(item => (
              <Card key={item.id} img={item.imageUrls[0]} nome={item.nome} id={item.id} data={item.data} instituicao={item.instituicao} />
            ))}
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
}

export function Card(props) {
  const handleClick = (id) => {
    console.log(id)
    localStorage.setItem('passeiooId', id);
    window.location.href = `/nossos-passeios/passeio`;
  };
  function formatarData(data) {
    // Divida a string da data usando o delimitador '-' e obtenha o ano, mês e dia
    const partes = data.split('-');
    const ano = partes[0];
    const mes = partes[1];
    const dia = partes[2];

    // Retorne a data formatada no formato 'DD-MM-YYYY'
    return `${dia}-${mes}-${ano}`;
  }

  return (
    <div className='w-[280px] h-[350px] bg-white overflow-hidden shadow-2xl rounded-md cursor-pointer' onClick={() => handleClick(props.id)}>
      <div className='h-[300px]'>
        <img className='h-[290px] w-full object-cover' src={props.img} />
      </div>
      <div className='h-[40px] w-full pl-5 flex flex-col justify-center'>

        <span className='font-bold block text-xl'>{props.instituicao}</span>
        <span className='font-bold text-base text-slate-500'>{formatarData(props.data)}</span>
      </div>

    </div>
  )
}

