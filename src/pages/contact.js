import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateContact } from '../redux/action/contact';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../resources/style.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            isSubmitting: false,
            isSuccess: false,
            isError: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const { name, email, message } = this.state;

        if (!name || !email || !message) {
            return;
        }

        this.setState({ isSubmitting: true });

        try {
            await axios.post('/api/contact', {
                name,
                email,
                message,
            });

            this.props.updateContact({
                name,
                email,
                message,
            });

            this.setState({
                name: '',
                email: '',
                message: '',
                isSubmitting: false,
                isSuccess: true,
                isError: false,
            });
        } catch (error) {
            this.setState({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
            });
        }
    }

    render() {
        const { name, email, message, isSubmitting, isSuccess, isError } = this.state;

        return (
            <Container>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <div className="header-image-contact center">
                            <img src={require('../images/Carousal 1.jpg')} alt=""/>
                        </div>
                        <p></p>
                        <Form onSubmit={this.handleSubmit}>

                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={this.handleInputChange}
                                    placeholder="Enter your name"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={this.handleInputChange}
                                    placeholder="Enter your email"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="message">Message</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    value={message}
                                    onChange={this.handleInputChange}
                                    placeholder="Enter your message"
                                />
                            </FormGroup>

                            <Button className="btn-submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </Button>

                            {isSuccess && (
                                <div className="mt-3 alert alert-success" role="alert">
                                    Your message has been sent successfully.
                                </div>
                            )}

                            {isError && (
                                <div className="mt-3 alert alert-danger" role="alert">
                                    Something went wrong. Please try again later.
                                </div>
                            )}
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = {
    updateContact,
};

export default connect(null, mapDispatchToProps)(Contact);
