import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';

function Gerenciador() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [lists, setLists] = useState([
    { id: 1, title: 'A fazer', cards: [] },
    { id: 2, title: 'Fazendo', cards: [] },
    { id: 3, title: 'Concluída', cards: [] }
  ]);

  const addTaskToList = (listId) => {
    const newTask = { id: Date.now(), text: 'Nova tarefa' };
    const updatedLists = lists.map(list => {
      if (list.id === listId) {
        return { ...list, cards: [...list.cards, newTask] };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const editTask = (listId, cardId, newText) => {
    const updatedLists = lists.map(list => {
      if (list.id === listId) {
        const updatedCards = list.cards.map(card => {
          if (card.id === cardId) {
            return { ...card, text: newText };
          }
          return card;
        });
        return { ...list, cards: updatedCards };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const deleteTask = (listId, cardId) => {
    const updatedLists = lists.map(list => {
      if (list.id === listId) {
        const updatedCards = list.cards.filter(card => card.id !== cardId);
        return { ...list, cards: updatedCards };
      }
      return list;
    });
    setLists(updatedLists);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="#">Projeto Trabalho</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
              <button className="btn btn-danger my-2 my-sm-0" onClick={() => 
              {
                window.location.reload();
              }}>Sair</button>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          {lists.map(list => (
            <div key={list.id} className="col-md-4">
              <div className="card">
                <div className="card-header">{list.title}</div>
                <ul className="list-group list-group-flush">
                  {list.cards.map(card => (
                    <li key={card.id} className="list-group-item">
                      <textarea
                        className="form-control mb-2"
                        value={card.text}
                        onChange={(e) => editTask(list.id, card.id, e.target.value)}
                        onBlur={(e) => editTask(list.id, card.id, e.target.value)}
                      />
                      <button className="btn btn-danger btn-sm" onClick={() => deleteTask(list.id, card.id)}>Excluir</button>
                    </li>
                  ))}
                </ul>
                <div className="card-footer">
                  <button className="btn btn-primary btn-sm" onClick={() => addTaskToList(list.id)}>Criar nova Tarefa</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gerenciador;
