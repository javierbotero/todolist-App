import { logic } from './logic';
import queries from './domQueries';
import './assets/style.css';

if (localStorage.getItem('projects')) {
  logic.addlocStorageToProjects(localStorage.getItem('projects'));
} else {
  localStorage.setItem('projects', logic.fetchProjects());
}

console.log(localStorage.getItem('projects'));
const project = logic.createProject('Default Project');
logic.addToProjectsList(project);
queries.displaySetup();
queries.displayFormTodo();