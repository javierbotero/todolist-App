const todosList = [];
const projects = ['Start a Project'];

const todos = (title, description, indexProject) => {
  const proto = {
    setTitle(text) {
      title = text;
    },
    getTitle() { return title; },
  };

  return Object.assign(proto, { description });
};

export { todosList, todos };