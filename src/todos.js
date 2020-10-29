const projectsList = [];

const behaviorsProject = (proto) => ({
  getTodos: () => proto.todos,

  addTodoToTodos: (todo) => {
    proto.todos.push(todo);
    console.log(proto.todos);
  },
  deleteTodoFromTodos: (indexTodo) => { proto.todos.splice(indexTodo, 1) },
});

const projects = (title, todos = []) => {
  const proto = {
    todos,
    title,
  }
  return Object.assign(proto, behaviorsProject(proto));
};

const behaviorsTodo = (proto) => ({
  setIndexProject: (index) => {
    proto.indexProject = index;
  },
  getIndexProject: () => { return proto.indexProject; },
});

const todos = (title, description, indexProject) => {
  const proto = {
    title,
    description,
    indexProject,
  };
  return Object.assign(proto, behaviorsTodo(proto));
};

export { projectsList, behaviorsProject, projects, todos };