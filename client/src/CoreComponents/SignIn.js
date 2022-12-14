import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function SignIn({ user, setUser }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    function onSignInSubmit(e) {
        e.preventDefault();

        fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => setUser(data))
                window.location.href='/lists'
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
                <h3 style={{ fontSize: 18 }}>Sign in</h3>
                <p style={{ fontSize: 13, marginTop: -1, color: '#838383' }}> Don't have an account? Sign up <Link to='/signup' id='inlineLink'>here.</Link></p>
                <Form onSubmit={onSignInSubmit}>
                    <Form.Control type="text" placeholder="Username" value={username} onChange={((e) => setUsername(e.target.value))} style={{ marginTop: 4, width: 300, padding: 8, display: 'inline-block', fontSize: 13 }}/><br></br>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={((e) => setPassword(e.target.value))} style={{ marginTop: 12, width: 300, padding: 8, display: 'inline-block', fontSize: 13 }}/><br></br>
                    <Button type="submit" style={{ backgroundColor: '#4f564e', border: 'none', padding: '3px 11px 3px 11px', marginTop: 26 }}>➭</Button>
                </Form>
                <div style={{ marginTop: 30, fontSize: 13 }}>
                    {errors ? errors.map(e => <p>{e}</p>) : null }
                </div>
            </div>
            }
        </div>
    )

}

export default SignIn;