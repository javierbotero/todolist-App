import { projectsList, behaviorsProject, projects, behaviorsTodo, todos } from './todos';

const logic = (() => {
  const createProject = (title) => { return projects(title); };
  const addToLocalStorage = () => {
    localStorage.setItem('projects', JSON.stringify(projectsList));
  };
  const createTodo = (title = 'My Title', description = 'Add some description', indexProject = 0) => {
    const todo = todos(title, description, indexProject);
    console.log(todo);
    projectsList[indexProject].addTodoToTodos(todo);
    addToLocalStorage();
  };
  const getObjFromLocStorage = () => JSON.parse(localStorage.getItem('projects'));
  const addToProjectsList = (project) => {
    projectsList.push(project);
    addToLocalStorage();
  };
  const setProjectsFromLocalStorage = () => {
    getObjFromLocStorage().forEach((project) => {
      projectsList.push(Object.assign(project, behaviorsProject(project)));
    });
  };
  const createFirstProject = () => {
    if (projectsList.length === 0) {
      const project = createProject('Default Project');
      addToProjectsList(project);
      setProjectsFromLocalStorage();
    }
  };
  const addTodoToProject = (todo, project) => {
    project.addTodoToTodos(todo);
    addToLocalStorage();
  };
  const fetchTodoList = (index) => {
    projectsList[index].getTodos().forEach((todo, indexForEach) => {
      projectsList[index].changeTodo(indexForEach, Object.assign(todo, behaviorsTodo(todo)));
    });
    return projectsList[index].getTodos();
  };
  const editTodo = (project, index, [title, description, indexProject]) => {
    const todosList = fetchTodoList(project);
    todosList[index].title = title;
    todosList[index].description = description;
    todosList[index].setIndexProject(indexProject);
  };
  const deleteProject = (index) => { return projectsList.splice(index, 1); };
  const markTodoAsCompleted = (project, index) => {
    const list = fetchTodoList(project);
    return list[index].isComplete = !list[index].isComplete;
  };

  return {
    createProject,
    createTodo,
    addToProjectsList,
    createFirstProject,
    addTodoToProject,
    fetchTodoList,
    editTodo,
    markTodoAsCompleted,
    deleteProject,
    addToLocalStorage,
    getObjFromLocStorage,
    setProjectsFromLocalStorage,
  };
})();

export { logic };