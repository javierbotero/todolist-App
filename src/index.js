import { logic } from './logic';

const myTodo = logic.createTodo();
logic.addTodoToArrayList(myTodo);
console.log(logic.fecthTodoList());
logic.editTodo(0, ['Cleaning the House', 'Wednesday in the morning clean the house', 0]);
console.log(logic.fecthTodoList());
