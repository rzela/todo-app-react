import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoItem } from './TodoItem';

import { Button, Badge } from 'react-bootstrap';
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

	const message = completed ? 'Completed ' : 'Pending ';

	const variant = !completed ? 'primary' : 'success';

	return (
		<div>
			{!isEmpty && counter && (
				<Button className='counter' variant={variant}>
					{message} <Badge bg="secondary">{counter}</Badge>
				</Button>				
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
