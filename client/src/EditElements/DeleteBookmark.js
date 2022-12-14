import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeleteBookmark({ setBookmarks, bookmarks }) {

    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState(false);
    const [selectDeleteBM, setSelectDeleteBM] = useState();
    const [showDeleteBM, setShowDeleteBM] = useState(false)

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

    return (
        <div>
            <Row style={{ marginBottom: 5, marginTop: 10 }}>
                <Col>
                    <button onClick={(() => setShowDeleteBM(!showDeleteBM))} style={{ backgroundColor: 'transparent', border: 'none', marginBottom: 16, paddingLeft: 0, color: '#4f564e' }}>Delete bookmark</button>
                </Col>
                { showDeleteBM ?
                <Col>
                    <select onChange={((e) => setSelectDeleteBM(e.target.value))} style={{ width: 150 }}>
                        {bookmarks.map(bm => (
                            <option value={bm.id} >{bm.name}</option>
                        ))}
                    </select>
                    <div style={{ textAlign: 'left', marginTop: 10 }}>
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
        </div>
    )
}

export default DeleteBookmark;