import { logic } from './logic';
import queries from './domQueries';
import './assets/style.css';

if (localStorage.projects) {
  console.log('we have projects in localstorage');
  logic.setProjectsFromLocalStorage();
} else {
  console.log('we are setting projects in localstorage');
  logic.addToLocalStorage();
}

logic.createFirstProject();
queries.displaySetup();
queries.displayFormTodo();
console.log(logic.fetchTodoList(0));
console.log(logic.getObjFromLocStorage());