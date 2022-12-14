import React from 'react';
import Card from 'react-bootstrap/Card';
import Example from '../EditElements/OffCanvasMenu';

function List({ list }) {

    return (
        <div style={{ display: 'inline-block', marginRight: 30 }}>
            <Card style={{ width: '18rem', margin: 'auto', textAlign: 'left', marginTop: 20, backgroundColor: list.theme.prim_color, color: list.theme.sec_color, border: 'none' }}>
                <div style={{ position: 'relative' }}>
                    <Example list={list} />
                </div>
                {/* <button style={{ backgroundColor: 'transparent', border: 'none', marginBottom: -27, position: 'absolute' }}><img src='https://i.imgur.com/Qz7Bn9N.png' style={{ height: 18, width: 18, marginTop: 11, marginRight: -512, marginBottom: -7 }}></img></button> */}
                <Card.Body style={{ marginTop: -40 }}>
                    <Card.Title style={{ fontSize: 17, marginBottom: 5 }}>{list.title}</Card.Title>
                    <Card.Link href="#" style={{ textDecoration: 'none', fontSize: 13, color: list.theme.sec_color }}>{list.theme.bullet_icon} Your bookmark here</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default List;