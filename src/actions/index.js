export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export function addNewTask(text,listId) {
  return {
    type: 'ADD_NEW_TASK',
    text,
    listId
  };
}
export const EDIT_TASK = 'EDIT_TASK';
export function editTask(id,text) {
  return {
    type: 'EDIT_TASK',
    id,
    text,
  };
}
export const MOVE_TASK = 'MOVE_TASK';
export function moveTask(id,listId) {
  return {
    type: 'MOVE_TASK',
    id,
    listId,
  };
}
export const DELETE_TASK = 'DELETE_TASK';
export function deleteTask(id) {
  return {
    type: 'DELETE_TASK',
    id,
  };
}
