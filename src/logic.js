import { todosList, projects, todos } from './todos';

const logic = (() => {
  const createTodo = (title = 'My Title', description = 'Add some description', indexProject = 0) => {
    return todos(title, description, indexProject);
  };
  const addTodoToArrayList = (todo) => { todosList.push(todo); };
  const fecthTodoList = () => { return todosList; };
  const editTodo = (indexTodoList, [title, description, indexProject]) => {
    todosList[indexTodoList].title = title;
    todosList[indexTodoList].description = description;
    todosList[indexTodoList].setIndexProject(indexProject);
  };
  const deleteTodo = () => {};
  const createProject = () => {};
  const deleteProject = () => {};
  const markTodoAsCompleted = () => {};
  const changeTodoProject = () => {};

  return {
    createTodo,
    addTodoToArrayList,
    fecthTodoList,
    editTodo,
  };
})();

export { logic };