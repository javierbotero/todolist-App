import { logic } from './logic';

const project = logic.createProject('Default Project');
logic.addToProjectsList(project);
console.log(logic.fetchProjects()[0].title);
logic.createTodo('Title', 'Some description', 0);
const spliceresult = logic.deleteProject(0);
console.log(spliceresult);
