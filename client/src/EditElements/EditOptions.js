import React, { useState } from 'react';
import EditTheme from './EditTheme';
// import EditSettings from './EditSettings';

function EditOptions({ list }) {

    const [primColor, setPrimColor] = useState(list.theme.prim_color);
    const [secColor, setSecColor] = useState(list.theme.sec_color);
    const [bulletIcon, setBulletIcon] = useState(list.theme.bullet_icon);
    const [title, setTitle] = useState(list.title);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [errors, setErrors] = useState([]);

    function onSaveEdits(e) {
        e.preventDefault();

        fetch(`/api/lists/${list.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                user_id: list.user,
                theme_id: list.theme.id
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => setTitle(data))
            } else {
                r.json().then(e => setErrors(e.errors))
            }
        })
    }

    // console.log(list)

    return (
        <div style={{ color: '#4d564d', fontSize: 13 }}>
            <EditTheme list={list}/>
            <br></br>
            {/* <EditSettings list={list} setTitle={setTitle} title={title} setName={setName} name={name} setLink={setLink} link={link}/> */}
            <div style={{ marginTop: 50, textAlign: 'center' }}>
                <button onClick={onSaveEdits} style={{ backgroundColor: '#4d564d', border: 'solid 1px #657065d9', borderColor: '#657065d9', textAlign: 'center', fontSize: 12, marginTop: 6, display: 'inline-block', marginRight: 10, borderRadius: 3, color: 'white', padding: '2px 10px 3px 10px' }}>Save</button>
            </div>
        </div>
    )
}

export default EditOptions;