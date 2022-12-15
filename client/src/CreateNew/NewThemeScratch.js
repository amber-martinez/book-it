import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NewThemeScratch({ primColor, setPrimColor, secColor, setSecColor, bulletIcon, setBulletIcon, setThemeID }) {

    return (
        <div>
            <h6 style={{ fontSize: 17, textAlign: 'left' }}>Create new theme</h6>
            <Row style={{ marginBottom: 5, textAlign: 'left', marginTop: 17, fontSize: 13 }}>
                <Col>
                    <p>Primary color</p>
                </Col>
                <Col>
                    <input onChange={((e) => setPrimColor(e.target.value))} type="color" class="form-control form-control-color" id="exampleColorInput" value={primColor} title="Choose your color" style={{ border: 'none', height: 34, marginTop: -5 }}></input>
                </Col>
            </Row>
            <Row style={{ marginBottom: 5, textAlign: 'left', fontSize: 13 }}>
                <Col>
                    <p>Secondary color</p>
                </Col>
                <Col>
                    <input onChange={((e) => setSecColor(e.target.value))} type="color" class="form-control form-control-color" id="exampleColorInput" value={secColor} title="Choose your color" style={{ border: 'none', height: 34, marginTop: -5 }}></input>
                </Col>
            </Row>
            <Row style={{ marginBottom: 5, textAlign: 'left', fontSize: 13 }}>
                <Col>
                    <p>Bullet icon</p>
                </Col>
                <Col>
                    <input onChange={((e) => setBulletIcon(e.target.value))} type='text' value={bulletIcon} style={{ width: 48, border: 'none', borderBottom: '.8px solid #4f564e', fontSize: 13, textAlign: 'center', color: '#4f564e' }}></input>
                </Col>
            </Row>
        </div>
    )

}

export default NewThemeScratch;