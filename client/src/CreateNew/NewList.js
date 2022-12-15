import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewListTheme from './NewListTheme';
import NewListView from './NewListView';
import NewListTitle from './NewListTitle';

function NewList({ user }) {

    const [primColor, setPrimColor] = useState('#ecebe5');
    const [secColor, setSecColor] = useState('#5b583d');
    const [bulletIcon, setBulletIcon] = useState('◇');
    const [themeID, setThemeID] = useState(null);
    const [title, setTitle] = useState('Title');
    const [successMessage, setSuccessMessage] = useState(false);
    const [errors, setErrors] = useState([]);

    function onListSave(e) {
        e.preventDefault();

        fetch('/api/lists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                theme_id: themeID,
                user_id: user.id
            }),
        })
        .then(r => {
            if (r.ok) {
                setSuccessMessage(true);
                setErrors([]);
            } else {
                r.json().then(e => setErrors(e.errors))
            }
        })
    }

    return (
        <div style={{ textAlign: 'center', marginTop: 62 }}>
            <div>
                <h3 style={{ fontSize: 18, marginBottom: 62 }}>New list</h3>
            </div>
            <Row className="justify-content-md-center">
                <Col style={{ marginRight: 30 }} xs lg="2">
                    <NewListTheme primColor={primColor} setPrimColor={setPrimColor} secColor={secColor} setSecColor={setSecColor} bulletIcon={bulletIcon} setBulletIcon={setBulletIcon} setThemeID={setThemeID} themeID={themeID}/>
                </Col>
                <Col style={{ marginLeft: 30 }} xs lg="2">
                    <h3 style={{ fontSize: 18 }}>Preview</h3>

                    <NewListTitle title={title} setTitle={setTitle}/>
                    <NewListView primColor={primColor} secColor={secColor} bulletIcon={bulletIcon} title={title}/>

                    <button onClick={onListSave} style={{ backgroundColor: '#4f564e', border: 'solid 1px #4f564e', borderColor: '#4f564e', textAlign: 'center', fontSize: 12, marginTop: 50, display: 'inline-block', borderRadius: 3, color: 'white', padding: '2px 10px 3px 10px' }}>Save list</button>

                    <div style={{ marginTop: 30 }}>
                    {errors ? errors.map(e => <p style={{ marginBottom: 3 }}>{e}</p>) : null}
                    {successMessage ? <p>List saved.</p> : null }
                </div>
                </Col>
            </Row>
        </div>
    )

}

export default NewList;