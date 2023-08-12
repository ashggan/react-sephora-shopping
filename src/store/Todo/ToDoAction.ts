import { TASK_ADDED } from "../../utils/actionTypes";
import Task from "../../types/task";

export const addTask = (task: Task) => {
  return {
    type: TASK_ADDED,
    payload: task,
  };
};
