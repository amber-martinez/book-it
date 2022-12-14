import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SignUp({ user, setUser }) {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([])

    function onSignUpSubmit(e) {
        e.preventDefault();

        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                username,
                password,
                password_confirmation: passwordConfirmation
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => setUser(data))
                window.location.href='/account'
            } else {
                r.json().then(e => setErrors(e.errors))
            }
        })
    }

    return (
        <div style={{ marginTop: 65, textAlign: 'center' }}>
            {user ?
            <p>You're already logged in.</p>
            :
            <div>
                <h3 style={{ fontSize: 18 }}>Sign up</h3>
                <p style={{ fontSize: 13, marginTop: -1, color: '#838383' }}>Before you book it, tell us who you are.</p>
                <Form onSubmit={onSignUpSubmit}>
                    <Row style={{ display: 'inline-block' }}>
                        <Col style={{ marginRight: 10, marginBottom: 5 }}>
                            <Form.Control type='text' placeholder="Name" value={name} onChange={((e) => setName(e.target.value))} style={{ marginTop: 4, width: 220, padding: 8, fontSize: 13 }}/>
                        </Col>
                    </Row>
                    <Row style={{ display: 'inline-block' }}>
                        <Col style={{ marginRight: 10, marginBottom: 5 }}>
                            <Form.Control type='text' placeholder="Username" value={username} onChange={((e) => setUsername(e.target.value))} style={{ marginTop: 4, width: 220, padding: 8, fontSize: 13 }}/>
                        </Col>
                    </Row>
                    <br></br>
                    <Row style={{ display: 'inline-block' }}>
                        <Col style={{ marginRight: 10, marginBottom: 10 }}>
                            <Form.Control type='password' placeholder="Password" value={password} onChange={((e) => setPassword(e.target.value))} style={{ marginTop: 4, width: 220, padding: 8, fontSize: 13 }}/>
                        </Col>
                    </Row>
                    <Row style={{ display: 'inline-block' }}>
                        <Col style={{ marginRight: 10, marginBottom: 10 }}>
                            <Form.Control type='password' placeholder="Confirm password" value={passwordConfirmation} onChange={((e) => setPasswordConfirmation(e.target.value))} style={{ marginTop: 4, width: 220, padding: 8, fontSize: 13 }}/>
                        </Col>
                    </Row>
                    <br></br>
                    <Row style={{ display: 'inline-block' }}>
                        <Col>
                            <Button type="submit" style={{ backgroundColor: '#4f564e', border: 'none', padding: '3px 11px 3px 11px', marginTop: 18 }}>➭</Button>
                        </Col>
                    </Row>
                </Form>
                <div style={{ marginTop: 30, fontSize: 13 }}>
                    {errors ? errors.map(e => <p>{e}</p>) : null }
                </div>
            </div>
            }
        </div>
    )
}

export default SignUp;