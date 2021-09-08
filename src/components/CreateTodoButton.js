import React from 'react';
import { TodoContext } from '../TodoContext';
import { PlusCircleFill } from 'react-bootstrap-icons';
import '../styles/CreateTodoButton.css';

const CreateTodoButton = (props) => {
	const { toggleModal } = React.useContext(TodoContext);
	return (
		<button
			size="lg"
			className="create-todo-button"
			onClick={toggleModal}
			variant="success"
		>
			<PlusCircleFill />
		</button>
	);
};

export { CreateTodoButton };
