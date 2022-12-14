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
                <Card.Body style={{ marginTop: -40 }}>
                    <Card.Title style={{ fontSize: 17, marginBottom: 5 }}>{list.title}</Card.Title>
                    <div style={{ marginTop: 8}}>
                        {list.bookmarks.length > 0 ?
                        list.bookmarks.map(bm => (
                            <div>
                            <Card.Link href={bm.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontSize: 13, color: list.theme.sec_color }}>{list.theme.bullet_icon} {bm.name}</Card.Link>
                            </div>
                        ))
                        : null
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default List;