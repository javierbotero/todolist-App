import { projectsList, projects, todos } from './todos';

const logic = (() => {
  const createProject = (title) => projects(title);
  const createTodo = (title = 'My Title', description = 'Add some description', indexProject = 0) => {
    const todo = todos(title, description, indexProject);
    projectsList[indexProject].addTodoToTodos(todo);
    addToLocalStorage();
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
  const deleteProject = (index) => projectsList.splice(index, 1);
  const markTodoAsCompleted = (project, index) => {
    const list = fecthTodoList(project);
    return list[index].isComplete = !list[index].isComplete;
  };
  const addToLocalStorage = () => {
    const projectsArray = fetchProjects();
    localStorage.setItem('projects', JSON.stringify(projectsArray));
  };
  const getObjFromLocStorage = () => JSON.parse(localStorage.getItem('projects'));
  const setProjectsFromLocalStorage = () => {
    const projectsFromLocalStorage = getObjFromLocStorage();
    projectsFromLocalStorage.forEach((project) => {
      projectsList.push(Object.assign(project, projects()));
    });
  };

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
    addToLocalStorage,
    getObjFromLocStorage,
    setProjectsFromLocalStorage,
  };
})();

export { logic };