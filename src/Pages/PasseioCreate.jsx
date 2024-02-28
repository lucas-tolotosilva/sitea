import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function PasseioCreate() {
    const { data, setData, post, processing, errors, reset } = useForm({
        local: '',
        descricao: '',
        categoria: '',
        incluso: '',
        cortesia: '',
        duracao: '',
        faixa_etaria: '',
        formatura: false,
        img: null,
    });

     const handleOnChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setData(event.target.name, value);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route('passeios.store'));
    };

    return (
        <GuestLayout>
            <form onSubmit={submit} encType="multipart/form-data" className='bg-white'>
                <div className="mb-4">
                    <label htmlFor="local">Local:</label>
                    <input
                        id="local"
                        type="text"
                        name="local"
                        value={data.local}
                        onChange={handleOnChange}
                        className="mt-1 block w-full"
                        placeholder='Rua João Melão'
                        required
                    />
                    {errors.local && <div className="text-red-500">{errors.local}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={data.descricao}
                        onChange={handleOnChange}
                        className="mt-1 block w-full"
                        placeholder='Descrição do Passeio'
                        required
                    />
                    {errors.descricao && <div className="text-red-500">{errors.descricao}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="categoria">Categoria:</label>
                    <input
                        id="categoria"
                        type="text"
                        name="categoria"
                        value={data.categoria}
                        onChange={handleOnChange}
                        className="mt-1 block w-full"
                        placeholder='Pedagógico, cultural ou lazer'
                        required
                    />
                    {errors.categoria && <div className="text-red-500">{errors.categoria}</div>}
                </div>
                
                <div className="mb-4">
                    <label htmlFor="incluso">Incluso:</label>
                    <input
                        id="incluso"
                        type="text"
                        name="incluso"
                        value={data.incluso}
                        onChange={handleOnChange}
                        className="mt-1 block w-full"
                        placeholder='Ex.: Ingresso, lanche e transporte'
                        required
                    />
                    {errors.incluso && <div className="text-red-500">{errors.incluso}</div>}
                </div>
                
                <div className="mb-4">
                    <label htmlFor="cortesia">Cortesia:</label>
                    <input
                        id="cortesia"
                        type="text"
                        name="cortesia"
                        value={data.cortesia}
                        onChange={handleOnChange}
                        className="mt-1 block w-full"
                        placeholder='Ex.: 1 cortesia a cada 10 alunos'
                        required
                    />
                    {errors.cortesia && <div className="text-red-500">{errors.cortesia}</div>}
                </div>
                
                <div className="mb-4">
                    <label htmlFor="duracao">Duração:</label>
                    <input
                        id="duracao"
                        type="text"
                        name="duracao"
                        value={data.duracao}
                        onChange={handleOnChange}
                        className="mt-1 block w-full"
                        placeholder='Ex.: Integral (7h)'
                        required
                    />
                    {errors.duracao && <div className="text-red-500">{errors.duracao}</div>}
                </div>
                
                <div className="mb-4">
                    <label htmlFor="faixa_etaria">Faixa Etária:</label>
                    <input
                        id="faixa_etaria"
                        type="text"
                        name="faixa_etaria"
                        value={data.faixa_etaria}
                        onChange={handleOnChange}
                        className="mt-1 block w-full"
                        placeholder='Ex.: Livre)'
                        required
                    />
                    {errors.faixa_etaria && <div className="text-red-500">{errors.faixa_etaria}</div>}
                </div>

                <div className="mb-4">
                    <label>
                        <input
                            type="checkbox"
                            name="formatura"
                            checked={data.formatura}
                            onChange={handleOnChange}
                            className="mr-2"
                        />
                        Formatura
                    </label>
                </div>

                {/* Adicione os campos restantes conforme necessário */}

                <div className="mb-4">
                    <label htmlFor="img">Imagem:</label>
                    <input
                        id="img"
                        type="file"
                        name="img"
                        onChange={handleOnChange}
                    />
                    {errors.img && <div className="text-red-500">{errors.img}</div>}
                </div>

                <PrimaryButton className="mt-4" disabled={processing}>
                    Cadastrar Passeio
                </PrimaryButton>
            </form>
        </GuestLayout>
    );
}