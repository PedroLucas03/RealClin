import React, { useState, useEffect } from 'react';
import Sidebar from '../componentes/sidebar.js';
import Header from '../componentes/Header.js';
import '../styles/index.css';
import '../styles/estagiario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adicionar from './adicionar.js';

const Prontuario = () => {
  const [prontuarios, setProntuarios] = useState([
    { nome: 'Maria', numero: '2545692', status: 'Ativo', data: '12 Jan. 2024' },
    { nome: 'Ana', numero: '1362589', status: 'Cancelado', data: '14 Out. 2022' },
    
  ]);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedProntuarios = localStorage.getItem('prontuarios');
    if (storedProntuarios) {
      setProntuarios(JSON.parse(storedProntuarios));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('prontuarios', JSON.stringify(prontuarios));
  }, [prontuarios]);

  const adicionarProntuario = (novoProntuario) => {
    setProntuarios([...prontuarios, novoProntuario]);
    setShowForm(false); 
  };

  return (
    <div className="container-fluid">
      <div className="row" >
        <Sidebar />
        <div className="col cadastro">
          <Header />
          {!showForm ? (
            <>
          <div class="d-flex align-items-center search-users ">
          <h3 class="p-3 ">Prontuários</h3>
          <div class="position-relative">
            <input type="text" class="custom-input  border border-1 rounded-5 ps-2 pe-4"/>
            <i class="fas fa-search position-absolute search-icon"></i>
          </div>

        </div>

        <div className="container-fluid">
            <table className="table table-hover tabela-grande " style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <thead>
                    <tr className="cor">
                      <th scope="col">Nome</th>
                      <th scope="col">Nº do Prontuário</th>
                      <th scope="col">Status</th>
                      <th scope="col">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prontuarios.map((prontuario, index) => (
                      <tr key={index}>
                        <td>{prontuario.nome}</td>
                        <td>{prontuario.numero}</td>
                        <td>{prontuario.status}</td>
                        <td>{prontuario.data}</td>
                      </tr>
                    ))}
                  </tbody>
            </table>
          </div>
              <button className="rounded-2" id="custom-btn" onClick={() => setShowForm(true)}>
                Adicionar
              </button>
            </>
          ) : (
            <Adicionar adicionarProntuario={adicionarProntuario} />
          )}
        
        </div>
      </div>
    </div>
  );
};

export default Prontuario;
