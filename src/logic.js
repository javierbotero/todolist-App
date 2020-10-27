import { projectsList, projects, todos } from './todos';

const logic = (() => {
  const createProject = (title) => { return projects(title); };
  const createTodo = (title = 'My Title', description = 'Add some description', indexProject = 0) => {
    const todo = todos(title, description, indexProject);
    projectsList[indexProject].addTodoToTodos(todo);
  };
  const addToProjectsList = (project) => projectsList.push(project);
  const fetchProjects = () => projectsList;
  const addTodoToProject = (todo) => { todosList.push(todo); };
  const fecthTodoList = () => todosList;
  const editTodo = (indexTodoList, [title, description, indexProject]) => {
    todosList[indexTodoList].title = title;
    todosList[indexTodoList].description = description;
    todosList[indexTodoList].setIndexProject(indexProject);
  };
  const deleteProject = (index) => { return projectsList.splice(index, 1); };
  const markTodoAsCompleted = () => {};
  const changeTodoProject = () => {};

  return {
    createProject,
    createTodo,
    addToProjectsList,
    fetchProjects,
    addTodoToProject,
    fecthTodoList,
    editTodo,
    deleteProject,
  };
})();

export { logic };