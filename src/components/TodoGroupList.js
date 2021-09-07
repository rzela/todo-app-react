import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoItem } from './TodoItem';

import '../styles/TodoGroupList.css';

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
			{!isEmpty && counter && (
				<p>
					{completed ? 'Completed' : 'Pending'} {counter}
				</p>
			)}
			<div className="group-list">
				{filteredTodoList.map((todo) => (
					<TodoItem key={todo.text} todo={todo}></TodoItem>
				))}
			</div>
		</div>
	);
};

export { TodoGroupList };
