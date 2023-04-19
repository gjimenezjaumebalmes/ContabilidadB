import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../redux/action/register';
import { Container, Row, Col, Button, Label, Input, Form, FormGroup, Card } from 'reactstrap';
import Axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        const { name, username, password } = this.state;
        const data = { name, username, password };
        try {
            await Axios.post('/api/register', data); // sending a POST request to your backend API
            alert('Account Success Created!');
            window.location = '/login';
        } catch (error) {
            console.error(error);
            alert('An error occurred while registering the user');
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Card
                        className='mt-3 col-md-6 offset-md-3 shadow'
                        style={{ backgroundColor: 'dark', height: '450px', width: '300px', borderRadius: '15px' }}
                    >
                        <Col>
                            <Form>
                                <h3 className='h5 text-center mt-3'>
                                    <b>REGISTER</b>
                                </h3>
                                <FormGroup>
                                    <Label className='grey-text'>Name </Label>
                                    <Input
                                        type='text'
                                        placeholder='Insert Your Name'
                                        value={this.state.name}
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label className='grey-text'>Username </Label>
                                    <Input
                                        type='text'
                                        placeholder='Insert Your Username'
                                        value={this.state.username}
                                        onChange={(e) => this.setState({ username: e.target.value })}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label className='grey-text'>Password </Label>
                                    <Input
                                        type='password'
                                        placeholder='Insert Your Password'
                                        value={this.state.password}
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Button onClick={this.onSubmit} type='submit' className='btn btn-success btn-block' color='success'>
                                        Submit
                                    </Button>
                                </FormGroup>

                                <p className='forgot-password text-right'>
                                    Already registered{' '}
                                    <Link to='/login' className='text-success'>
                                        sign in?
                                    </Link>
                                </p>
                            </Form>
                        </Col>
                    </Card>
                </Row>
                <br />
                <br />
                <br />
                {this.state.show}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        register: state.register
    };
};

export default connect(mapStateToProps)(Register);
