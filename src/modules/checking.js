import { saveDataInLocalStorage, todoArray } from './storage.js';

export default function runCheckers(index) {
  if (todoArray[index].completed === false) {
    todoArray[index].completed = true;
  } else if (todoArray[index].completed === true) {
    todoArray[index].completed = false;
  }
  saveDataInLocalStorage();
}
