import { projectsList, behaviorsProject, projects, behaviorsTodo, todos } from './todos';

const logic = (() => {
  const createProject = (title) => projects(title);
  const addToLocalStorage = () => {
    localStorage.setItem('projects', JSON.stringify(projectsList));
    console.log(projectsList);
  };
  const createTodo = (title = 'My Title', description = 'Add some description', indexProject = 0, isComplete = false) => {
    const todo = todos(title, description, indexProject, isComplete);
    projectsList[indexProject].addTodoToTodos(todo);
    addToLocalStorage();
  };
  const getObjFromLocStorage = () => JSON.parse(localStorage.getItem('projects'));
  const addToProjectsList = (project) => {
    projectsList.push(project);
    addToLocalStorage();
  };
  const setPropertiesToTodos = (project) => {
    project.getTodos().forEach((todo, indexForEach) => {
      project.changeTodo(indexForEach, Object.assign(todo, behaviorsTodo(todo)));
    });
  };
  const setProjectsFromLocalStorage = () => {
    getObjFromLocStorage().forEach((project) => {
      projectsList.push(Object.assign(project, behaviorsProject(project)));
    });
    projectsList.forEach((project) => setPropertiesToTodos(project));
  };
  const createFirstProject = () => {
    if (projectsList.length === 0) {
      const project = createProject('Default Project');
      addToProjectsList(project);
    }
  };
  const addTodoToProject = (todo, project) => {
    project.addTodoToTodos(todo);
    addToLocalStorage();
  };
  const editTodo = (indexOfProject, indexOfTodo, title, description, indexProject) => {
    projectsList[indexOfProject].todos[indexOfTodo].title = title;
    projectsList[indexOfProject].todos[indexOfTodo].description = description;
    projectsList[indexOfProject].todos[indexOfTodo].setIndexProject(indexProject);
    addToLocalStorage();
  };
  const deleteProject = (index) => { return projectsList.splice(index, 1); };
  const switchTodoCompleted = (indexProject, indexTodo) => {
    const todo = projectsList[indexProject].getTodos()[indexTodo];
    todo.isComplete = !todo.isComplete;
    addToLocalStorage();
  };

  return {
    createProject,
    createTodo,
    addToProjectsList,
    createFirstProject,
    addTodoToProject,
    editTodo,
    switchTodoCompleted,
    deleteProject,
    addToLocalStorage,
    getObjFromLocStorage,
    setProjectsFromLocalStorage,
    projectsList,
  };
})();

export { logic };