import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import { TodoGroupList } from './TodoGroupList';
import { TodoSearcher } from './TodoSearcher';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';

import { TodoContext } from '../TodoContext';

function App() {
	const { todoList, openModal } = React.useContext(TodoContext);
	const completedTodoList = todoList.filter((todo) => todo.completed);
	const pendingTodoList = todoList.filter((todo) => !todo.completed);

	console.log({ todoList: todoList });
	return (
		<div className="App">
			<Container className="main-container">
				<TodoSearcher />
				<Container>
					<Row>
						<Col>
							{pendingTodoList.length > 0 && (
								<TodoGroupList completed={false} />
							)}
							{completedTodoList.length > 0 && (
								<TodoGroupList completed={true} />
							)}
							<CreateTodoButton />
						</Col>
					</Row>
				</Container>
			</Container>
			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
		</div>
	);
}

export default App;
