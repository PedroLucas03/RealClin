import React, { useState } from 'react';
import Sidebar from '../componentes/sidebar.js';
import Header from '../componentes/Header.js';

import '../styles/usuario.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const AdicionarEstagiario = ({ adicionarEstagiario }) => {
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('');
  const [turno, setTurno] = useState('');
  const [horario, setHorario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoEstagiario = { nome, area, turno, horario };
    adicionarEstagiario(novoEstagiario);
    setNome('');
    setArea('');
    setTurno('');
    setHorario('');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col cadastro">
          <div className="cadastro-dois">
            <div>
              <h3 id="titulo-dois">Adicionar Estagiário</h3>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <li className="lista-form col-md-6 col-sm-12">
                  <span>Nome</span>
                  <br/>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Área</span>
                  <br/>
                  <input
                    type="text"
                    name="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    required
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Turno Disponível</span>
                  <input
                    type="text"
                    name="turno"
                    value={turno}
                    onChange={(e) => setTurno(e.target.value)}
                    required
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Horário Disponível</span>
                  <input
                    type="text"
                    name="horario"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                    required
                  />
                </li>
              </div>

              <button id="botao-salvar" type="submit">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdicionarEstagiario;
