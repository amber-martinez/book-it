import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { displayUser } from '../CoreComponents/userSlice';

function AddBookmark({ setName, name, setLink, link, list, setBookmarks, bookmarks }) {

    const [showAddBM, setShowAddBM] = useState(false);
    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState(false);
    const viewMode = useSelector(state => state.view.viewMode)
    const dispatch = useDispatch();

    function onAddBMSubmit(e) {
        e.preventDefault();

        fetch('/api/bookmarks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                link,
                list_id: list.id
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => {
                    setBookmarks([...bookmarks, data]);
                    setErrors([]);
                    setSuccessMessage(true)
                    setName('');
                    setLink('');
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
            <h3 style={{ fontSize: 17, marginBottom: 18, marginTop: 10 }}>Bookmarks</h3> 
            <Row style={{ marginBottom: 5 }}>
                <Col>
                    <button className={viewMode} id='text' onClick={(() => setShowAddBM(!showAddBM))} style={{ backgroundColor: 'transparent', border: 'none', marginBottom: 16, paddingLeft: 0 }}>Add bookmark</button>
                </Col>
                { showAddBM ?
                <Col>
                    <input className={viewMode} id='input' type='text' value={name} placeholder='Name' onChange={((e) => setName(e.target.value))} style={{ width: 150, fontSize: 13, textAlign: 'left', marginBottom: 15, backgroundColor: 'transparent' }}></input>
                    <input className={viewMode} id='input' type='text' value={link} placeholder='Link' onChange={((e) => setLink(e.target.value))} style={{ width: 150, fontSize: 13, textAlign: 'left', marginBottom: 15, backgroundColor: 'transparent' }}></input>
                    <div style={{ textAlign: 'left' }}>
                        <button onClick={onAddBMSubmit} style={{ backgroundColor: '#7e857d', border: 'solid 1px #7e857d', borderColor: '#657065d9', textAlign: 'center', fontSize: 12, marginTop: 6, display: 'inline-block', marginRight: 10, borderRadius: 3, color: 'white', padding: '2px 10px 3px 10px' }}>Add</button>
                    </div>
                    <div style={{ marginTop: 15 }}>
                        {errors ? errors.map(e => <p style={{ marginBottom: 3 }}>{e}</p>) : null}
                        {successMessage ? <p>Bookmark added!</p> : null }
                    </div>
                </Col>
                : null
                }
            </Row>
        </div>
    )
}

export default AddBookmark;