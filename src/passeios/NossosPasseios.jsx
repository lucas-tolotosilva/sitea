export let listaPasseios = []

let nextId = 1;

export const adicionarNovoPasseio = (novoPasseio) => {
    const novoObjeto = { id: nextId++, ...novoPasseio };
    listaPasseios = [...listaPasseios, novoObjeto];
};

import React from 'react'

export default function ListaPasseios() {
  return (
    <div>
      <h2>Lista de Passeios</h2>
      <ul>
        {listaPasseios.map((passeio) => (
          <li key={passeio.id}>
            <h3>{passeio.nome}</h3>
            <p>Instituição: {passeio.instituicao}</p>
            <p>Data: {passeio.data}</p>
            {/* Renderize outras informações do passeio conforme necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
}