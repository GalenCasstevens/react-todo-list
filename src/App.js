import ListGroup from 'react-bootstrap/ListGroup';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useSelector } from 'react-redux';

function App() {
	const { todos } = useSelector((state) => state.todos);

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
