import { logic } from './logic';
import { projectsList } from './todos';

const { body } = document;
const getContainer = () => document.getElementById('container');
const formTodo = () => document.getElementById('form');
const getformEditTodo = () => document.getElementById('form-edit-todo');
const getCloseEditBtn = () => document.getElementById('x');
const getTodoEditSubmit = () => document.getElementById('submit-edit');
const getTodoBtn = () => document.querySelector('.add-btn');
const getCloseBtn = () => document.querySelector('.ex-btn');
const getTodoSubmit = () => document.querySelector('.submit-todo');
const getTodoTitle = () => document.querySelector('#title').value;
const getTodoDescription = () => document.querySelector('#description').value;
const getTodoProject = () => document.querySelector('#projects-select').selectedIndex;
const getTodoIscomplete = () => document.getElementById('iscomplete').selectedIndex;
const todoContainer = () => document.createElement('div');
const getBtnProjects = () => document.getElementsByClassName('project');
const projectsContainer = () => document.getElementById('projects');
const todosContainer = () => document.querySelector('.todo-container');
const getTodoDiv = () => document.getElementById('todos');
const getEditTodoTitle = () => document.getElementById('edit-todo-title').value;
const getEditTodoDescription = () => document.getElementById('edit-description').value;
const getEditTodoIsComplete = () => document.getElementById('edit-iscomplete').value;
const getEditProjectSelect = () => document.getElementById('edit-select').selectedIndex;
const btnInfo = () => document.querySelector('.edit-todo');


const queries = (() => {
  const hideFormTodo = () => { formTodo().className = 'hide-form-todo'; };
  const showFormTodo = () => {
    formTodo().className = 'form-todo';
    addCloseTodo();
  };

  const addBtnTodoEventDisplay = () => {
    getTodoBtn().onclick = showFormTodo;
  };

  const removeEditTodoForm = () => {
    getformEditTodo().remove();
    editTodo();
    addBtnTodoEventDisplay();
    giveBtnProjectsListeners();
  };

  const addCloseTodo = () => {
    getCloseBtn().onclick = hideFormTodo;
    getTodoSubmit().onclick = hideFormTodo;
  };

  const showTodoList = (index) => {
    const project = projectsList[index];
    getTodoDiv().innerHTML = `<h4 class="py-5 text-center text-dark">${project.title} todos</h5>`;
    const container = todoContainer();
    container.classList = 'todo-container d-flex flex-wrap p-3';
    project.getTodos().forEach((todo, i) => {
      container.innerHTML += `
        <div class="card text-center todo mr-2 mb-2">
          <div class="card-header">
            <h5 class="text-dark">${todo.title}</h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">${todo.isComplete}</h5>
            <p class="card-text">${todo.description}</p>
            <a href="#" data-index-project="${index}" data-index-todo="${i}" class="btn btn-info edit-todo">Edit</a>
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

  const updateTodo = (e) => {
    e.preventDefault();
    const title = getEditTodoTitle();
    const description = getEditTodoDescription();
    const isComplete = getEditTodoIsComplete();
    const project = getEditProjectSelect();
    logic.editTodo(
      parseInt(e.target.dataset.indexProject, 10),
      e.target.dataset.indexTodo,
      title,
      description,
      project,
      isComplete,
    );
    removeEditTodoForm();
    showTodoList(project);
  };

  const addCloseEditTodo = () => {
    getCloseEditBtn().addEventListener('click', removeEditTodoForm);
    getTodoEditSubmit().addEventListener('click', (e) => { updateTodo(e); });
  };

  const todoObject = () => {
    const title = getTodoTitle();
    const description = getTodoDescription();
    const selectProject = getTodoProject();
    const iscomplete = getTodoIscomplete();
    logic.createTodo(title, description, selectProject, iscomplete);
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

  const selected = (indexSelected, i) => {
    let html = '';
    if (indexSelected) {
      if (indexSelected === i) {
        html += 'selected';
      }
    }
    return html;
  };

  const displaySelect = (indexSelected = false) => {
    let html = '';
    projectsList.forEach((project, i) => {
      html += `<option value="${project.title}" ${selected(indexSelected, i)}>${project.title}</option>`;
    });
    return html;
  };

  const displayFormEditTodo = (indexProject, indexTodo) => {
    const todo = projectsList[indexProject].todos[indexTodo];
    const html = `
      <div class="form-todo" id="form-edit-todo">
        <div id="x"><span class="close-x">x</span></div>
        <form>
          <label for="title">Title</lable><br>
          <input type="text" id="edit-todo-title" value="${todo.title}">
          <label for="description">Description</lable><br>
          <input type="text" id="edit-description" value="${todo.description}"><br>
          <label for="projects-select">Select the project</label><br>
          <select id="edit-select">
            ${displaySelect(todo.indexProject)}
          </select><br>
          <label for="edit-iscomplete">Is it completed?</label><br>
          <select id="edit-iscomplete">
            <option value="false">Not completed</option>
            <option value="true">Completed</option>
          </select><br>
          <input class="submit-todo" id="submit-edit" type="submit" value="Submit" data-index-project="${indexProject}" data-index-todo="${indexTodo}">
        </form>
      </div>
    `;
    body.innerHTML += html;
    window.scrollTo(0, 0);
    addCloseEditTodo();
  };

  const displayFormTodo = () => {
    const html = `
      <div class="hide-form-todo" id="form">
        <div class='ex-btn'><span class="close-x">x</span></div>
        <form>
          <label for="title">Title</lable><br>
          <input type="text" id="title"><br>
          <label for="description">Description</lable><br>
          <input type="text" id="description"><br>
          <label for="projects-select">Select the project</label><br>
          <select id="projects-select">
            ${displaySelect()}
          </select><br>
          <label for="iscomplete">Is it completed?</label><br>
          <select id="iscomplete">
            <option value="false">Not Completed</option>
            <option value="true">Completed</option>
          <select><br><br>
          <input class="submit-todo" type="submit" value="Submit"><br>
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
        const parent = e.target;
        displayFormEditTodo(parent.dataset.indexProject, parent.dataset.indexTodo);
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
    addTodoToArr,
  };

})();

export { queries };