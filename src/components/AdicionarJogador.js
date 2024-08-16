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
        nacionalidade,
      })
      .then((response) => {
        console.log("Jogador adicionado com sucesso!", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Houve um erro ao adicionar o jogador!", error);
      });
  };

  return (
    <div className="app-form">
      <div className="app-form--container">
        <h2>Adicionar Jogador</h2>
        <form className="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="app-form--input"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            className="app-form--input"
            placeholder="Posição"
            value={posicao}
            onChange={(e) => setPosicao(e.target.value)}
            required
          />
          <input
            type="number"
            className="app-form--input"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />

          <input
            type="text"
            className="app-form--input"
            placeholder="URL da imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
          />

          <input
            type="text"
            className="app-form--input"
            placeholder="Nacionalidade"
            value={nacionalidade}
            onChange={(e) => setNacionalidade(e.target.value)}
            required
          />
          <button className="app-form--button" type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
};

export default AdicionarJogador;
