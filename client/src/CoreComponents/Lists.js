import React from 'react';
import { Link } from 'react-router-dom';

function Lists({ user }) {

    console.log(user)

    return (
        <div style={{ marginLeft: 215, marginTop: 45 }}>
            {user ?
            <div>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>Lists</h3>
                <button  style={{ backgroundColor: '#4f564e', border: 'none', padding: '3px 11px 3px 11px', color: 'white', fontSize: 11, borderRadius: 4, marginRight: 10 }}><Link to='/new-list' style={{ color: 'white', textDecoration: 'none' }}>+ New list</Link></button>
                <button style={{ backgroundColor: '#7e857d', border: 'none', padding: '3px 11px 3px 11px', color: 'white', fontSize: 11, borderRadius: 4, marginRight: 10 }}>+ New bookmark</button>
                <div style={{ marginTop: 30 }}>
                    { user.lists.length > 0 ? 'true' : 'false' }
                </div>
            </div>

            : <p>Sign in <Link to='/signup' id='inlineLink'>here.</Link></p>
            }
        </div>
    )
}

export default Lists;