import React from 'react';
import { Link }  from 'react-router-dom'
import { useSelector } from 'react-redux'

function Homepage() {

    const account = useSelector(state => state.account)

    return (
        <div style={{ textAlign: 'center' }}>
            <img src='https://i.imgur.com/Bdz005N.png' alt='all your bookmarks, one place' style={{ height: 500, marginTop: 62 }}></img>
            <br></br>
            {account ? 
            <button style={{ backgroundColor: '#7e857d', fontSize: 13, border: 'none', padding: '3px 11px 3px 11px', marginTop: 18, borderRadius: 4 }}><Link to='/lists' style={{ color: 'white', textDecoration: 'none' }}>Make new list</Link></button>
            :
            <button style={{ backgroundColor: '#7e857d', fontSize: 13, border: 'none', padding: '3px 11px 3px 11px', marginTop: 18, borderRadius: 4 }}><Link to='/signup' style={{ color: 'white', textDecoration: 'none' }}>Get started</Link></button>
            }
        </div>
    )
}

export default Homepage;