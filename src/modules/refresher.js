import addToToDoList from './addTodoList.js';
import { saveDataInLocalStorage, todoArray } from './storage.js';

const refreshButton = () => {
  todoArray.splice(0, todoArray.length);
  saveDataInLocalStorage();
  addToToDoList();
};

export default refreshButton;
