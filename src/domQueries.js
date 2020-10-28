import { logic } from './logic';
const { body } = document;
const formTodo = () => document.getElementById('form');

const queries = (() => {
  const displaySetup = () => {
    body.innerHTML = `
      <div id="container">
        <div id="edit">
        EDIT
        </div>
        <div id="projects">
        PROJECTS
        </div>
      </div>
    `;
  };

  const btnTodo = () => {
    
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
      <form id="form" class="show-form-todo">
        <label for="title">Title</lable><br>
        <input type="text" id="title">
        <label for="description">Description</lable><br>
        <input type="text" id="description">
        <label for="projects-select">Select the project</label>
        <select id="projects-select">
          ${displaySelect()}
        </select>
        <input type="submit" value="Submit">
      </form>
    `;

    body.innerHTML += html;
  };

  const hideFormTodo = () => { formTodo().className = 'hide-form-todo'; };
  const showFormTodo = () => { formTodo().className = 'show-form-todo'; };

  return {
    displaySetup,
    displayFormTodo,
  };
})();

export { queries }