import React from 'react';
import { Link } from 'react-router-dom';
import List from '../CreateNew/List';

function Lists({ user }) {

    return (
        <div style={{ marginLeft: 215, marginTop: 45, textAlign: 'left' }}>
            {user ?
            <div>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>Lists</h3>
                <button  style={{ backgroundColor: '#4f564e', border: 'none', padding: '3px 11px 3px 11px', color: 'white', fontSize: 11, borderRadius: 4, marginRight: 10 }}><Link to='/new-list' style={{ color: 'white', textDecoration: 'none' }}>+ New list</Link></button>
                <button style={{ backgroundColor: '#7e857d', border: 'none', padding: '3px 11px 3px 11px', color: 'white', fontSize: 11, borderRadius: 4, marginRight: 10 }}>+ New theme</button>
                <div style={{ marginTop: 20 }}>
                    { user.lists.length > 0 ?
                    user.lists.map(list => <List list={list}/>)
                    : 'false' }
                </div>
            </div>

            : <p>Sign in <Link to='/signup' id='inlineLink'>here.</Link></p>
            }
        </div>
    )
}

export default Lists;