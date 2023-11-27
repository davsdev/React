import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Guest() {
  const [contatos, setContatos] = useState([]);
  const [novoContato, setNovoContato] = useState({
    id: "",
    nome: "",
    contato: "",
  });

  // Função para criar ou atualizar um contato
  const criarContato = () => {
    const contatoExistente = contatos.find(
      (contato) => contato.nome === novoContato.nome
    );

    if (contatoExistente) {
      alert("Já existe um contato com esse nome!");
      return;
    }

    if (novoContato.id) {
      axios
        .put(`http://localhost:3005/contatos/${novoContato.id}`, novoContato)
        .then((response) => {
          console.log("Contato atualizado:", response.data);
          carregarContatos();
          setNovoContato({ id: "", nome: "", contato: "" });
        })
        .catch((error) => {
          console.error("Erro ao atualizar contato:", error);
        });
    } else {
      axios
        .post("http://localhost:3005/contatos", novoContato)
        .then((response) => {
          console.log("Contato criado:", response.data);
          carregarContatos();
          setNovoContato({ id: "", nome: "", contato: "" });
        })
        .catch((error) => {
          console.error("Erro ao criar contato:", error);
        });
    }
  };

  const excluirContato = (id) => {
    axios
      .delete(`http://localhost:3005/contatos/${id}`)
      .then((response) => {
        console.log("Contato excluído:", response.data);
        carregarContatos();
      })
      .catch((error) => {
        console.error("Erro ao excluir contato:", error);
      });
  };

  const carregarContatos = () => {
    axios
      .get("http://localhost:3005/contatos")
      .then((response) => {
        setContatos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar contatos:", error);
      });
  };

  useEffect(() => {
    carregarContatos();
  }, []);

  return (
    <section id="guest">
    <h1>Gostou da visita? Deixa teu contato!</h1>
    <input
      className="input-field"
      type="text"
      placeholder="Nome"
      value={novoContato.nome}
      onChange={(e) =>
        setNovoContato({ ...novoContato, nome: e.target.value })
      }
    />
    <input
      className="input-field"
      type="text"
      placeholder="Contato"
      value={novoContato.contato}
      onChange={(e) =>
        setNovoContato({ ...novoContato, contato: e.target.value })
      }
    />
    <button className="submit-button" onClick={criarContato}>
      Salvar Contato
    </button>

      <div>
        <h2>📖 Guest Book</h2>
        {contatos.map((contato) => (
          <div key={contato.id}>
            <p>{contato.nome}: {contato.contato}</p>
            <button onClick={() => excluirContato(contato.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Guest;
