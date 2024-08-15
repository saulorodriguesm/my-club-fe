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
      } else {
        alert("Erro ao atualizar jogador");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <form onSubmit={atualizarJogador}>
      <input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
      />
      <input
        type="text"
        name="posicao"
        defaultValue={jogador}
        value={formData.posicao}
        onChange={handleChange}
      />
      <input
        type="number"
        name="idade"
        value={formData.idade}
        onChange={handleChange}
      />
      <input
        type="text"
        name="nacionalidade"
        value={formData.nacionalidade}
        onChange={handleChange}
      />
      <button type="submit">Atualizar</button>
    </form>
  );
}

export default EditarJogador;
