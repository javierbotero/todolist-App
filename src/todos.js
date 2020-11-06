const projectsList = [];

const behaviorsProject = (proto) => ({
  getTodos: () => proto.todos,

  addTodoToTodos: (todo) => {
    proto.todos.push(todo);
  },
  deleteTodoFromTodos: (indexTodo) => { proto.todos.splice(indexTodo, 1); },
  changeTodo: (index, newTodo) => {
    proto.todos[index] = newTodo;
  },
});

const projects = (title, todos = []) => {
  const proto = {
    todos,
    title,
  };
  return Object.assign(proto, behaviorsProject(proto));
};

const behaviorsTodo = (proto) => ({
  setIndexProject: (index) => {
    proto.indexProject = index;
  },
  getIndexProject: () => proto.indexProject,
});

const todos = (title, description, indexProject, isComplete, dueDate, priority) => {
  const proto = {
    title,
    description,
    indexProject,
    isComplete,
    dueDate,
    priority,
  };
  return Object.assign(proto, behaviorsTodo(proto));
};

export {
  projectsList, behaviorsProject, projects, behaviorsTodo, todos,
};