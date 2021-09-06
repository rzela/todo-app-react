import React from 'react';
import App from '../components/App';
import { InternalTodoProvider } from '../TodoContext';

const Layout = (props) => {
	return (
		<InternalTodoProvider>
			<App></App>
		</InternalTodoProvider>
	);
};

export { Layout };
