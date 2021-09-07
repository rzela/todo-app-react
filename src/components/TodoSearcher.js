import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

const TodoSearcher = (props) => {
	return (
		<Container>
			<Row>
				<Col xs={6} md={3}>
					{' '}
				</Col>
				<Col xs={6} md={6}>
					<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
						<FormControl
							placeholder="Username"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
				</Col>
			</Row>
		</Container>
	);
};

export { TodoSearcher };
