import React, { useState } from "react";
import ListarJogadores from "./components/ListarJogadores";
import AdicionarJogador from "./components/AdicionarJogador";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClickModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-header">
          <h1>MyClub</h1>
        </div>
        <div className="app-searchbar">
          <input
            type="text"
            placeholder="Buscar jogador..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <ListarJogadores searchTerm={searchTerm} isModalOpen={isModalOpen} />
        <a
          href="#criar-jogador"
          className="app-add--button"
          onClick={handleClickModal}
        >
          Adicionar Jogador
        </a>
        <div id="criar-jogador" className="app-modal">
          <div>
            <a href="#fechar" className="app-modal--close">
              X
            </a>
            <AdicionarJogador />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
