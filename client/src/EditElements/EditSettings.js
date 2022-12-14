import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EditSettings({ title, setName, name, setLink, link, list, setBookmarks, bookmarks }) {

    const [showAddBM, setShowAddBM] = useState(false);
    const [showDeleteBM, setShowDeleteBM] = useState(false);
    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState(false);
    const [selectDeleteBM, setSelectDeleteBM] = useState();

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
                })
            } else {
                r.json().then(e => setErrors(e.errors))
            }
        })
    }

    function onDeleteBMSubmit(e) {
        console.log(selectDeleteBM)
        e.preventDefault()
        fetch(`/api/bookmarks/${selectDeleteBM}`, {
            method: 'DELETE'
        })
        .then(r => {
            if (r.ok) {
                setSuccessMessage(true);
                setErrors([]);
                setSelectDeleteBM(bookmarks[0].id);
            } else {
                r.json().then(e => setErrors(e.errors))
            }
        })
    }

    console.log(bookmarks)

    return (
        <div>
            <h3 style={{ fontSize: 17, marginBottom: 18 }}>Settings</h3>
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
                    <button onClick={(() => setShowAddBM(!showAddBM))} style={{ backgroundColor: 'transparent', border: 'none', marginBottom: 16, paddingLeft: 0, color: '#4f564e' }}>Add bookmark</button>
                </Col>
                { showAddBM ?
                <Col>
                    <input type='text' value={name} placeholder='Name' onChange={((e) => setName(e.target.value))} style={{ width: 150, border: 'none', borderBottom: '.8px solid #4f564e', fontSize: 13, textAlign: 'left', color: '#4f564e', marginBottom: 15 }}></input>
                    <input type='text' value={link} placeholder='Link' onChange={((e) => setLink(e.target.value))} style={{ width: 150, border: 'none', borderBottom: '.8px solid #4f564e', fontSize: 13, textAlign: 'left', color: '#4f564e', marginBottom: 15 }}></input>
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
            <Row style={{ marginBottom: 5 }}>
                <Col>
                    <button onClick={(() => setShowDeleteBM(!showDeleteBM))} style={{ backgroundColor: 'transparent', border: 'none', marginBottom: 16, paddingLeft: 0, color: '#4f564e' }}>Delete bookmark</button>
                </Col>
                { showDeleteBM ?
                <Col>
                    <select onChange={((e) => setSelectDeleteBM(e.target.value))}>
                        {bookmarks.map(bm => (
                            <option value={bm.id}>{bm.name}</option>
                        ))}
                    </select>
                    <div style={{ textAlign: 'left' }}>
                        <button onClick={onDeleteBMSubmit} style={{ backgroundColor: '#7e857d', border: 'solid 1px #7e857d', borderColor: '#657065d9', textAlign: 'center', fontSize: 12, marginTop: 6, display: 'inline-block', marginRight: 10, borderRadius: 3, color: 'white', padding: '2px 10px 3px 10px' }}>Delete</button>
                    </div>
                    <div style={{ marginTop: 15 }}>
                        {errors ? errors.map(e => <p style={{ marginBottom: 3 }}>{e}</p>) : null}
                        {successMessage ? <p>Bookmark deleted.</p> : null }
                    </div>
                </Col>
                : null
                }
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