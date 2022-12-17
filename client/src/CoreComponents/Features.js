import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Features() {
    
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
        <div style={{ textAlign: 'center', marginTop: 150, paddingBottom: 370 }}>
            <div>
                <h3 style={{ fontSize: 20, marginBottom: 70 }}>Actually find your bookmarks</h3>
            </div>
            <Row className="justify-content-md-center">
                <Col style={{ marginRight: 30 }} xs lg="3" className='hidden'>
                    <img src='https://i.imgur.com/4EREFCM.gif' alt='make new list' style={{ height: 260 }}></img>
                </Col>
                <Col style={{ marginLeft: 30, textAlign: 'left', marginTop: 25 }} xs lg="2" className='hidden'>
                    <h3 style={{ fontSize: 16, marginBottom: 12 }}>Make a list</h3>
                    <p style={{ fontSize: 13, marginBottom: 12 }}>Create lists to sort your bookmarks by group.</p>
                    <p style={{ fontSize: 13 }}>Have a running list of the books you want to buy and/or read? Set them here.</p>
                    <p style={{ fontSize: 13 }}>Name these lists anything you want.</p>
                </Col>
                <div>
                    <img src='https://i.imgur.com/GaXfsYx.png' style={{ scale: '15%' }}></img>
                </div>
            </Row>
            <Row className="justify-content-md-center" style={{ marginTop: 70, marginBottom: 90 }}>
                <Col style={{ marginRight: 30 }} xs lg="3" className='hidden' id='featuresTwo'>
                    <img src='https://i.imgur.com/Q5Sflw3.gif' alt='customize theme' style={{ height: 260 }}></img>
                </Col>
                <Col style={{ marginLeft: 30, textAlign: 'left', marginTop: 25 }} xs lg="2" className='hidden' id='featuresTwo'>
                    <h3 style={{ fontSize: 16, marginBottom: 12 }}>Choose a theme</h3>
                    <p style={{ fontSize: 13, marginBottom: 12 }}>Organize your lists by color.</p>
                    <p style={{ fontSize: 13 }}>Choose an existing theme from our libary.</p>
                    <p style={{ fontSize: 13 }}>Or...</p>
                </Col>
                <div>
                    <img src='https://i.imgur.com/GaXfsYx.png' style={{ scale: '15%' }}></img>
                </div>
            </Row>
            <Row className="justify-content-md-center" style={{ marginTop: 70, marginBottom: 90 }}>
                <Col style={{ marginRight: 30 }} xs lg="3" className='hidden' id='featuresTwo'>
                    <img src='https://i.imgur.com/bAIVjQf.gif' alt='customize theme' style={{ height: 260 }}></img>
                </Col>
                <Col style={{ marginLeft: 30, textAlign: 'left', marginTop: 25 }} xs lg="2" className='hidden' id='featuresTwo'>
                    <h3 style={{ fontSize: 16, marginBottom: 12 }}>Create a theme</h3>
                    <p style={{ fontSize: 13, marginBottom: 12 }}>Customize your own theme.</p>
                    <p style={{ fontSize: 13 }}>Choose a primary and secondary color.</p>
                    <p style={{ fontSize: 13 }}>Top it off with a custom bullet point for each bookmark.</p>
                </Col>
                <div>
                    <img src='https://i.imgur.com/GaXfsYx.png' style={{ scale: '15%' }}></img>
                </div>
            </Row>
            <Row className="justify-content-md-center" style={{ marginTop: 70 }}>
                <Col style={{ marginRight: 30 }} xs lg="3" className='hidden' id='featuresTwo'>
                    <img src='https://i.imgur.com/ZYvoOkw.gif' alt='customize theme' style={{ height: 300 }}></img>
                </Col>
                <Col style={{ marginLeft: 30, textAlign: 'left', marginTop: 25 }} xs lg="2" className='hidden' id='featuresTwo'>
                    <h3 style={{ fontSize: 16, marginBottom: 12 }}>Access your bookmarks</h3>
                    <p style={{ fontSize: 13, marginBottom: 12 }}>No need to remember which site you saved your bookmark on.</p>
                    <p style={{ fontSize: 13 }}>Customize your lists and edit bookmarks at any time.</p>
                    <p style={{ fontSize: 13 }}>All your bookmarks–one place.</p>
                </Col>
                <div style={{ marginTop: 160 }}>
                    {account ? 
                        <button style={{ backgroundColor: '#7e857d', fontSize: 13, border: 'none', padding: '3px 11px 3px 11px', marginTop: 18, borderRadius: 4 }}><Link to='/lists' style={{ color: 'white', textDecoration: 'none' }}>Make new list</Link></button>
                    :
                        <button style={{ backgroundColor: '#7e857d', fontSize: 13, border: 'none', padding: '3px 11px 3px 11px', marginTop: 18, borderRadius: 4 }}><Link to='/signup' style={{ color: 'white', textDecoration: 'none' }}>Get started</Link></button>
                    }
                </div>
            </Row>
        </div>
    )

}

export default Features;