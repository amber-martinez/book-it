import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { changePrimColor, changeSecColor, changeBulletIcon, changeThemeID } from './themeSlice';

function ThemeBrowse() {

    const dispatch = useDispatch();
    const viewMode = useSelector(state => state.view.viewMode);
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        fetch('/api/themes')
        .then(r => {
            if (r.ok) {
                r.json().then(data => setThemes(data))
            }
         })
    }, [])

  return (
    <div style={{ textAlign: 'left', maxHeight: 252, overflow: 'scroll', marginTop: -7 }}>
        {themes.map(theme => (
            <div style={{ display: 'inline-block', marginRight: 30 }}>
                <Card style={{ width: '10rem', margin: 'auto', textAlign: 'left', marginTop: 20, backgroundColor: theme.prim_color, color: theme.sec_color, border: 'none' }}>
                    <Card.Body>
                        <Card.Title style={{ fontSize: 14, marginBottom: 5 }}>Title</Card.Title>
                        <div style={{ marginTop: 8}}>
                            <Card.Link style={{ textDecoration: 'none', fontSize: 11, color: theme.sec_color }}>{theme.bullet_icon} Your bookmarks here</Card.Link>
                        </div>
                    </Card.Body>
                </Card>
                <div style={{ textAlign: 'left' }}>
                    <button onClick={(() => {
                        dispatch(changePrimColor(theme.prim_color));
                        dispatch(changeSecColor(theme.sec_color));
                        dispatch(changeBulletIcon(theme.bullet_icon));
                        dispatch(changeThemeID(theme.id));
                    })} className={viewMode} id='selectThemeBtn' value={theme} style={{ backgroundColor: 'transparent', border: 'none', textAlign: 'center', fontSize: 12, marginTop: 1, display: 'inline-block', borderRadius: 3, padding: '2px 10px 3px 10px' }}>Select</button>
                </div>
            </div>
        ))}
    </div>
  );
}

export default ThemeBrowse;