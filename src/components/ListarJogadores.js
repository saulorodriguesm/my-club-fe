import React, { useState, useEffect } from "react";
import axios from "axios";
import EditarJogador from "./EditarJogador";

const ListarJogadores = () => {
  const [jogadores, setJogadores] = useState([]);
  const [jogadorEditandoId, setJogadorEditandoId] = useState(null);

  const handleClickModal = (id) => {
    setJogadorEditandoId(id === jogadorEditandoId ? null : id);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/jogadores")
      .then((response) => {
        setJogadores(response.data);
      })
      .catch((error) => {
        console.error("Houve um erro ao buscar os jogadores!", error);
      });
  }, []);

  const excluirJogador = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/jogadores/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Jogador excluído com sucesso");
        setJogadores(jogadores.filter((jogador) => jogador.id !== id));
      } else {
        alert("Erro ao excluir jogador");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <div>
      <ul className="app-list">
        {jogadores.map((jogador) => (
          <li className="app-list--item" key={jogador.id}>
            <img alt="Imagem do jogador" src={jogador.imagem} />
            {jogador.nome} - {jogador.posicao} - {jogador.idade} anos
            <button onClick={() => handleClickModal(jogador.id)}>
              Editar jogador{" "}
            </button>
            <button onClick={() => excluirJogador(jogador.id)}>
              Excluir jogador
            </button>
            {jogadorEditandoId === jogador.id && (
              <EditarJogador jogador={jogador} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarJogadores;
