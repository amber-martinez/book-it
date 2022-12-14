import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditTheme from '../EditElements/EditTheme';

function NewListTheme({ primColor, setPrimColor, secColor, setSecColor, bulletIcon, setBulletIcon }) {

    const [successMessage, setSuccessMessage] = useState(false);
    const [errors, setErrors] = useState([]);

    function onThemeSave(e) {
        e.preventDefault();

        fetch(`/api/themes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prim_color: primColor,
                sec_color: secColor,
                bullet_icon: bulletIcon
            }),
        })
        .then(r => {
            if (r.ok) {
                setSuccessMessage(true);
                setErrors([]);
            } else {
                r.json().then(e => setErrors(e.errors));
            }
        })
    }

    return (
        <div style={{ display: 'inline-block'}}>
            <h6 style={{ fontSize: 17, textAlign: 'left' }}>Theme</h6>
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
                <div style={{ textAlign: 'left', marginTop: 10 }}>
                    <button  onClick={onThemeSave} style={{ backgroundColor: '#7e857d', border: 'solid 1px #7e857d', borderColor: '#657065d9', textAlign: 'center', fontSize: 12, marginTop: 10, display: 'inline-block', borderRadius: 3, color: 'white', padding: '2px 10px 3px 10px' }}>Save edits</button>
                </div>
                <div style={{ marginTop: 15 }}>
                    {errors ? errors.map(e => <p style={{ marginBottom: 3 }}>{e}</p>) : null}
                    {successMessage ? <p>Theme saved.</p> : null }
                </div>
            </Row>
            {successMessage ? <p>New theme saved!</p> : null}
            {errors ? errors.map(e => <p>{e}</p>) : null}
        </div>
    )
}

export default NewListTheme;