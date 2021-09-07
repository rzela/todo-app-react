import React from 'react';

const TodoContext = React.createContext();

const InternalTodoProvider = (props) => {
	const todoList = [
		{ text: 'This is a test with completed as false', completed: false },
		{ text: 'This is a test with completed 1 as false', completed: false },
		{ text: 'This is a test with completed 2 as false', completed: false },
		{ text: 'This is a test with completed 3 as false', completed: false },
		{ text: 'This is a test completed', completed: true },
		{ text: 'This is a test completed 1', completed: true },
		{ text: 'This is a test completed 2', completed: true },
	];
	return (
		<TodoContext.Provider
			value={{
				todoList,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export { TodoContext, InternalTodoProvider };
