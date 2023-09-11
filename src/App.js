import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoData from './data/TodoData';

function App() {
	const [todos, setTodos] = useState(TodoData);

	return (
		<div id="container">
			<ListGroup>
				<ListGroup.Item>
					<TodoForm />
				</ListGroup.Item>
				<TodoList todos={todos} />
			</ListGroup>
		</div>
	);
}

export default App;
