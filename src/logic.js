import {
  projectsList, behaviorsProject, projects, behaviorsTodo, todos,
} from './todos';

const logic = (() => {
  const addToLocalStorage = () => {
    localStorage.setItem('projects', JSON.stringify(projectsList));
  };
  const createTodo = (title = 'My Title', description = 'Add some description', indexProject = 0, isComplete = false, dueDate = new Date(2020, 12, 31), priority = 'Low') => {
    const todo = todos(title, description, indexProject, isComplete, dueDate, priority);
    projectsList[indexProject].addTodoToTodos(todo);
    addToLocalStorage();
  };
  const getObjFromLocStorage = () => JSON.parse(localStorage.getItem('projects'));
  const addToProjectsList = (project) => {
    projectsList.push(project);
    addToLocalStorage();
  };
  const createProject = (title = 'New Project') => {
    const project = projects(title);
    addToProjectsList(project);
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
  const editOrCreateProject = (title = 'New project', indexProject = false) => {
    if (indexProject) {
      projectsList[indexProject].title = title;
    } else {
      const project = projects(title);
      addToProjectsList(project);
    }
    addToLocalStorage();
  };
  const createFirstProject = () => {
    if (projectsList.length === 0) {
      editOrCreateProject();
    }
  };
  const switchTodoCompleted = (indexProject, indexTodo) => {
    const todo = projectsList[indexProject].getTodos()[indexTodo];
    todo.isComplete = !todo.isComplete;
    addToLocalStorage();
  };
  const editTodo = (indexOfProject, indexOfTodo, title, description, indexProject, isComplete, dueDate, priority) => {
    projectsList[indexOfProject].todos[indexOfTodo].title = title;
    projectsList[indexOfProject].todos[indexOfTodo].description = description;
    projectsList[indexOfProject].todos[indexOfTodo].setIndexProject(indexProject);
    projectsList[indexOfProject].todos[indexOfTodo].isComplete = isComplete;
    projectsList[indexOfProject].todos[indexOfTodo].dueDate = dueDate;
    projectsList[indexOfProject].todos[indexOfTodo].priority = priority;
    if (indexOfProject !== indexProject) {
      projectsList[indexProject].todos.push(projectsList[indexOfProject].todos[indexOfTodo]);
      projectsList[indexOfProject].todos.splice(indexOfTodo, 1);
    }
    addToLocalStorage();
  };
  const deleteTodo = (indexOfProject, indexOfTodo) => {
    const project = projectsList[indexOfProject];
    project.deleteTodoFromTodos(indexOfTodo);
    addToLocalStorage();
  };
  const deleteProject = (index) => {
    projectsList.splice(index, 1);
    addToLocalStorage();
  };

  return {
    projectsList,
    createProject,
    createTodo,
    addToProjectsList,
    createFirstProject,
    editTodo,
    switchTodoCompleted,
    editOrCreateProject,
    deleteProject,
    addToLocalStorage,
    getObjFromLocStorage,
    setProjectsFromLocalStorage,
    deleteTodo,
  };
})();

export { logic };