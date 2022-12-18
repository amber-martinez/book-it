import React from 'react';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

function NewListTitle({ title, setTitle }) {

    const viewMode = useSelector(state => state.view.viewMode);

    return (
        <div style={{ margin: 'auto' }}>
            <Row style={{ marginLeft: 0, margin: 'auto' }}>
                <input className={viewMode} id='input' type='text' palceholder={title} style={{ width: 140, fontSize: 13, textAlign: 'left' }} value={title} onChange={((e) => setTitle(e.target.value))}></input><br></br><br></br>
            </Row>
        </div>
    )
}

export default NewListTitle;