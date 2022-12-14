import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeleteList({ list }) {

    const [confirmDelete, setConfirmDelete] = useState(false);
    const [errors, setErrors] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    function onConfirmDelete(e) {
        e.preventDefault();

        fetch(`/api/lists/${list.id}`, {
            method: 'DELETE'
        })
        .then(r => {
            if (r.ok) {
                setSuccessMessage(true);
                setErrors([]);
            } else {
                r.json().then(setErrors(e.errors))
            }
        })
    }

    return (
        <Row style={{ marginBottom: 5 }}>
            <Col>
                <button onClick={(() => setConfirmDelete(true))} style={{ backgroundColor: 'transparent', border: 'none', marginBottom: 16, paddingLeft: 0, color: '#4f564e' }}>Delete List</button>
            </Col>
            {confirmDelete ?
            <Col>
                <div style={{ textAlign: 'left' }}>
                    <button onClick={onConfirmDelete} style={{ backgroundColor: '#7e857d', border: 'solid 1px #7e857d', borderColor: '#657065d9', textAlign: 'center', fontSize: 12, marginTop: 10, display: 'inline-block', borderRadius: 3, color: 'white', padding: '2px 10px 3px 10px' }}>Confirm delete</button>
                </div>
                <div style={{ marginTop: 15 }}>
                    {errors ? errors.map(e => <p style={{ marginBottom: 3 }}>{e}</p>) : null}
                    {successMessage ? <p>List deleted.</p> : null }
                </div>
            </Col>
            : null}
         </Row>
    )
}

export default DeleteList;