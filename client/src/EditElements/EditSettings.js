import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditTitle from './EditTitle';

function EditSettings({ list, title, setTitle }) {

    return (
        <div>
            <h3 style={{ fontSize: 17, marginBottom: 18, marginTop: 10 }}>Settings</h3>
            <EditTitle list={list} title={title} setTitle={setTitle}/>
            <Row style={{ marginBottom: 5 }}>
                <Col>
                    <p>Delete list</p>
                </Col>
            </Row>
        </div>
    )
}

export default EditSettings;