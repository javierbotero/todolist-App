import { logic } from './logic';
import queries from './domQueries';
import './assets/style.css';

if (localStorage.projects) {
  logic.setProjectsFromLocalStorage();
} else {
  logic.addToLocalStorage();
}

logic.createFirstProject();
queries.displaySetup();
queries.displayFormTodo();
logic.switchTodoCompleted(0, 0);
console.log(logic.projectsList[0].getTodos()[0]);