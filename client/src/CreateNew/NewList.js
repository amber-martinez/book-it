import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import OffCanvasMenu from '../EditElements/OffCanvasMenu';

function NewList({ user }) {

    const [primColor, setPrimColor] = useState('#ecebe5');
    const [secColor, setSecColor] = useState('#5b583d');
    const [bulletIcon, setBulletIcon] = useState('◇');
    const [title, setTitle] = useState('Title');
    const [theme, setTheme] = useState({});
    const [themeErrors, setThemeErrors] = useState([]);
    const [listErrors, setListErrors] = useState([]);

    console.log(theme, user)

    function onThemeSave(e) {
        e.preventDefault();

        fetch(`/api/themes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prim_color: primColor,
                sec_color: secColor,
                bullet_icon: bulletIcon
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => setTheme(data))
            } else {
                r.json().then(e => setThemeErrors(e))
            }
        })
    }


    function onNewListSave(e) {
        e.preventDefault();

        fetch(`/api/lists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                user_id: user.id,
                theme_id: theme.id
            })
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => setTheme(data))
            } else {
                r.json().then(e => setListErrors(e.errors))
            }
        })
    }


    return (
        <div style={{ textAlign: 'center', marginTop: 62 }}>
            {/* <h3 style={{ fontSize: 18 }}>New List</h3> */}
            <div>
                <h6>Theme</h6>
                Primary Color: <input type='color' value={primColor} onChange={((e) => setPrimColor(e.target.value))}></input><br></br>
                Secondary Color: <input type='color' value={secColor} onChange={((e) => setSecColor(e.target.value))}></input><br></br>
                Bullet Icon: <input type='text' value={bulletIcon} onChange={((e) => setBulletIcon(e.target.value))}></input><br></br>
                Title: <input type='text' value={title} onChange={((e) => setTitle(e.target.value))}></input><br></br><br></br>
                <button onClick={onThemeSave}>Save theme</button>
                {themeErrors ? themeErrors.map(e => <p>{e}</p>) : null}
            </div>
            <div>
                <Card style={{ width: '18rem', margin: 'auto', textAlign: 'left', marginTop: 20, backgroundColor: primColor, color: secColor, border: 'none' }}>
                    <Card.Body>
                    <Card.Title style={{ fontSize: 17, marginBottom: 4 }}>{title}</Card.Title>
                    <Card.Link href="#" style={{ textDecoration: 'none', fontSize: 13, color: secColor }}>{bulletIcon} Your bookmark here</Card.Link>
                    </Card.Body>
                    {/* <OffCanvasMenu user={user}/> */}
                </Card>
                <button onClick={onNewListSave}>Save list</button>
                {listErrors ? listErrors.map(e => <p>{e}</p>) : null}
            </div>
        </div>
    )

}

export default NewList;