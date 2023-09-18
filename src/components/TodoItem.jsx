import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { remove } from '../features/todos/todoSlice';

function TodoItem({ todo }) {
	const dispatch = useDispatch();

	return (
		<Row>
			<Col md={10}>{todo.text}</Col>
			<Col md={2}>
				<Button
					className="float-end"
					variant="danger"
					onClick={() => dispatch(remove(todo.id))}
				>
					Delete
				</Button>
			</Col>
		</Row>
	);
}

export default TodoItem;
