import { TaskListProps } from "../../types/props";

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li>{task.title} </li>
      ))}
    </ul>
  );
}
