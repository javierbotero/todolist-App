import { logic } from './logic';

const { body } = document;
const formTodo = () => document.getElementById('form');
const getTodoBtn = () => document.querySelector('.add-btn');
const getCloseBtn = () => document.querySelector('.ex-btn');
const getTodoSubmit = () => document.querySelector('.submit-todo');
const getTodoTitle = () => document.querySelector('#title').value;
const getTodoDescription = () => document.querySelector('#description').value;
const getTodoProject = () => document.querySelector('#projects-select').selectedIndex;

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

const queries = (() => {
  const displaySetup = () => {
    body.innerHTML = `
    <div id="container">
    <div id="edit">
    <h3>Edit</h3>
    <button class="add-btn">Add Todo</button>
    </div>
    <div id="projects">PROJECTS</div>
    </div>
    `;
  };

  const displaySelect = () => {
    let html = '';
    logic.fetchProjects().forEach((project) => {
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

  return {
    displaySetup,
    displayFormTodo,
    getTodoBtn,
  };
})();

export default queries;