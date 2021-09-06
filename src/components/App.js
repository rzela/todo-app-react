import React from 'react';
import '../styles/App.css';

import { TodoContext } from '../TodoContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function App() {
	const { todoList } = React.useContext(TodoContext);
	console.log(todoList);
	return (
		<div className="App">
			{/* SEACHER */}
			<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
				<FormControl
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>

			{/* TODOS GROUP PENDING */}
			<div>
				<p> Pending [NUMBER OF TODOS]</p>
				<ul>
					<li>TODO 1</li>
					<li>TODO 2</li>
					<li>TODO 3</li>
				</ul>
			</div>

			{/* TODOS GROUP COMPLETED */}
			<div>
				<p> Completed [NUMBER OF TODOS]</p>
				<ul>
					<li>TODO 1</li>
					<li>TODO 2</li>
					<li>TODO 3</li>
				</ul>
			</div>

			{/* CREATE BUTTON */}
			<Button variant="success">+</Button>
		</div>
	);
}

export default App;
