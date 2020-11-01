import { logic } from './logic';
import queries from './domQueries';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

if (localStorage.projects) {
  logic.setProjectsFromLocalStorage();
} else {
  logic.addToLocalStorage();
}

logic.createFirstProject();
queries.displaySetup();
queries.giveBtnProjectsListeners();
queries.displayFormTodo();
