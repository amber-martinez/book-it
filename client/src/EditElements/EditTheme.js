import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { displayUser } from '../CoreComponents/userSlice';

function EditTheme({ list, setPrimColor, primColor, setSecColor, secColor, setBulletIcon, bulletIcon, setTheme }) {

    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState(false);
    const dispatch = useDispatch();
    const viewMode = useSelector(state => state.view.viewMode);

    function onEditThemeSave(e) {
        e.preventDefault();

        fetch(`/api/themes/${list.theme.id}`, {
            method: 'PATCH',
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
                r.json().then(data => {
                    setErrors([]);
                    setSuccessMessage(true);
                    setTheme(data)
                    fetch('/api/account')
                    .then(r => r.json())
                    .then(data => dispatch(displayUser(data)))
                })
            } else {
                r.json().then(e => setErrors(e.errors))
            }
        })

    }

    return (
        <div>
            <h3 style={{ fontSize: 17, marginBottom: 18 }}>Theme</h3>
            <Row style={{ marginBottom: 5 }}>
                <Col>
                    <p>Primary color</p>
                </Col>
                <Col>
                    <input onChange={((e) => setPrimColor(e.target.value))} type="color" class="form-control form-control-color" id="exampleColorInput" value={primColor} title="Choose your color" style={{ border: 'none', height: 34, marginTop: -5, backgroundColor: 'transparent' }}></input>
                </Col>
            </Row>
            <Row style={{ marginBottom: 5 }}>
                <Col>
                    <p>Secondary color</p>
                </Col>
                <Col>
                    <input onChange={((e) => setSecColor(e.target.value))} type="color" class="form-control form-control-color" id="exampleColorInput" value={secColor} title="Choose your color" style={{ border: 'none', height: 34, marginTop: -5, backgroundColor: 'transparent' }}></input>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Bullet icon</p>
                </Col>
                <Col>
                    <input className={viewMode} id='input' onChange={((e) => setBulletIcon(e.target.value))} type='text' value={bulletIcon} style={{ width: 150, fontSize: 13, textAlign: 'left', backgroundColor: 'transparent' }}></input>
                </Col>
            <Row>
                <Col></Col>
                <Col>
                <div style={{ textAlign: 'left' }}>
                    <button onClick={onEditThemeSave} style={{ backgroundColor: '#7e857d', border: 'solid 1px #7e857d', borderColor: '#657065d9', textAlign: 'center', fontSize: 12, marginTop: 10, display: 'inline-block', marginLeft: 10, borderRadius: 3, color: 'white', padding: '2px 10px 3px 10px' }}>Save edits</button>
                </div>
                <div style={{ marginTop: 15 }}>
                    {errors ? errors.map(e => <p style={{ marginBottom: 3 }}>{e}</p>) : null}
                    {successMessage ? <p>Theme saved.</p> : null }
                </div>
                </Col>
            </Row>
            </Row>
        </div>
    )
}

export default EditTheme;