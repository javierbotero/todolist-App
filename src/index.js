import { logic } from './logic';
import queries from './domQueries';
import './assets/style.css';

const project = logic.createProject();
logic.addToProjectsList(project);
queries.displaySetup();
queries.displayFormTodo();
logic.setProjectsFromLocalStorage();
// console.log(logic.setProjectsFromLocalStorage());
// console.log(logic.getObjFromLocStorage());
// console.log(logic.fetchProjects());