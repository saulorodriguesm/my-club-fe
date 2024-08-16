import React, { useState, useEffect } from "react";
import axios from "axios";
import EditarJogador from "./EditarJogador";

const ListarJogadores = ({ searchTerm }) => {
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

  const jogadoresFiltrados = jogadores.filter((jogador) =>
    jogador.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ul className="app-list">
        {jogadoresFiltrados.map((jogador) => (
          <div className="app-list--item" key={jogador.id}>
            <li>
              <div className="app-list--image">
                <img alt="Imagem do jogador" src={jogador.imagem} />
              </div>
              <div className="app-list--info">
                <div>
                  <b>Nome:</b> {jogador.nome}
                </div>
                <div>
                  <b>Posição:</b> {jogador.posicao}
                </div>
                <div>
                  <b>Idade:</b> {jogador.idade} anos
                </div>
                <div>
                  <b>Nacionalidade:</b> {jogador.nacionalidade}
                </div>
                <div className="app-list--buttons">
                  <button
                    className="app-button--edit"
                    onClick={() => handleClickModal(jogador.id)}
                  >
                    Editar jogador
                  </button>
                  <button
                    className="app-button--delete"
                    onClick={() => excluirJogador(jogador.id)}
                  >
                    Excluir jogador
                  </button>
                </div>

                {jogadorEditandoId === jogador.id && (
                  <EditarJogador jogador={jogador} />
                )}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListarJogadores;
