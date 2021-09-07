import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoItem } from './TodoItem';

const TodoGroupList = ({ completed }) => {
	const { todoList } = React.useContext(TodoContext);

	const counter = todoList.filter(
		(todo) => todo.completed === completed
	).length;

	const filteredTodoList = todoList.filter(
		(todo) => todo.completed === completed
	);

	const isEmpty = filteredTodoList.length === 0;

	return (
		<div>
			{!isEmpty && (
				<p>
					{completed ? 'Completed' : 'Pending'} {counter}
				</p>
			)}
			{filteredTodoList.map((todo) => (
				<TodoItem key={todo.text} todo={todo}></TodoItem>
			))}
		</div>
	);
};

export { TodoGroupList };
