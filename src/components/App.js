import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { TodoGroupList } from './TodoGroupList';
import { TodoSearcher } from './TodoSearcher';
import { TodoContext } from '../TodoContext';


function App() {
	const { todoList } = React.useContext(TodoContext);
	console.log(todoList);
	return (
		<div className="App">
			<Container className="main-container">
				<TodoSearcher />
				<Container>
					<Row>
						<Col>
							{/* TODOS GROUP PENDING */}
							<TodoGroupList completed={false} />

							{/* TODOS GROUP COMPLETED */}
							<TodoGroupList completed={true} />

							{/* CREATE BUTTON */}
							<Button variant="success">+</Button>
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
}

export default App;
