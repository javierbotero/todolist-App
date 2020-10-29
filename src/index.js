import { logic } from './logic';
import queries from './domQueries';
import './assets/style.css';

// console.log(localStorage.projects);
// if (!localStorage.projects) {
//   logic.addToLocalStorage();
// } else {
//   logic.setProjectsFromLocalStorage();
// }

// console.log(localStorage.getItem('projects'));
const project = logic.createProject('Default Project');
logic.addToProjectsList(project);
queries.displaySetup();
queries.displayFormTodo();
console.log(logic.fetchProjects()[0].getTodos());