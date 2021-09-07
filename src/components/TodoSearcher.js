import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

import { TodoContext } from '../TodoContext';
const TodoSearcher = (props) => {
	const { searchingTodos } = React.useContext(TodoContext);
	const onSearchTodo = (event) => {
		const value = event.target.value;
		console.log(value);
		searchingTodos(value);
	};

	return (
		<Container>
			<Row>
				<Col xs={6} md={3}>
					{' '}
				</Col>
				<Col xs={6} md={6}>
					<InputGroup className="mb-3">
						<InputGroup.Text id="todosearcher">
							<Search />
						</InputGroup.Text>
						<FormControl
							placeholder="Search Todo..."
							aria-label="todosearcher"
							aria-describedby="todosearcher"
							onChange={onSearchTodo}
						/>
					</InputGroup>
				</Col>
			</Row>
		</Container>
	);
};

export { TodoSearcher };
