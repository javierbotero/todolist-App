const todosList = [];
const projects = (title) => {
  const todos = [];
  const proto = {
    getTodos() {
      return todos;
    },
  };

  return Object.assign(proto, { title, todos });
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

export { todosList, todos, projects };