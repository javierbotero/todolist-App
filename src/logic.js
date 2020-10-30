import { projectsList, projects, todos } from './todos';

const logic = (() => {
  const createProject = (title = 'Default Project') => projects(title);
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
    list[index].isComplete = !list[index].isComplete;
    return list[index].isComplete;
  };
  const addToLocalStorage = () => {
    const projectsArray = projectsList;
    const projectsInLoc = getObjFromLocStorage();
    const todosArr = [];
    projectsArray.forEach((project, i) => {
      const title = project.title;
      const todo = project.todos;
      if (projectsInLoc.length === 0) {
        localStorage.setItem(`${title}`, JSON.stringify(todo));
      } else {
        todosArr.push(...projectsInLoc[i].todos);
        todosArr.push(...todo);
        console.log(todosArr);
        localStorage.setItem(`${title}`, JSON.stringify(todosArr));
      }
    });
  };
  const getObjFromLocStorage = () => {
    const keys = Object.keys(localStorage);
    const projectsArr = [];
    const project = {};
    keys.forEach(el => {
      if (localStorage.getItem(el)) {
        project.title = el;
        project.todos = JSON.parse(localStorage.getItem(el));
        projectsArr.push(project);
      }
    });
    return projectsArr;
  };
  const setProjectsFromLocalStorage = () => {
    const projectsArr = getObjFromLocStorage();
    projectsArr.forEach(project => {
      projectsList.map(el => Object.assign(el, project));
    });
    return projectsList;
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