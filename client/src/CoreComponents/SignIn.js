import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function SignIn({ user }) {

    return (
        <div style={{ marginTop: 65, textAlign: 'center' }}>
            {user ?
            <p>You're already logged in.</p>
            :
            <div>
                <h3 style={{ fontSize: 18 }}>Sign in</h3>
                <p style={{ fontSize: 13, marginTop: -1, color: '#838383' }}> Don't have an account? Sign up <Link to='/signup' id='inlineLink'>here.</Link></p>
                <Form>
                    <Form.Control type="text" placeholder="Username" style={{ marginTop: 4, width: 300, padding: 8, display: 'inline-block', fontSize: 13 }}/><br></br>
                    <Form.Control type="password" placeholder="Password" style={{ marginTop: 12, width: 300, padding: 8, display: 'inline-block', fontSize: 13 }}/><br></br>
                    <Button type="submit" style={{ backgroundColor: '#4f564e', border: 'none', padding: '3px 11px 3px 11px', marginTop: 26 }}>➭</Button>
                </Form>
            </div>
            }
        </div>
    )

}

export default SignIn;