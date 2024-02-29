import React, { useState } from 'react';
import logo from '../img/logo.png'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Verifica se o e-mail e a senha correspondem às credenciais válidas
    if (email === 'geovanna@aMais' && password === '321gEovanna@2024') {
      // Credenciais válidas, redireciona para a página protegida
      window.location.href = '/dashboard'; // Substitua pela rota da página protegida
    } else {
      // Credenciais inválidas, exibe uma mensagem de erro
      setError('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  return (
    <div className='relative w-full h-screen flex items-center bg-slate-100 justify-center '>
        <div className='flex w-[500px] items-center flex-col  rounded-md shadow-2xl py-10'>
            <img className='w-40 h-40' src={logo} />
            {error && <p>{error}</p>}
            <div className='w-full mb-10 px-20'>
                <label>E-mail</label> <br />
                <input className='w-full border-b-2 border-grayT focus:outline-none focus:border-yellow-300' type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='w-full px-20'>
                <label>Senha</label> <br/>
                <input className='w-full mb-10 border-b-2 border-grayT focus:outline-none focus:border-yellow-300' type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='bg-yellow-300 px-10 py-1 rounded-ful l' onClick={handleLogin}>Login</button>
            </div>
        </div>  
  );
}

export default Login;
