import React from 'react';

const TodoContext = React.createContext();

const InternalTodoProvider = (props) => {
	return (
		<TodoContext.Provider value={{todoList: [{text: 'This is a test'}]}}>{props.children}</TodoContext.Provider>
	);
};

export { TodoContext, InternalTodoProvider };
