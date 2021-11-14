"use strict";

const taskInput = document.querySelector('input');
const lists = document.querySelector('.lists');

const tasksSection = document.querySelector('.tasks');
const tasks = document.querySelector('.tasks ul');
const taskItems = tasks.children;

const doneSection = document.querySelector('.done');
const dones = document.querySelector('.done ul');
const doneItems = dones.children;


if (taskItems.length === 0) {
  tasksSection.style.display = "none";
};

if (doneItems.length == 0) {
    doneSection.style.display = "none";
}

taskInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    if (taskInput.value === "") {
      alert("Please don't put an empty task");
    } else {
      attachTodo(tasks, taskInput.value);
      taskInput.value = '';
      tasksSection.style.display = "";
    }
  }
});

function attachTodo(tasks, content) {
    let li = document.createElement('li');
    li.textContent = content;
    let btns = document.createElement('div');
    btns.className = 'btns';
    li.appendChild(btns);
  
    const doneButton = document.createElement('span')
    doneButton.className= 'material-icons'
    doneButton.textContent = 'check'
    doneButton.addEventListener('click', (event) => {
        attachDone(content);
        tasks.removeChild(li);            
        if (taskItems.length === 0) {
            tasksSection.style.display = "none";
        };
    }) 
    btns.appendChild(doneButton);
    tasks.appendChild(li);
  }
  
function attachDone(content) {
    let li = document.createElement('li');
    li.textContent = content;
    let btns = document.createElement('div');
    btns.className = 'btns';
    li.appendChild(btns);
  
    const deleteButton = document.createElement('span')
    deleteButton.className= 'material-icons'
    deleteButton.textContent = 'delete'
    deleteButton.addEventListener('click', (event) => {
        dones.removeChild(li);        
        if (doneItems.length == 0) {
            doneSection.style.display = "none";
        }
    }) 
    btns.appendChild(deleteButton);
    dones.appendChild(li);
    doneSection.style.display = ""
  }