import { useState, useEffect } from "react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./../Firebase";

export function NossosPasseiosPasseio() {
    const [passeio, setPasseio] = useState(null);
    const [data, setData] = useState([]);

    // Função para obter os dados dos passeios do Firebase
    const getData = async () => {
        const valRef = collection(db, 'db');
        const dataDb = await getDocs(valRef);
        const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }));
        setData(allData);
    };

    useEffect(() => {
        // Recuperar o ID do passeio do localStorage
        const passeioId = localStorage.getItem('passeiooId');

        // Procurar o passeio correspondente na lista de passeios com base no ID
        const passeioEncontrado = data.find(data => data.id == passeioId)

        // Definir o passeio encontrado no estado
        setPasseio(passeioEncontrado);

        // Chamada para obter os dados dos passeios após a montagem inicial do componente
        getData();
    }, [data]);



    console.log(passeio);

    return (
        <div className='relative w-full min-h-screen overflow-x-hidden'>
            <div className='w-full flex justify-center '>
                <Menu />
            </div>

            {/* Renderizar os cards dos passeios filtrados */}
            <div className='w-full rounded-md flex justify-center pb-20 gap-10 flex-wrap overflow-hidden'>
                <div className="w-[1300px]">
                    {/* Renderizar detalhes do passeio */}
                    {passeio && (
                        <div className=''>
                            <div className='w-full flex flex-col justify-start text-7xl font-bold text-blackk ml-5 mt-52'>
                                <h1 className='tracking-wide mb-2 text-6xl block'>{passeio.nome}</h1>
                                <h1 className='font-bold text-2xl text-slate-500'>{passeio.instituicao}</h1>
                            </div>
                            <div className="w-[1300px] flex justify-center">
                                <div className="w-full flex flex-wrap gap-10 justify-start ml-5 mt-20">
                                    {/* Renderizar todas as imagens */}
                                    {passeio.imageUrls.map((imageUrl, index) => (
                                        <img key={index} src={imageUrl} alt={`Imagem ${index}`} className="w-[400px] h-[400px] object-cover" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
