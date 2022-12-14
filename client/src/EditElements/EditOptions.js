import React, { useState } from 'react';
import EditTheme from './EditTheme';
import EditSettings from './EditSettings';
import Bookmarks from './Bookmarks';

function EditOptions({ list }) {

    const [theme, setTheme] = useState(list.theme);
    const [primColor, setPrimColor] = useState(theme.prim_color);
    const [secColor, setSecColor] = useState(theme.sec_color);
    const [bulletIcon, setBulletIcon] = useState(theme.bullet_icon);
    const [bookmarks, setBookmarks] = useState(list.bookmarks)
    const [title, setTitle] = useState(list.title);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    return (
        <div style={{ color: '#4d564d', fontSize: 13 }}>
            <EditTheme list={list} setPrimColor={setPrimColor} primColor={primColor} setSecColor={setSecColor} secColor={secColor} setBulletIcon={setBulletIcon} bulletIcon={bulletIcon} setTheme={setTheme}/>
            <br></br>
            <Bookmarks list={list} setName={setName} name={name} setLink={setLink} link={link} bookmarks={bookmarks} setBookmarks={setBookmarks}/>
            <br></br>
            <EditSettings list={list} setTitle={setTitle} title={title}/>
        </div>
    )
}

export default EditOptions;