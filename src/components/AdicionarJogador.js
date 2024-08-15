import React, { useState } from "react";
import axios from "axios";

const AdicionarJogador = () => {
  const [nome, setNome] = useState("");
  const [posicao, setPosicao] = useState("");
  const [idade, setIdade] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/jogadores", {
        nome,
        posicao,
        idade: parseInt(idade),
        imagem,
        nacionalidade
      })
      .then((response) => {
        console.log("Jogador adicionado com sucesso!", response.data);
        setNome("");
        setPosicao("");
        setIdade("");
      })
      .catch((error) => {
        console.error("Houve um erro ao adicionar o jogador!", error);
      });
  };

  return (
    <div className="add-overlay">
      <div className="add-form">
        <h2>Adicionar Jogador</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Posição"
            value={posicao}
            onChange={(e) => setPosicao(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="URL da imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Nacionalidade"
            value={nacionalidade}
            onChange={(e) => setNacionalidade(e.target.value)}
            required
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
};

export default AdicionarJogador;
