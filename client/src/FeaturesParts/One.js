import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function One() {

    // const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting){
    //                 entry.target.classList.add('show')
    //             } else {
    //                 entry.target.classList.remove('show')
    //             }
    //         });
    //     })
        
    //     const hiddenElements = document.querySelectorAll('.hidden');
    //     hiddenElements.forEach((el) => observer.observe(el))

    return (
        <div>
            <Row>
            <Col style={{ marginRight: 30 }} xs lg="3">
                <img src='https://i.imgur.com/4EREFCM.gif' alt='make new list' style={{ height: 260 }}></img>
            </Col>
            <Col style={{ marginLeft: 30, textAlign: 'left', marginTop: 25 }} xs lg="2" >
                <h3 style={{ fontSize: 16, marginBottom: 12 }}>Make a list</h3>
                <p style={{ fontSize: 13, marginBottom: 12 }}>Create lists to sort your bookmarks by group.</p>
                <p style={{ fontSize: 13 }}>Have a running list of the books you want to buy and/or read? Set them here.</p>
                <p style={{ fontSize: 13 }}>Name these lists anything you want.</p>
            </Col>
            </Row>
        </div>
    )
}

export default One();