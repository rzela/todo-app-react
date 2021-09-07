import React from 'react';
import { Alert } from 'react-bootstrap';
const TodoItem = ({ todo }) => {
	return (
		<Alert key={todo.text} variant="secondary">
			{todo.text}
		</Alert>
	);
};

export { TodoItem };
