import { logic } from './logic';
import { projectsList } from './todos';

const { body } = document;
const getContainer = () => document.getElementById('container');
const formTodo = () => document.getElementById('form');
const getTodoBtn = () => document.querySelector('.add-btn');
const getCloseBtn = () => document.querySelector('.ex-btn');
const getTodoSubmit = () => document.querySelector('.submit-todo');
const getTodoTitle = () => document.querySelector('#title').value;
const getTodoDescription = () => document.querySelector('#description').value;
const getTodoProject = () => document.querySelector('#projects-select').selectedIndex;
const todoContainer = () => document.createElement('div');
const todoContentTitle = () => document.querySelector('.title');
const todoContentDescription = () => document.querySelector('.description');
const todoContent = () => document.querySelector('.todo');
const getBtnProjects = () => document.getElementsByClassName('project');
const getTodoDiv = () => document.getElementById('todos');
// const setTodoContentElements = () => {
//   todoContentTitle().value;
//   todoContentDescription().value;
//   todoContent().value;
// };

const hideFormTodo = () => { formTodo().className = 'hide-form-todo'; };
const showFormTodo = () => { formTodo().className = 'show-form-todo'; };

const addBtnTodoEventDisplay = () => {
  getTodoBtn().onclick = showFormTodo;
};

const addCloseTodo = () => {
  getCloseBtn().onclick = hideFormTodo;
  getTodoSubmit().onclick = hideFormTodo;
  addTodoToArr();
};

const todoObject = () => {
  const title = getTodoTitle();
  const description = getTodoDescription();
  const selectProject = getTodoProject();
  logic.createTodo(title, description, selectProject);
};

const addTodoToArr = () => {
  getTodoSubmit().addEventListener('click', (e) => {
    e.preventDefault();
    todoObject();
  });
};

const gatherProjects = () => {
  let html = '';
  let i = 0;
  logic.projectsList.forEach((project) => {
    html += `<button class="project" data-index="${i}">${project.title}</button>`
    i += 1;
  });
  return html;
};

const queries = (() => {
  const displaySetup = () => {
    body.innerHTML = `
    <div id="container" class="bg-primary">
      <div class="add-todo-form">
        <div id="edit">
          <h3>Edit</h3>
          <button class="add-btn">Add Todo</button>
        </div>
        <div id="projects">
          ${gatherProjects()}
        </div>
        <div id="todos"></div>
      </div>
    </div>
    `;
  };

  const displaySelect = () => {
    let html = '';
    projectsList.forEach((project) => {
      html += `<option value="${project.title}">${project.title}</option>`;
    });
    return html;
  };

  const showTodoList = (index) => {
    console.log('trigger showTodoList');
    const container = todoContainer();
    container.setAttribute('class', 'todo-container');
    const project = projectsList[index];
    project.getTodos().forEach((todo) => {
      container.innerHTML = `
        <div class="card text-center">
          <div class="card-header">
            ${todo.title}
          </div>
          <div class="card-body">
            <h5 class="card-title">${todo.isComplete}</h5>
            <p class="card-text">${todo.description}</p>
            <a href="#" class="btn btn-primary">Edit</a>
          </div>
          <div class="card-footer text-muted">
            Date made
          </div>
        </div>
    `;
    });
    getTodoDiv().innerHTML = container;
  };

  const displayFormTodo = () => {
    const html = `
      <div class="hide-form-todo" id="form">
        <div class='ex-btn'><span>X</span></div>
        <form>
          <label for="title">Title</lable><br>
          <input type="text" id="title">
          <label for="description">Description</lable><br>
          <input type="text" id="description">
          <label for="projects-select">Select the project</label>
          <select id="projects-select">
            ${displaySelect()}
          </select>
          <input class="submit-todo" type="submit" value="Submit">
        </form>
      </div>
    `;

    body.innerHTML += html;
    addBtnTodoEventDisplay();
    addCloseTodo();
  };

  const giveBtnProjectsListeners = () => {
    console.log(getBtnProjects());
    let i = 0;
    [...getBtnProjects()].forEach((project) => {
      project.addEventListener('click', () => { showTodoList(i); });
      i += 1;
    });
  };

  return {
    displaySetup,
    displayFormTodo,
    getTodoBtn,
    giveBtnProjectsListeners,
  };
})();

export default queries;