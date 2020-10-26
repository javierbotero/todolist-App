const todosList = [];

const todos = (title, description) => {
  const proto = {
    setTitle(text) {
      title = text;
    },
    getTitle() { return title; },
  };

  return Object.assign(proto, { description });
};

export { todosList, todos };