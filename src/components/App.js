import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { TodoGroupList } from './TodoGroupList';
import { TodoSearcher } from './TodoSearcher';
import { TodoContext } from '../TodoContext';

function App() {
	const { todoList } = React.useContext(TodoContext);
	const completedTodoList = todoList.filter((todo) => todo.completed);
	const pendingTodoList = todoList.filter((todo) => !todo.completed);
	console.log(todoList);
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
							<Button variant="success">+</Button>
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
}

export default App;
