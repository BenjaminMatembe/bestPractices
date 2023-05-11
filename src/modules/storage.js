const todoArray = JSON.parse(localStorage.getItem('storedTasks')) || [];

const saveDataInLocalStorage = () => {
  localStorage.setItem('storedTasks', JSON.stringify(todoArray));
};
export { todoArray, saveDataInLocalStorage };