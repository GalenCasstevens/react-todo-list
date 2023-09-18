import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
	if (!todos || todos.length === 0) {
		return <ListGroup.Item>No Todos Yet</ListGroup.Item>;
	}

	return (
		<>
			{todos.map((todo) => (
				<ListGroup.Item>
					<TodoItem key={todo.id} todo={todo} />
				</ListGroup.Item>
			))}
		</>
	);
}

export default TodoList;
