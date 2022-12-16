import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewListTheme from './NewListTheme';
import NewListView from './NewListView';
import NewThemeScratch from './NewThemeScratch';
import { useSelector } from "react-redux";


function NewTheme() {

    // const [primColor, setPrimColor] = useState('#ecebe5');
    // const [secColor, setSecColor] = useState('#5b583d');
    // const [bulletIcon, setBulletIcon] = useState('◇');
    const [successMessage, setSuccessMessage] = useState(false);
    const [errors, setErrors] = useState([]);
    // const [themeID, setThemeID] = useState(null);

    const primColor = useSelector(state => state.newPrimColor);
    const secColor = useSelector(state => state.newSecColor);
    const bulletIcon = useSelector(state => state.newBulletIcon);
    const themeID = useSelector(state => state.themeID);

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
                r.json().then(data => {

                    setSuccessMessage(true);
                    setErrors([]);
                })
            } else {
                r.json().then(e => setErrors(e.errors));
            }
        })
    }

    return (
        <div style={{ textAlign: 'center', marginTop: 62 }}>
        <div>
            <h3 style={{ fontSize: 18, marginBottom: 62 }}>New theme</h3>
        </div>
            <Row className="justify-content-md-center">
                <Col style={{ marginRight: 30 }} xs lg="2">
                    <NewThemeScratch/>
                </Col>
                <Col style={{ marginLeft: 30 }} xs lg="2">
                    <h3 style={{ fontSize: 18 }}>Preview</h3>
                    <NewListView primColor={primColor} secColor={secColor} bulletIcon={bulletIcon} title={'Title'}/>
                </Col>
            </Row>
            <Row>
                <div style={{ marginTop: 30 }}>
                    <button onClick={onThemeSave} style={{ backgroundColor: '#4f564e', border: 'solid 1px #4f564e', borderColor: '#4f564e', textAlign: 'center', fontSize: 12, marginTop: 50, display: 'inline-block', borderRadius: 3, color: 'white', padding: '2px 10px 3px 10px', marginBottom: 15 }}>Save theme</button>
                    <div style={{ marginTop: 30 }}>
                        {errors ? errors.map(e => <p style={{ marginBottom: 3 }}>{e}</p>) : null}
                        {successMessage ? <p style={{ fontSize: 12 }}>Theme saved.</p> : null }
                    </div>
                </div>
            </Row>
    </div>
    )
}

export default NewTheme;