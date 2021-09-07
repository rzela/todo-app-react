import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import { LightningFill, TrashFill } from 'react-bootstrap-icons';

import { TodoContext } from '../TodoContext';
import '../styles/TodoItem.css';

const TodoItem = ({ todo }) => {
	const { completeTodo, deleteTodo } = React.useContext(TodoContext);
	const onCompleteTodo = (text) => {
		completeTodo(text);
	};
	const onDeleteTodo = (text) => {
		deleteTodo(text);
	};
	return (
		<>
			<Alert key={todo.text} variant="dark" className="todo-item">
				<span>
					<span
						onClick={() => {
							onCompleteTodo(todo.text);
						}}
						className={
							todo.completed
								? 'check-icon-completed'
								: 'check-icon'
						}
					>
						<LightningFill />
					</span>
					<span className={todo.completed ? 'todo-completed' : ''}>
						{todo.text}
					</span>
				</span>

				<Button
					variant="danger"
					onClick={() => {
						onDeleteTodo(todo.text);
					}}
				>
					<TrashFill />
				</Button>
			</Alert>
		</>
	);
};

export { TodoItem };
