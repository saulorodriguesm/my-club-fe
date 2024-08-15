import React, { useState } from "react";
import ListarJogadores from "./components/ListarJogadores";
import AdicionarJogador from "./components/AdicionarJogador";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  return (
    <div className="App">
      <h1>MyClub</h1>
      <ListarJogadores isModalOpen={isModalOpen} />
      <button onClick={handleClickModal}> Adicionar Jogador </button>
      {isModalOpen ? <AdicionarJogador /> : ""}
    </div>
  );
}

export default App;
