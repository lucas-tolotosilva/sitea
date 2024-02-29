import React, { createContext, useContext, useState } from 'react';

const PasseiosContext = createContext();

export const usePasseios = () => useContext(PasseiosContext);

export const PasseiosProvider = ({ children }) => {
  const [passeios, setPasseios] = useState([]);

  const adicionarPasseio = (novoPasseio) => {
    setPasseios([...passeios, novoPasseio]);
  };
console.log(passeios)
  return (
    <PasseiosContext.Provider value={{ passeios, adicionarPasseio }}>
      {children}
    </PasseiosContext.Provider>
  );
};