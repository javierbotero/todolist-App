import { logic } from './logic';
import { projectsList } from './todos';

const { body } = document;
const getProjectsDiv = () => document.getElementById('projects');
const formTodo = () => document.getElementById('form');
const getAddProjectBtn = () => document.querySelector('.add-btn-project');
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
const getBtnProjects = () => document.getElementsByClassName('project-show-todos');
const getBtnEditProjects = () => document.getElementsByClassName('project-edit');
const getBtnDeleteProjects = () => document.getElementsByClassName('project-delete');
const todosContainer = () => document.querySelector('.todo-container');
const getTodoDiv = () => document.getElementById('todos');
const getEditTodoTitle = () => document.getElementById('edit-todo-title').value;
const getEditTodoDescription = () => document.getElementById('edit-description').value;
const getEditTodoIsComplete = () => document.getElementById('edit-iscomplete').value;
const getEditProjectSelect = () => document.getElementById('edit-select').selectedIndex;
const getXProjectForm = () => document.getElementById('x-project-form');
const getSubmitBtnProjectForm = () => document.getElementById('project-submit');
const getFormProject = () => document.getElementById('form-project');
const getTitleFormProject = () => document.getElementById('title-project').value;

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
    addEventToBtnAddProjects();
  };

  const addCloseTodo = () => {
    getCloseBtn().onclick = hideFormTodo;
    getTodoSubmit().onclick = hideFormTodo;
  };

  const showTodoList = (index) => {
    console.log('Showing todos');
    const project = projectsList[index];
    getTodoDiv().innerHTML = `<h4 class="py-5 text-center text-dark col-12">${project.title} todos</h5>`;
    const container = todoContainer();
    container.classList = 'todo-container d-flex flex-wrap p-3 w-100';
    project.getTodos().forEach((todo, i) => {
      container.innerHTML += `
        <div class="card text-center todo mr-2 mb-2 col-sm-10 col-md-4 m-0 p-0">
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
    todosContainer().scrollIntoView();
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
    todosContainer().scrollIntoView();
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
    todosContainer().scrollIntoView();
  };

  const removeProjectForm = () => {
    body.removeChild(getFormProject());
    addTodoToArr();
    addBtnTodoEventDisplay();
    addEventToBtnAddProjects();
    giveBtnProjectsListeners();
    editTodo();
    addListenerToEditProjects();
  };

  const createOrEditProject = (e) => {
    e.preventDefault();
    const title = getTitleFormProject();
    // eslint-disable-next-line max-len
    const index = getSubmitBtnProjectForm().dataset.indexProject ? getSubmitBtnProjectForm().dataset.indexProject : false;
    logic.editOrCreateProject(title, index);
    removeProjectForm();
    gatherProjects();
    giveBtnProjectsListeners();
    getProjectsDiv().scrollIntoView();
  };

  const addCloseProjectForm = () => {
    getXProjectForm().addEventListener('click', removeProjectForm);
    getSubmitBtnProjectForm().addEventListener('click', (e) => { createOrEditProject(e); });
  };

  const displayFormProject = (e, project = false) => {
    console.log('Fired displayFormProject');
    e.preventDefault();
    if (e.target.classList.contains('add-btn-project') || e.target.classList.contains('project-edit')) {
      console.log('True event target: ', e.target.classList);
      const html = `
      <div id="form-project" class="form-todo">
        <div id="x-project-form"><span class="close-x">x</span></div>
        <h5>${project ? `Edit title project: ${projectsList[project].title}` : 'Add a New Project'}</h5>
        <form>
          <label for="title-project">Title</label>
          <input id="title-project" type="text" ${project ? `value="${projectsList[project].title}"` : ''}><br>
          <input type="submit" id="project-submit" ${project ? `data-index-project="${project}"` : ''} value="Submit">
        </form>
      </div>
    `;

      body.innerHTML += html;
      addCloseProjectForm();
      window.scrollTo(0, 0);
    }
  };

  const giveBtnProjectsListeners = () => {
    [...getBtnProjects()].forEach((project, i) => {
      project.onclick = () => { showTodoList(i); };
    });
  };

  const addEventToBtnAddProjects = () => {
    getAddProjectBtn().addEventListener('click', (e) => {
      displayFormProject(e);
    });
  };

  const addListenerToEditProjects = () => {
    getProjectsDiv().addEventListener('click', (e) => { displayFormProject(e, e.target.dataset.index); });
  };

  const addTodoToArr = () => {
    getTodoSubmit().addEventListener('click', (e) => {
      e.preventDefault();
      todoObject();
    });
  };

  const gatherProjects = () => {
    let html = '<h4 class="py-5 text-center text-light w-100">My Projects</h4>';
    let i = 0;
    logic.projectsList.forEach((project) => {
      html += `
      <div class="project col-sm-5 col-md-3 card bg-light mb-3 mr-2 p-0 text-center">
        <div class="card-header">${project.title}</div>
        <div class="card-body">
          <button class="project-show-todos py-1 px-2 rounded bg-light border border-info rounded text-info mr-2 mb-2" data-index="${i}">Todos</button>
          <button class="project-edit py-1 px-2 rounded bg-light border border-info rounded text-info mr-2 mb-2" data-index="${i}">Edit</button>
          <button class="project-delete py-1 px-2 rounded bg-light border border-info rounded text-info mr-2 mb-2" data-index="${i}">Delete</button>
        </div>
      </div>
      `;
      i += 1;
    });
    getProjectsDiv().innerHTML = html;
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
      <div class="container">
        <div id="projects" class="projects-zone p-3 d-flex flex-wrap justify-content-around">
        </div>
        <div id="todos" class="bg-light rounded d-flex flex-wrap justify-content-around">
        </div>
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
    gatherProjects,
    displaySetup,
    displayFormTodo,
    getTodoBtn,
    giveBtnProjectsListeners,
    showTodoList,
    editTodo,
    addTodoToArr,
    addEventToBtnAddProjects,
    addListenerToEditProjects,
  };

})();

export { queries };