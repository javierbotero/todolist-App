import { projectsList, behaviorsProject, projects, todos } from './todos';

const logic = (() => {
  const createProject = (title) => { return projects(title); };
  const addToLocalStorage = () => {
    localStorage.setItem('projects', JSON.stringify(projectsList));
  };
  const createTodo = (title = 'My Title', description = 'Add some description', indexProject = 0) => {
    const todo = todos(title, description, indexProject);
    console.log(projectsList[indexProject], 'the project');
    projectsList[indexProject].addTodoToTodos(todo);
    addToLocalStorage();
  };
  const getObjFromLocStorage = () => JSON.parse(localStorage.getItem('projects'));
  const addToProjectsList = (project) => {
    projectsList.push(project);
    addToLocalStorage();
  };
  const setProjectsFromLocalStorage = () => {
    console.log('projectsList before getting from localStorage', projectsList);
    getObjFromLocStorage().forEach((project) => {
      projectsList.push(Object.assign(project, behaviorsProject(project)));
    });
    console.log('Todos from default:', projectsList[0].getTodos());
  };
  const createFirstProject = () => {
    if (projectsList.length === 0) {
      const project = createProject('Default Project');
      addToProjectsList(project);
      addToLocalStorage();
      setProjectsFromLocalStorage();
    }
  };
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

  return {
    createProject,
    createTodo,
    addToProjectsList,
    createFirstProject,
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