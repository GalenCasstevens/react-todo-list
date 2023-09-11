import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function TodoForm() {
	return (
		<Form id="todo-form">
			<Form.Control className="form-text mb-3" as="textarea" rows={4} />
			<Button
				className="add-todo-btn float-end"
				variant="success"
				type="submit"
			>
				Add Todo
			</Button>
		</Form>
	);
}

export default TodoForm;
