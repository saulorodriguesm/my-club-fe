import React, { useState } from "react";
import ListarJogadores from "./components/ListarJogadores";
import AdicionarJogador from "./components/AdicionarJogador";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  return (
    <div className="app">
      <div className="app-container">
        {" "}
        <div className="app-header">
          {" "}
          <h1>MyClub</h1>
        </div>
        <ListarJogadores isModalOpen={isModalOpen} />
        <button className="app-add--button" onClick={handleClickModal}>
          {" "}
          Adicionar Jogador{" "}
        </button>
        {isModalOpen ? <AdicionarJogador /> : ""}
      </div>
    </div>
  );
}

export default App;
