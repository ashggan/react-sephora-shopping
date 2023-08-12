import { uid } from "uid";
import Task from "../../types/task";
import * as actions from "../../utils/actionTypes";
import { TaskAction } from "../../types/actions";

export default function ToDoReducer(
  state: Task[] = [],
  action: TaskAction
): Task[] {
  switch (action.type) {
    case actions.TASK_ADDED:
      return [
        ...state,
        {
          id: uid(16),
          title: action.payload.title,
          detail: action.payload.detail,
          done: false,
        },
      ];
    case actions.TASK_DONE:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, done: true } : task
      );
    case actions.TASK_REMOVED:
      return state.filter((task) => task.id != action.payload.id);
    default:
      return state;
  }
}
