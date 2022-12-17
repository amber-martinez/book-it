import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { displayUser } from '../CoreComponents/userSlice';

function EditTitle({ list, title, setTitle }) {
    
    const [titleChange, setTitleChange] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [errors, setErrors] = useState(false);
    const viewMode = useSelector(state => state.view.viewMode);
    const dispatch = useDispatch();

    function onTitleSave(e) {
        e.preventDefault();

        fetch(`/api/lists/${list.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title
            }),
        })
        .then(r => {
            if (r.ok) {
                setSuccessMessage(true)
                setErrors([])
                fetch('/api/account')
                .then(r => r.json())
                .then(data => dispatch(displayUser(data)))
            } else {
                r.json().then(e => setErrors(e.errors))
            }
        })
    }

    return (
        <Row style={{ marginBottom: 5 }}>
            <Col>
                <p>Title</p>
            </Col>
            <Col>
                <input className={viewMode} id='input' type='text' value={title} onChange={((e) => {
                    setTitle(e.target.value)
                    setTitleChange(true)
                })} style={{ width: 150, fontSize: 13, textAlign: 'left', backgroundColor: 'transparent' }}></input>
            </Col>
            <Row>
            <Col></Col>
            {titleChange ?
                <Col>
                    <div style={{ textAlign: 'left' }}>
                        <button onClick={onTitleSave} style={{ backgroundColor: '#7e857d', border: 'solid 1px #7e857d', borderColor: '#657065d9', textAlign: 'center', fontSize: 12, marginTop: 10, display: 'inline-block', marginLeft: 10, borderRadius: 3, color: 'white', padding: '2px 10px 3px 10px' }}>Save title</button>
                    </div>
                    <div style={{ marginTop: 15 }}>
                        {errors ? errors.map(e => <p style={{ marginBottom: 3 }}>{e}</p>) : null}
                        {successMessage ? <p>Title saved.</p> : null }
                    </div>
                </Col>
            : null}
            </Row>
        </Row>
    )
}

export default EditTitle;