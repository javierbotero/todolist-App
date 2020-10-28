import { logic } from './logic';
import queries from './domQueries';
import './assets/style.css';

if (localStorage.getItem('projects')) {
  console.log(JSON.parse(localStorage.getItem('projects'))[0].getTodos());
  logic.addlocStorageToProjects(JSON.parse(localStorage.getItem('projects')));
} else {
  localStorage.setItem('projects', JSON.stringify(logic.fetchProjects()));
}

console.log(localStorage.getItem('projects'));
const project = logic.createProject('Default Project');
console.log(project);
logic.addToProjectsList(project);
queries.displaySetup();
queries.displayFormTodo();