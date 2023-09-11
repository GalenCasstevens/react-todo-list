import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function TodoItem({ todo }) {
	return (
		<Row>
			<Col md={10}>{todo}</Col>
			<Col md={2}>
				<Button className="float-end" variant="danger">
					Delete
				</Button>
			</Col>
		</Row>
	);
}

export default TodoItem;
