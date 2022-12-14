import React from 'react';
import { Link } from 'react-router-dom';

function Lists({ user }) {

    return (
        <div style={{ marginLeft: 215, marginTop: 45 }}>
            {user ?
            <h3 style={{ fontSize: 18 }}>Lists</h3>
            : <p>Sign in <Link to='/signup' id='inlineLink'>here.</Link></p>
            }
        </div>
    )
}

export default Lists;