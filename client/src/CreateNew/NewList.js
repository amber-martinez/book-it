import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewListTheme from './NewListTheme';
import NewListView from './NewListView';

function NewList() {

    const [primColor, setPrimColor] = useState('#ecebe5');
    const [secColor, setSecColor] = useState('#5b583d');
    const [bulletIcon, setBulletIcon] = useState('◇');

    return (
        <div style={{ textAlign: 'center', marginTop: 62 }}>
            <div>
                <h3 style={{ fontSize: 18, marginBottom: 62 }}>New list</h3>
            </div>
            <Row>
                <Col style={{ marginRight: -350 }}>
                    <NewListTheme primColor={primColor} setPrimColor={setPrimColor} secColor={secColor} setSecColor={setSecColor} bulletIcon={bulletIcon} setBulletIcon={setBulletIcon} />
                </Col>
                <Col style={{ marginLeft: -350 }}>
                    <NewListView primColor={primColor} secColor={secColor} bulletIcon={bulletIcon}/>
                </Col>
            </Row>
        </div>
    )

}

export default NewList;