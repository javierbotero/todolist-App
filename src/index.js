import { logic } from './logic';
import queries from './domQueries';
import './assets/style.css';

const project = logic.createProject('Default Project');
logic.addToProjectsList(project);
queries.displaySetup();
queries.displayFormTodo();
