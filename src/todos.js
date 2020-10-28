const projectsList = [];

const projects = (title) => {
  const todos = [];
  const proto = {
    getTodos() {
      return todos;
    },

    deleteTodoFromTodos(index) {
      todos.splice(index, 1);
    },

    addTodoToTodos(todo) {
      todos.push(todo);
      console.log(todos);
    },
  };

  return Object.assign(proto, { title });
};

const todos = (title, description, indexProject) => {
  const isComplete = false;
  const proto = {
    setIndexProject(index) {
      indexProject = index;
    },
    getIndexProject() { return indexProject; },
  };

  return Object.assign(proto, { title, description, isComplete });
};

export { projectsList, projects, todos };