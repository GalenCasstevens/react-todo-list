import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
	if (todos && todos !== null) {
		return (
			<>
				{todos.map((todo) => (
					<ListGroup.Item>
						<TodoItem todo={todo} />
					</ListGroup.Item>
				))}
			</>
		);
	}

	return <p>No Todos Yet</p>;
}

export default TodoList;
