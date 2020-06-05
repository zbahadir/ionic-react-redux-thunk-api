
export const START_TASK = 'START_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const STOP_TASK = 'STOP_TASK';
export const INIT_TASK = 'INIT_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const LIST_TASKS = 'LIST_TASKS';

interface StopTaskAction {
  type: typeof STOP_TASK;
}

interface CreateTaskAction {
  type: typeof CREATE_TASK;
}



