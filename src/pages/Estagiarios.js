import React, { useState, useEffect } from 'react';
import Sidebar from '../componentes/sidebar.js';
import Header from '../componentes/Header.js';
import '../styles/estagiario.css';
import AdicionarEstagiario from './adicionar2.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const Estagiarios = () => {
  const [estagiarios, setEstagiarios] = useState([
    { nome: 'Jorge', area: 'Psicologia', turno: 'Tarde', horario: '10:00 ás 16:00' },
    { nome: 'Eduardo', area: 'Fisioterapia', turno: 'Manhâ', horario: '8:00 ás 14:00' },
  ]);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedEstagiarios = localStorage.getItem('estagiarios');
    if (storedEstagiarios) {
      setEstagiarios(JSON.parse(storedEstagiarios));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('estagiarios', JSON.stringify(estagiarios));
  }, [estagiarios]);

  const adicionarEstagiario = (novoEstagiario) => {
    setEstagiarios([...estagiarios, novoEstagiario]);
    setShowForm(false); 
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col cadastro">
          <Header />
          {!showForm ? (
            <>
              <div className="d-flex align-items-center search-users ">
                <h3 className="p-3 m-0  ">Estagiários</h3>
                <div className="position-relative">
                  <input type="text" className="custom-input border border-1 rounded-5 ps-2 pe-4" />
                  <i className="fas fa-search position-absolute search-icon"></i>
                </div>
              </div>
              <table className="table table-hover tabela " style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <thead>
                  <tr className="cor">
                    <th scope="col">Nome</th>
                    <th scope="col">Área</th>
                    <th scope="col">Turno Disponível</th>
                    <th scope="col">Horário Disponível</th>
                  </tr>
                </thead>
                <tbody>
                  {estagiarios.map((estagiario, index) => (
                    <tr key={index}>
                      <td>{estagiario.nome}</td>
                      <td>{estagiario.area}</td>
                      <td>{estagiario.turno}</td>
                      <td>{estagiario.horario}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="rounded-2" id="custom-btn" onClick={() => setShowForm(true)}>
                Adicionar
              </button>
            </>
          ) : (
            <AdicionarEstagiario adicionarEstagiario={adicionarEstagiario} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Estagiarios;
