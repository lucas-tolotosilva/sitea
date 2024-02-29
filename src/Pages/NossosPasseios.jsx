import React from 'react';
import { usePasseios } from './../PasseiosContext'; // Importe o contexto de passeios

export function NossosPasseios() {
  const { passeios } = usePasseios(); // Use o hook usePasseios para acessar o contexto de passeios

  return (
    <div>
      <h2>Lista de Passeios</h2>
      <ul>
        {passeios.map((passeio, index) => (
          <li key={index}>
            <h3>{passeio.nome}</h3>
            <p>Instituição: {passeio.instituicao}</p>
            <p>Local: {passeio.local}</p>
            <div>
              <h4>Fotos:</h4>
              <ul>
                {passeio.imagens.map((imagem, idx) => (
                  <li key={idx}>
                    <img src={imagem} alt={`Imagem ${idx}`} />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
