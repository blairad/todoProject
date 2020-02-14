const form = document.querySelector('form');
const todoList = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('input-todo');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    todoMaker(input.value);
    input.value = '';
});

let todoMaker = function(text) {
    let todo = document.createElement('li')
    todo.textContent = text;
    todoList.appendChild(todo);
};
button.addEventListener('click', function(){
  event.preventDefault();
    todoMaker(input.value);
    input.value = '';
})

