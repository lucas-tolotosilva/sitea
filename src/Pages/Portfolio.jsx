import { useState, useEffect } from 'react';
import { listaPasseios } from './../passeios/Passeios';
import Menu from './../Components/Menu';
import Footer from './../Components/Footer';

export default function Welcome(props) {
    const [filtros, setFiltros] = useState({
        categorias: [],
        faixaEtarias: [],
        duracao: []
    });
    const [filtroSelecionado, setFiltroSelecionado] = useState([])

    const handleCheckboxChange = (event, tipo) => {
        const { id, checked } = event.target;
        setFiltros(prevState => {
            const novoEstado = {
                ...prevState,
                [tipo]: checked
                    ? [...(prevState[tipo] || []), id]
                    : (typeof prevState[tipo] === 'string'
                        ? [prevState[tipo]] // Se for uma string, transforma em array
                        : prevState[tipo]
                    ).filter(item => item !== id)
            };
            return novoEstado;
        });
    };
    
    const passeiosFiltrados = listaPasseios.filter(passeio => {
        const categoriaMatch = filtros.categorias.length === 0 || filtros.categorias.some(categoria => passeio.categoria.includes(categoria));
        const faixaEtariaMatch = filtros.faixaEtarias.length === 0 || filtros.faixaEtarias.some(faixa => passeio.faixaEtaria.includes(faixa));
        const duracaoMatch = filtros.duracao.length === 0 || filtros.duracao.some(duracao => passeio.duracao.includes(duracao));
        return categoriaMatch && faixaEtariaMatch && duracaoMatch;
    });
    
    useEffect(() => {
        const filtrosSelecionados = Object.entries(filtros).flatMap(([tipo, valores]) => {
            return valores.map(valor => ({ tipo, valor }));
        });
        setFiltroSelecionado(filtrosSelecionados);
    }, [filtros]);

    return (
        <div className='relative w-full min-h-screen '>
            <div className='w-full flex justify-center '>
                <Menu />
                <div className='w-screen flex justify-center text-7xl font-bold text-blackk mt-52'>
                    <div>
                        <h1 className='tracking-widest border-b-8 border-[#FFEB90] '>PORTFÓLIO</h1>
                    </div>
                </div>
            </div>
            
            <div className='w-full flex  justify-center mt-20'>
                <div className='w-[1400px] flex  justify-center'>
                    <div className='bg-[#F9F9F9] rounded-sm w-[260px] pt-3 px-4 shadow-xl'>
                        <h2 className='font-semibold text-base'>Filtros Selecionados</h2>
                        <div>
                            {filtroSelecionado.map((filtro, index) => (
                                <span className='text-[#00AAE3] block' key={index}>{filtro.valor}</span>
                            ))}
                        </div>
                        <div className='w-full bg-white rounded-sm shadow-lg my-5 py-3 px-4'>
                            <h3 className='font-semibold text-base mb-4'>Categoria</h3>

                            <input type="checkbox" id="Pedagógico" onChange={(e) => handleCheckboxChange(e, 'categorias')} />
                            <label className='ml-2 mb-2' htmlFor='pedagogico'>Pedagógico</label> <br/>

                            <input type="checkbox" id="Cultural" onChange={(e) => handleCheckboxChange(e, 'categorias')}/>
                            <label className='ml-2' htmlFor='cultural'>Cultural</label><br/>

                            <input type="checkbox" id="Lazer" onChange={(e) => handleCheckboxChange(e, 'categorias')}/>
                            <label className='ml-2' htmlFor='lazer'>Lazer</label>
                        </div>
                        <div className='w-full bg-white rounded-sm shadow-lg my-5 py-3 px-4'>
                            <h3 className='font-semibold text-base mb-4'>Faixa Etária</h3>

                            <input type="checkbox" id="Educação Infantil" onChange={(e) => handleCheckboxChange(e, 'faixaEtarias')}/>
                            <label className='ml-2' htmlFor='infantil'>Educação Infantil</label><br/>

                            <input type="checkbox" id="Fundamental I" onChange={(e) => handleCheckboxChange(e, 'faixaEtarias')}/>
                            <label className='ml-2' htmlFor='funtamental1'>Ensino Fundamental I</label>
                            
                            <input type="checkbox" id="Fundamental II" onChange={(e) => handleCheckboxChange(e, 'faixaEtarias')}/>
                            <label className='ml-2' htmlFor='funtamental2'>Ensino Fundamental II</label>
                            
                            <input type="checkbox" id="Ensino Médio" onChange={(e) => handleCheckboxChange(e, 'faixaEtarias')}/>
                            <label className='ml-2' htmlFor='medio'>Ensino Médio</label>
                        </div>
                        <div className='w-full bg-white rounded-sm shadow-lg my-5 py-3 px-4'>
                            <h3 className='font-semibold text-base mb-4'>Duração</h3>

                            <input type="checkbox" id="Integral" onChange={(e) => handleCheckboxChange(e, 'duracao')} />
                            <label className='ml-2 mb-2' htmlFor='integral'>Período Integral</label> <br/>

                            <input type="checkbox" id="Meio" onChange={(e) => handleCheckboxChange(e, 'duracao')} />
                            <label className='ml-2' htmlFor='meio'>Meio Período</label><br/>
                        </div>
                    </div>

                    {/* Renderizar os cards dos passeios filtrados */}
                    <div className='max-w-[1000px] rounded-md flex justify-center ml-5 gap-10 flex-wrap'>                                
                        {passeiosFiltrados.map(item => (
                                <Card key={item.id} img={item.img} title={item.titulo} id={item.id}/>
                        ))}
                    </div> 
                </div>
            </div>
            <Footer />
        </div>
    );
}



export function Card(props){
    const handleClick = (id) => {
        localStorage.setItem('passeioId', id);
        window.location.href = `/passeio/`;
    };
    
    return(
        
        <div className='w-[280px] h-[340px] bg-white overflow-hidden shadow-2xl rounded-md cursor-pointer' onClick={() => handleClick(props.id)}>
            <div className='h-[290px]'>
                <img className='h-[290px] w-full object-cover' src={props.img} />
            </div>
            <div className='h-[50px] w-full flex items-center justify-center'>
                <span className='font-bold text-base'>{props.title}</span>
            </div>
            
        </div>
    )
}