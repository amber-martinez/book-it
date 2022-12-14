import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EditTheme({ list }) {
    return (
        <div>
            <h3 style={{ fontSize: 17, marginBottom: 18 }}>Theme</h3>
            <Row style={{ marginBottom: 5 }}>
                <Col>
                    <p>Primary color</p>
                </Col>
                <Col>
                    <input type="color" class="form-control form-control-color" id="exampleColorInput" value={list.theme.prim_color} title="Choose your color" style={{ border: 'none', height: 34, marginTop: -5 }}></input>
                </Col>
            </Row>
            <Row style={{ marginBottom: 5 }}>
                <Col>
                    <p>Secondary color</p>
                </Col>
                <Col>
                    <input type="color" class="form-control form-control-color" id="exampleColorInput" value={list.theme.sec_color} title="Choose your color" style={{ border: 'none', height: 34, marginTop: -5 }}></input>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Bullet icon</p>
                </Col>
                <Col>
                    <input type='text' value={list.theme.bullet_icon} style={{ width: 160, border: 'none', borderBottom: '.8px solid #4f564e', fontSize: 13 }}></input>
                </Col>
            </Row>
        </div>
    )
}

export default EditTheme;