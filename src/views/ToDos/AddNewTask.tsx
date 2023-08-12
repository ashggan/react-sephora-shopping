import { useState } from "react";
import Task from "../../types/task";
import { addTask } from "../../store/Todo/ToDoAction";
import ToDoStore from "../../store/ToDoStore";

const initalTask: Task = {
  title: "",
  detail: "",
  id: "",
  done: false,
};
export default function AddNewTask() {
  const [task, setTask] = useState(initalTask);

  // ToDoStore.subscribe(() =>
  //   console.log("state is changing", ToDoStore.getState())
  // );

  function handleChange(event: { target: { name: string; value: string } }) {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  }

  function addNewtTask(event: { preventDefault: () => void }) {
    event.preventDefault();
    ToDoStore.dispatch(addTask(task));
  }

  return (
    <>
      <div className="container my-10">
        <h1 className="text-3xl font-bold underline">Hello {task.title}!</h1>
        <form onSubmit={addNewtTask}>
          <input
            className="border-b-2 border-indigo-500 my-5"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}
