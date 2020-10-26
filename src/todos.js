const todosList = [];
const projects = ['Start a Project'];

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