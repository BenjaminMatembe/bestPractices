import { todoArray, saveDataInLocalStorage } from './storage.js';

import runCheckers from './checking.js';

const addToToDoList = () => {
  const todoList = document.querySelector('.listedTodos');
  todoList.innerHTML = '';
  let index = 0;
  for (let i = 0; i < todoArray.length; i += 1) {
    todoArray[i].index = i + 1;
    saveDataInLocalStorage();
  }

  const taskInArray = JSON.parse(localStorage.getItem('storedTasks'));
  for (let i = 0; i < taskInArray.length; i += 1) {
    for (let j = 0; j < taskInArray.length; j += 1) {
      if (taskInArray[j].index === i + 1) {
        index = j;
        break;
      }
    }

    const taskElementTag = document.createElement('li');
    taskElementTag.classList.add('item-element');
    todoList.appendChild(taskElementTag);

    const tasksForm = document.createElement('form');
    tasksForm.classList.add('form');
    taskElementTag.appendChild(tasksForm);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = todoArray[index].completed ? 'checked' : '';
    tasksForm.appendChild(checkbox);

    const input = document.createElement('input');
    input.type = 'text';
    input.value = `${todoArray[index].description}`;
    input.className = 'todoText';
    tasksForm.appendChild(input);

    const buttonForDelete = document.createElement('button');
    buttonForDelete.textContent = 'delete';
    buttonForDelete.type = 'button';
    taskElementTag.appendChild(buttonForDelete);

    checkbox.addEventListener('click', () => {
      runCheckers(i);
      addToToDoList();
    });

    input.addEventListener('input', () => {
      todoArray[i].description = input.value;
      saveDataInLocalStorage();
    });

    buttonForDelete.addEventListener('click', () => {
      todoArray.splice(i, 1);
      saveDataInLocalStorage();
      addToToDoList();
    });
  }
};

export default addToToDoList;
