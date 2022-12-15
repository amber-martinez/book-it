import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Features() {

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
        <div style={{ textAlign: 'center', marginTop: 150 }}>
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
                    <img src='https://i.imgur.com/4EREFCM.gif' alt='customize theme' style={{ height: 260 }}></img>
                </Col>
                <Col style={{ marginLeft: 30, textAlign: 'left', marginTop: 25 }} xs lg="2" className='hidden' id='featuresTwo'>
                    <h3 style={{ fontSize: 16, marginBottom: 12 }}>Make a list</h3>
                    <p style={{ fontSize: 13, marginBottom: 12 }}>Create lists to sort your bookmarks by group.</p>
                    <p style={{ fontSize: 13 }}>Have a running list of the books you want to buy and/or read? Set them here.</p>
                    <p style={{ fontSize: 13 }}>Name these lists anything you want.</p>
                </Col>
                <div>
                    <img src='https://i.imgur.com/GaXfsYx.png' style={{ scale: '15%' }}></img>
                </div>
            </Row>
            <Row className="justify-content-md-center" style={{ marginTop: 70, marginBottom: 370 }}>
                <Col style={{ marginRight: 30 }} xs lg="3" className='hidden' id='featuresTwo'>
                    <img src='https://i.imgur.com/4EREFCM.gif' alt='customize theme' style={{ height: 260 }}></img>
                </Col>
                <Col style={{ marginLeft: 30, textAlign: 'left', marginTop: 25 }} xs lg="2" className='hidden' id='featuresTwo'>
                    <h3 style={{ fontSize: 16, marginBottom: 12 }}>Make a list</h3>
                    <p style={{ fontSize: 13, marginBottom: 12 }}>Create lists to sort your bookmarks by group.</p>
                    <p style={{ fontSize: 13 }}>Have a running list of the books you want to buy and/or read? Set them here.</p>
                    <p style={{ fontSize: 13 }}>Name these lists anything you want.</p>
                </Col>
            </Row>
        </div>
    )

}

export default Features;