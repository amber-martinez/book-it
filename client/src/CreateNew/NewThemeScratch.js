import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from "react-redux";
import { changePrimColor, changeSecColor, changeBulletIcon } from './themeSlice';

function NewThemeScratch() {

    const primColor = useSelector(state => state.theme.newPrimColor);
    const secColor = useSelector(state => state.theme.newSecColor);
    const bulletIcon = useSelector(state => state.theme.newBulletIcon);
    const viewMode = useSelector(state => state.view.viewMode);

    const dispatch = useDispatch();

    return (
        <div>
            <h6 style={{ fontSize: 17, textAlign: 'left' }}>Create new theme</h6>
            <Row style={{ marginBottom: 5, textAlign: 'left', marginTop: 17, fontSize: 13 }}>
                <Col>
                    <p>Primary color</p>
                </Col>
                <Col>
                    <input onChange={((e) => {dispatch(changePrimColor(e.target.value))})} type="color" class="form-control form-control-color" id="exampleColorInput" value={primColor} title="Choose your color" style={{ border: 'none', height: 34, marginTop: -5, backgroundColor: 'transparent' }}></input>
                </Col>
            </Row>
            <Row style={{ marginBottom: 5, textAlign: 'left', fontSize: 13 }}>
                <Col>
                    <p>Secondary color</p>
                </Col>
                <Col>
                    <input onChange={((e) => dispatch(changeSecColor(e.target.value)))} type="color" class="form-control form-control-color" id="exampleColorInput" value={secColor} title="Choose your color" style={{ border: 'none', height: 34, marginTop: -5, backgroundColor: 'transparent' }}></input>
                </Col>
            </Row>
            <Row style={{ marginBottom: 5, textAlign: 'left', fontSize: 13 }}>
                <Col>
                    <p>Bullet icon</p>
                </Col>
                <Col>
                    <input className={viewMode} id='input' onChange={((e) => dispatch(changeBulletIcon(e.target.value)))} type='text' value={bulletIcon} style={{ width: 48, fontSize: 13, textAlign: 'center' }}></input>
                </Col>
            </Row>
        </div>
    )

}

export default NewThemeScratch;