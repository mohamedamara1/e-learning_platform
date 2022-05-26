import React from "react";
import ListOfTodos from "list-of-todos";
import Button from "@mui/material/Button";

function TodoListStudent() {
  const items = [
    {
      id: "1",
      text: "Read Chapter 1",
      done: true,
    },
    {
      id: "2",
      text: "Read Chapter 2",
      done: true,
    },
    {
      id: "3",
      text: "Do homework",
      done: false,
    },
    {
      id: "4",
      text: "Prepare for exam",
    },
  ];

  const handleChange = (items) => console.log({ items });

  // return <TodoList todoData={todoData} handleMouseLeave={yourHandleFunction} />;
  return (
    <>
      <h1 className="my-4 font-bold text-center">My tasks for today:</h1>
      <ListOfTodos items={items} onChange={handleChange} />
      <div className="mt-4 text-center">
        <Button variant="contained">Add Task</Button>
      </div>
    </>
  );
  // const handleChange = (items: Task[]) => console.log({ items });
}

export default TodoListStudent;
