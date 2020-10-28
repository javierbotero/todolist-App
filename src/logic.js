import { projectsList, projects, todos } from './todos';

const logic = (() => {
  const createProject = (title) => { return projects(title); };
  const createTodo = (title = 'My Title', description = 'Add some description', indexProject = 0) => {
    const todo = todos(title, description, indexProject);
    console.log(typeof projectsList[indexProject], 'the project');
    projectsList[indexProject].addTodoToTodos(todo);
    localStorage.setItem('projects', JSON.stringify(projectsList));
    console.log(localStorage.getItem('projects')[0].getTodos());
  };
  const addToProjectsList = (project) => projectsList.push(project);
  const fetchProjects = () => projectsList;
  const addTodoToProject = (todo, project) => { project.addTodoToTodos(todo); };
  const fecthTodoList = (project) => project.getTodos();
  const editTodo = (project, index, [title, description, indexProject]) => {
    const todosList = fecthTodoList(project);
    todosList[index].title = title;
    todosList[index].description = description;
    todosList[index].setIndexProject(indexProject);
  };
  const deleteProject = (index) => { return projectsList.splice(index, 1); };
  const markTodoAsCompleted = (project, index) => {
    const list = fecthTodoList(project);
    return list[index].isComplete = !list[index].isComplete;
  };
  const addlocStorageToProjects = (array) => { projectsList = array; };

  return {
    createProject,
    createTodo,
    addToProjectsList,
    fetchProjects,
    addTodoToProject,
    fecthTodoList,
    editTodo,
    markTodoAsCompleted,
    deleteProject,
    addlocStorageToProjects,
  };
})();

export { logic };