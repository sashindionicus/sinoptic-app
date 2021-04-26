import { Form } from "react-bootstrap"

function InputForm() {    
    return(
        <Form>
            <Form.Group controlId="change-location">
                <Form.Label>Enter a location for weather information</Form.Label>
                <Form.Control type="text" name="city" className="form-control"/>
            </Form.Group>
        </Form>
    )}

export default InputForm