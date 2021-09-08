import React from 'react';
import { TodoContext } from '../TodoContext';

import { Button, Form } from 'react-bootstrap';
import '../styles/TodoForm.css';

const TodoForm = (prop) => {
	const { addTodo, toggleModal, todoList } = React.useContext(TodoContext);
	const [todoValue, setTodoValue] = React.useState('');

	const checkDuplicity = (text) => {
		const alreadyExists =
			todoList.filter((todo) => todo.text === text).length > 0;
		return alreadyExists;
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (checkDuplicity(todoValue)) {
			alert('Can not duplicate a TODO value');
		} else {
			if (todoValue) {
				addTodo(todoValue);
				toggleModal();
			}
		}
	};

	const onChange = (event) => {
		const textValue = event.target.value;
		setTodoValue(textValue);
	};

	return (
		<div className="create-todo-dialog">
			<Form onSubmit={onSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Create Todo</Form.Label>
					<Form.Control
						onChange={onChange}
						type="input"
						placeholder="Todo text..."
					/>
				</Form.Group>
				<Button
					className="create-todo-dialog-button"
					variant="primary"
					type="submit"
				>
					Add Todo
				</Button>
			</Form>
		</div>
	);
};

export { TodoForm };
