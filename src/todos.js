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
    },
  };

  return Object.assign(proto, { title });
};

const todos = (title, description, indexProject) => {
  const proto = {
    setIndexProject(index) {
      indexProject = index;
    },
    getIndexProject() { return indexProject; },
  };

  return Object.assign(proto, { title, description });
};

export {projectsList, projects, todos };