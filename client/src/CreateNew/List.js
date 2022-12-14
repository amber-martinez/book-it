import React from 'react';
import Card from 'react-bootstrap/Card';
import Example from '../EditElements/OffCanvasMenu';
import { Link } from 'react-router-dom';

function List({ list }) {

    console.log(list.bookmarks)

    return (
        <div style={{ display: 'inline-block', marginRight: 30 }}>
            <Card style={{ width: '18rem', margin: 'auto', textAlign: 'left', marginTop: 20, backgroundColor: list.theme.prim_color, color: list.theme.sec_color, border: 'none' }}>
                <div style={{ position: 'relative' }}>
                    <Example list={list} />
                </div>
                {/* <button style={{ backgroundColor: 'transparent', border: 'none', marginBottom: -27, position: 'absolute' }}><img src='https://i.imgur.com/Qz7Bn9N.png' style={{ height: 18, width: 18, marginTop: 11, marginRight: -512, marginBottom: -7 }}></img></button> */}
                <Card.Body style={{ marginTop: -40 }}>
                    <Card.Title style={{ fontSize: 17, marginBottom: 5 }}>{list.title}</Card.Title>
                    <div style={{ marginTop: 8}}>
                        {list.bookmarks.length > 0 ?
                        list.bookmarks.map(bm => (
                            <div>
                            <Card.Link href={bm.link} style={{ textDecoration: 'none', fontSize: 13, color: list.theme.sec_color }}>{list.theme.bullet_icon} {bm.name}</Card.Link>
                            </div>
                        ))
                        : null
                        }
                    </div>
                    {/* <Card.Link href="#" style={{ textDecoration: 'none', fontSize: 13, color: list.theme.sec_color }}>{list.theme.bullet_icon} Your bookmark here</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default List;