import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.scss";

export default function ToDo() {
  const [toDos, setToDo] = useState([]);

  useEffect(() => {
    api
      .get("todos?userId=1")
      .then((res) => setToDo(res.data))
      .catch((err) => console.error(`Ocorreu o erro: ${err}`));
  }, []);

  return (
    <main>
      <div className="container">
        <h2>To-do List</h2>
        <div className="todo-boxes">
          {toDos.map((toDo) => {
            return (
              <div className="todo" key={toDo.id}>
                <h3>{toDo.title}</h3>
                <span>Completo: {toDo.completed === true ? "sim" : "não"}</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
