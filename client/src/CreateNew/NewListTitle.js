import React from 'react';
import Row from 'react-bootstrap/Row';

function NewListTitle({ title, setTitle }) {

    return (
        <div style={{ margin: 'auto' }}>
            <Row style={{ marginLeft: 0, margin: 'auto' }}>
                <input type='text' palceholder={title} style={{ border: 'none', borderBottom: '.8px solid #4f564e', width: 140, fontSize: 13, textAlign: 'left', color: '#4f564e' }} value={title} onChange={((e) => setTitle(e.target.value))}></input><br></br><br></br>
            </Row>
        </div>
    )
}

export default NewListTitle;