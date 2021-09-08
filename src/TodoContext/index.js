import React from 'react';

const TodoContext = React.createContext();

const InternalTodoProvider = (props) => {
	const dummyTodoList = [
		{ text: 'This', completed: false },
		{ text: 'This is a test with completed as false', completed: false },
		{ text: 'This is a test with completed 1 as false', completed: false },
		{ text: 'This is a test with completed 2 as false', completed: false },
		{ text: 'This is a test completed', completed: true },
		{ text: 'This is a test with completed 3 as false', completed: false },
		{ text: 'This is a test with completed 4 as false', completed: false },
		{ text: 'This is a test with completed 5 as false', completed: false },
		{ text: 'This is a test completed 1', completed: true },
		{ text: 'This is a test completed 2', completed: true },
		{ text: 'This is a test completed 3', completed: true },
	];

	const [todos, setTodos] = React.useState(dummyTodoList);
	const [filterTodoText, setFilterTodoText] = React.useState('');
	const [openModal, setToggleModal] = React.useState(false);

	let todoList = todos;

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => {
			return todo.text === text;
		});
		todos[todoIndex].completed = !todos[todoIndex].completed;
		console.log(todos);
		setTodos([...todos]);
	};

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => {
			return todo.text === text;
		});
		console.log(todoIndex);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};

	const addTodo = (text) => {
		const todo = {
			text,
			completed: false,
		};
		const newTodos = [...todos, todo];
		setTodos(newTodos);
	};

	const toggleModal = () => {
		setToggleModal(!openModal);
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
				completeTodo,
				deleteTodo,
				openModal,
				toggleModal,
				addTodo,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export { TodoContext, InternalTodoProvider };
