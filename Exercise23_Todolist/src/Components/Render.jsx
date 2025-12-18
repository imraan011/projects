import React from "react";

const Render = (props) => {
  const todo = props.todo;
  const settodo = props.settodo;

  const render = todo.map((e) => {
    const clickhandler = (id) => {
      const newtodo = todo.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      settodo(newtodo);
    };

    const deletehandler = (id) => {
      const filtertodos = todo.filter((todo) => todo.id != id);
      settodo(filtertodos);
    };
    return (
      <div
        className="bg-gray-200 mb-3 p-1 px-4 rounded gap-2.5 flex "
        key={e.id}
      >
        <button
          onClick={() => clickhandler(e.id)}
          className="active:scale-90 ease-in-out justify-end"
        >
          <i className="ri-check-double-line"></i>
        </button>
        <h1
          className={e.completed ? "line-through text-gray-500" : "text-black"}
        >
          {e.text}
        </h1>

        <button
          onClick={() => deletehandler(e.id)}
          className="active:scale-90 ease-in-out justify-end ml-auto"
        >
          <i class="ri-delete-bin-fill"></i>
        </button>
      </div>
    );
  });
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].completed == true) {
      var remainingTasks = todo.length - 1;
    } else {
      var remainingTasks = todo.length;
    }
  }
  return (
    <div>
      <h1 className="text-2xl font-thin">{render}</h1>
      <h1 className="absolute top-3 font-thin capitalize">remaining Task : {remainingTasks}</h1>
    </div>
  );
};

export default Render;
