import React from 'react';
import { Link }  from 'react-router-dom'
import { useSelector } from 'react-redux'

function Homepage() {

    const icon = useSelector(state => state.view.icon);
    const account = useSelector(state => state.user.account);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        });
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el))

    return (
        <div style={{ textAlign: 'center' }} className='hidden'>
            {account ? 
            <div>
                <Link to='/lists' style={{ textDecoration: 'none' }}><img src={icon ? 'https://i.imgur.com/Bdz005N.png' : 'https://i.imgur.com/ingObRo.png' } alt='all your bookmarks, one place' style={{ height: 505, marginTop: 84 }}></img></Link>
                <br></br>
                <button style={{ backgroundColor: '#7e857d', fontSize: 13, border: 'none', padding: '3px 11px 3px 11px', marginTop: 18, borderRadius: 4 }}><Link to='/lists' style={{ color: 'white', textDecoration: 'none' }}>Make new list</Link></button>
            </div>
            :
            <div>
                <Link to='/signup' style={{ textDecoration: 'none' }}><img src={icon ? 'https://i.imgur.com/Bdz005N.png' : 'https://i.imgur.com/ingObRo.png' } alt='all your bookmarks, one place' style={{ height: 505, marginTop: 84 }}></img></Link>
                <br></br>
                <button style={{ backgroundColor: '#7e857d', fontSize: 13, border: 'none', padding: '3px 11px 3px 11px', marginTop: 18, borderRadius: 4 }}><Link to='/signup' style={{ color: 'white', textDecoration: 'none' }}>Get started</Link></button>
            </div>
            }
        </div>
    )
}

export default Homepage;