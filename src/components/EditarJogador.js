import React, { useState } from "react";

function EditarJogador({ jogador }) {
  const [formData, setFormData] = useState({
    nome: jogador.nome,
    posicao: jogador.posicao,
    idade: jogador.idade,
    contrato_fim: jogador.contrato_fim,
    nacionalidade: jogador.nacionalidade,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const atualizarJogador = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/jogadores/${jogador.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Jogador atualizado com sucesso");
        window.location.reload();
      } else {
        alert("Erro ao atualizar jogador");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <form className="app-form--edit" onSubmit={atualizarJogador}>
      <div>
        <div className="app-form--edit__input">
          {" "}
          <b> Nome: </b>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>

        <div className="app-form--edit__input">
          <b> Posição:</b>
          <input
            type="text"
            name="posicao"
            defaultValue={jogador}
            value={formData.posicao}
            onChange={handleChange}
          />
        </div>

        <div className="app-form--edit__input">
          <b>Idade:</b>
          <input
            type="number"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
          />
        </div>
        <div className="app-form--edit__input">
          <b> Nacionalidade: </b>
          <input
            type="text"
            name="nacionalidade"
            value={formData.nacionalidade}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <button className="app-form--edit__button" type="submit">
          Salvar
        </button>
      </div>
    </form>
  );
}

export default EditarJogador;
