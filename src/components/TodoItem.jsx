import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function TodoItem({ todo, handleDelete }) {
	return (
		<Row>
			<Col md={10}>{todo.text}</Col>
			<Col md={2}>
				<Button
					className="float-end"
					variant="danger"
					onClick={() => handleDelete(todo.id)}
				>
					Delete
				</Button>
			</Col>
		</Row>
	);
}

export default TodoItem;
