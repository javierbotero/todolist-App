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
const getBtnProjects = () => document.getElementsByClassName('project');
const projectsContainer = () => document.getElementById('projects');
const todosContainer = () => document.querySelector('.todo-container');
const getTodoDiv = () => document.getElementById('todos');
const btnInfo = () => document.querySelector('.edit-todo');


const queries = (() => {
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

  const showTodoList = (index) => {
    const project = projectsList[index];
    getTodoDiv().innerHTML = `<h4 class="py-5 text-center text-dark">${project.title} todos</h5>`;
    const container = todoContainer();
    container.classList = 'todo-container d-flex flex-wrap p-3';
    project.getTodos().forEach((todo) => {
      container.innerHTML += `
        <div class="card text-center todo mr-2 mb-2">
          <div class="card-header">
            <h5 class="text-dark">${todo.title}</h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">${todo.isComplete}</h5>
            <p class="card-text">${todo.description}</p>
            <a href="#" class="btn btn-info edit-todo">Edit</a>
          </div>
          <div class="card-footer text-muted">
            Date made
          </div>
        </div>
    `;
    });
    getTodoDiv().appendChild(container);
    editTodo();
  };

  const todoObject = () => {
    const title = getTodoTitle();
    const description = getTodoDescription();
    const selectProject = getTodoProject();
    logic.createTodo(title, description, selectProject);
    showTodoList(selectProject);
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
      html += `<button class="project p-1 border-0 rounded bg-light text-info mr-2 mb-2" data-index="${i}">${project.title}</button>`;
      i += 1;
    });
    return html;
  };

  const displaySetup = () => {
    body.innerHTML = `
    <div id="container" class="bg-info min-vh-100 container-fluid p-0">
      <div id="edit" class="edit-zone bg-light text-center p-5">
        <h3 class="p-3 text-info font-weight-bold">My Todos App</h3>
        <p>The perfect place to organize your life!</p>
        <button class="add-btn p-3 border-0 rounded bg-info text-white">Add Todo</button>
        <button class="add-btn-project p-3 border-0 rounded bg-info text-white">Add Project</button>
      </div>
      <div id="projects" class="projects-zone p-3 d-flex flex-wrap">
        <h4 class="py-5 text-center text-light w-100">My Projects</h4>
        ${gatherProjects()}
      </div>
      <div id="todos" class="bg-light">
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
    [...getBtnProjects()].forEach((project, i) => {
      project.onclick = () => { showTodoList(i); };
    });
  };

  const editTodo = () => {
    todosContainer().addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        const parent = e.target.offsetParent.parentElement.previousElementSibling;
        console.log(parent.textContent);
      }
    });
  };

  return {
    displaySetup,
    displayFormTodo,
    getTodoBtn,
    giveBtnProjectsListeners,
    showTodoList,
    editTodo,
  };

})();

export { queries };