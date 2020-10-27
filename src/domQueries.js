import { fetchProjects, logic } from './logic';

const queries = (() => {
  const body = document.body;

  const displaySelect = () => {
    let html = '';
    const select = document.createElement('select');
    select.setAttribute('id', 'projects-select');
    logic.fetchProjects().forEach((project) => {
      html += `<option value="${project.title}">${project.title}</option>`;
    });
    return html;
  };

  const displayFormTodo = () => {
    const html = `
      <form id="form">
        <label for="title">Title</lable><br>
        <input type="text" id="title">
        <label for="description">Description</lable><br>
        <input type="text" id="description">
        <label for="projects-select">Select the project</label>
        ${displaySelect()}
        <input type="submit" value="Submit">
      </form>
    `;

    return html;
  };

  return {
    displayFormTodo,
  }
})();

export { queries }