import { ErrorResponse } from '@remix-run/router';
import React from 'react'

function Lists({ user, userErrors }) {

    return (
        <div style={{ marginLeft: 215, marginTop: 45 }}>
            {user ?
            <h3 style={{ fontSize: 18 }}>Lists</h3>
            : userErrors ? userErrors.map(e => <p>{e}</p>) : null
            }
        </div>
    )
}

export default Lists;