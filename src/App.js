import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Importe o arquivo CSS do Bootstrap ou o seu próprio estilo
import Gerenciador from './Gerenciador'; // Importe a outra tela

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('Username:', username);
    console.log('Password:', password);
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
    } else {
      toast.error('Usuário ou senha incorretos');
    }
    // Simulando a autenticação bem-sucedida
  };

  if (loggedIn) {
    return <Gerenciador />;
  }

  return (
    <div className="container h-100 mt-5">
      <ToastContainer />
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Usuário</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Digite seu usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4 custom-btn">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
