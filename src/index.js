import { todosList, todos } from './todos';

const myTodo = todos('Clean', 'Clean the house');
const watchGrimm = todos('Movies', 'Watch the Grimm');
todosList.push(watchGrimm);
console.log(todosList);