import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({handleSubmit,reviewText,labeltext,defaultValue}) => {
    return (

        <Form>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{labeltext}</Form.Label>
                <Form.Control ref={reviewText} as="textarea" rows={3} defaultValue={defaultValue} />
            </Form.Group>
            <Button variant="outline-info" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    )
}
export default ReviewForm;