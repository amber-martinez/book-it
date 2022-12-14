import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function NewListView({ primColor, secColor, bulletIcon }) {

    const [title, setTitle] = useState('Title');

    return (
        <div>
            Title: <input type='text' value={title} onChange={((e) => setTitle(e.target.value))}></input><br></br><br></br>
            <Card style={{ width: '18rem', margin: 'auto', textAlign: 'left', marginTop: 20, backgroundColor: primColor, color: secColor, border: 'none' }}>
                <Card.Body>
                <Card.Title style={{ fontSize: 17, marginBottom: 4 }}>{title}</Card.Title>
                <Card.Link href="#" style={{ textDecoration: 'none', fontSize: 13, color: secColor }}>{bulletIcon} Your bookmark here</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default NewListView;