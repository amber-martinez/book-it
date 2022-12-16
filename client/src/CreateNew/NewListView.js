import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'

function NewListView({ title }) {

    const primColor = useSelector(state => state.theme.newPrimColor);
    const secColor = useSelector(state => state.theme.newSecColor);
    const bulletIcon = useSelector(state => state.theme.newBulletIcon);

    return (
        <div>
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