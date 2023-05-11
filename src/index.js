import './style.css';

import addToToDoList from './modules/addTodoList.js';

import { todoArray, saveDataInLocalStorage } from './modules/storage.js';

import refreshButton from './modules/refresher.js';

const inputText = document.querySelector('.Text');

const addOfInput = document.getElementById('input-area');

const refreshBtn = document.createElement('button');

refreshBtn.textContent = 'Refresh';

refreshBtn.classList.add('refresh');

const head = document.querySelector('.header');

head.appendChild(refreshBtn);

// function for pushing tasks into the tasks object

const addingOfTasks = (value) => {
  const task = {
    description: value,
    completed: false,
    index: 0,
  };
  todoArray.push(task);
  saveDataInLocalStorage();
  addToToDoList();
};

// function for emptying the local storage

const refreshing = document.querySelector('.refresh');
refreshing.addEventListener('click', refreshButton);
const toAddInput = () => {
  const input = document.getElementById('input-area');
  addingOfTasks(input.value);
};

addOfInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && addOfInput.value !== '') {
    e.preventDefault();
    toAddInput();
    inputText.value = '';
  }
});
const clearAllChecked = document.querySelector('.clear-completed-todos');
clearAllChecked.addEventListener('click', () => {
  const arrayTask = todoArray.filter((task) => task.completed === false);
  refreshButton();
  localStorage.setItem('storedTasks', JSON.stringify(arrayTask));
  const todoList = document.querySelector('.listedTodos');
  arrayTask.forEach((item) => {
    todoArray.push(item);
    todoList.innerHTML += `<li class="item-element">
    <form class="form">
      <input type="checkbox" class="checkbox">
      <input type="text" class="todoText" value= "${item.description}">
    </form>
      <button type="button">delete</button>
    </li>`;
  });
  addToToDoList();
});
addToToDoList();
