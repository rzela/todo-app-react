import React from 'react';

const TodoContext = React.createContext();

const InternalTodoProvider = (props) => {
	const dummyTodoList = [
		{ text: 'This', completed: false },
		{ text: 'This is a test with completed as false', completed: false },
		{ text: 'This is a test with completed 1 as false', completed: false },
		{ text: 'This is a test with completed 2 as false', completed: false },
		{ text: 'This is a test with completed 3 as false', completed: false },
		{ text: 'This is a test completed', completed: true },
		{ text: 'This is a test completed 1', completed: true },
		{ text: 'This is a test completed 2', completed: true },
	];

	const [todos, setTodos] = React.useState(dummyTodoList);
	const [filterTodoText, setFilterTodoText] = React.useState('');
	let todoList = todos;

	const addTodo = (text) => {
		const todo = {
			text,
			completed: false,
		};
		const newTodos = [...todos, todo];
		setTodos(newTodos);
	};

	const searchingTodos = (text) => {
		setFilterTodoText(text);
	};

	if (filterTodoText) {
		todoList = todos.filter((todo) => {
			let todoText = todo.text.toLowerCase();
			return todoText.includes(filterTodoText.toLowerCase());
		});
	}

	return (
		<TodoContext.Provider
			value={{
				todoList,
				searchingTodos,
				addTodo,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export { TodoContext, InternalTodoProvider };
