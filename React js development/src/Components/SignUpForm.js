import React, { Component } from 'react';
import { Button, Row, Col, Form, Modal } from 'react-bootstrap';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
}
    handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:62141/api/student", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                StudentName:event.target.StudentName.value,
                CollegeName:event.target.CollegeName.value,
                Mobile:event.target.Mobile.value,
                Email: event.target.Email.value,
                City: event.target.City.value,
                Degree:event.target.Degree.value,
                Specialization:event.target.Specialization.value,
                DateOfBirth:event.target.DateOfBirth.value,
                Password: event.target.Password.value,
                PhotoFileName: this.PhotoFileName
            })
        })
                .then(res => res.json())
                .then((result) => {
                    alert(result);

                },
                    (error) => {
                        alert('Failed');
                    })
    }

    render() {
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Register
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                <Form.Group controlId="StudentId" >
                                        <Form.Label>StudentId</Form.Label>
                                        <Form.Control type="text" name="StudentId" required
                                            placeholder="Student ID"
                                            disabled
                                             />
                                    </Form.Group>

                                    <Form.Group controlId="StudentName" >
                                        <Form.Label>Student Name</Form.Label>
                                        <Form.Control type="text" name="StudentName" required
                                            placeholder="Enter Your Name"
                                             />
                                    </Form.Group>

                                    <Form.Group controlId="CollegeName" >
                                        <Form.Label>College Name</Form.Label>
                                        <Form.Control type="text" name="CollegeName" required
                                            placeholder="Enter Your College or School Name"
                                             />
                                    </Form.Group>

                                    <Form.Group controlId="Mobile" >
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="text" name="Mobile" required
                                            placeholder="Mobile Number"
                                             />
                                    </Form.Group>

                                    <Form.Group controlId="Email" >
                                        <Form.Label>EmailID</Form.Label>
                                        <Form.Control type="text" name="Email" required
                                            placeholder="Email as a User ID" />
                                    </Form.Group>

                                    <Form.Group controlId="City" >
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" name="City" required
                                            placeholder="Your City Name"
                                             />
                                    </Form.Group>

                                    <Form.Group controlId="Degree" >
                                        <Form.Label>College Degree</Form.Label>
                                        <Form.Control type="text" name="Degree" required
                                            placeholder="Your Degree Name"
                                             />
                                    </Form.Group>

                                    <Form.Group controlId="Specialization" >
                                        <Form.Label>Specialization</Form.Label>
                                        <Form.Control type="text" name="Specialization" required
                                            placeholder="Ex. Computer Science"
                                             />
                                    </Form.Group>

                                    <Form.Group controlId="DateOfBirth" >
                                        <Form.Label>Date of birth</Form.Label>
                                        <Form.Control type="text" name="DateOfBirth" required
                                            placeholder="Your B'Date"
                                             />
                                    </Form.Group>

                                    <Form.Group controlId="Password" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="text" name="Password" required
                                            placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group controlId="PhotoFileName" >
                                        <Form.Label>Photo</Form.Label>
                                        <Form.Control type="text" name="PhotoFileName" 
                                            placeholder="Optional"
                                             />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Register
                                        </Button>
                                    </Form.Group>

                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )

    }
}

export default SignUpForm;