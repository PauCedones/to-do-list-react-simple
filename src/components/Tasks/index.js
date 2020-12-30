import React, { useState } from "react";
import Task from "../Task/index";

function Tasks() {
  //va a ser lo que tipeo en el input, por eso va a ser un string
  const [inputValue, setInputValue] = useState("");
  //queremos almacenar las tareas en un array vacio
  //usamos un array ya que queremos usar el metodo map para iterar
  //y agregar en la lista
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleClick() {
    //creamos la validacion para que no se agreguen tareas vacias
    if (inputValue != "") {
      //creamos una nueva variable con el nombre newtask
      //que quiero que tenga de arranque todos los elementos
      //del array que tenia task, pero no apuntes al mismo puntero en memoria
      //clonamelos y aparte de eso quiero que me agregues un nuevo elemento
      //que se llama inputValue
      const newTasks = [...tasks, inputValue];
      setTasks(newTasks);
      //OTRA FORMA DE HACERLO
      //setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleClick}>Agregar</button>
      <ul className="taskContainer">
        {tasks.map((name, key) => {
          return <Task name={name} key={key} />;
          //{...name} se puede mostrar asi tambien
        })}
      </ul>
    </>
  );
}

export default Tasks;
