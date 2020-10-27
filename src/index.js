import { logic } from './logic';

const project = logic.createProject('Default Project');
logic.addToProjectsList(project);
logic.createTodo('Title', 'Some description', 0);
console.log(logic.markTodoAsCompleted(project, 0));
