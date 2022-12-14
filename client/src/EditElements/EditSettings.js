import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EditSettings({ title }) {

    return (
        <div>
            <h3 style={{ fontSize: 17, marginBottom: 18, marginTop: 10 }}>Settings</h3>
            <Row style={{ marginBottom: 5 }}>
                <Col>
                    <p>Title</p>
                </Col>
                <Col>
                <input type='text' value={title} style={{ width: 150, border: 'none', borderBottom: '.8px solid #4f564e', fontSize: 13, textAlign: 'left', color: '#4f564e' }}></input>
                </Col>
            </Row>
            <Row style={{ marginBottom: 5 }}>
                <Col>
                    <p>Delete list</p>
                </Col>
            </Row>
        </div>
    )
}

export default EditSettings;