import React, { useState } from 'react';
import ThemeBrowse from './ThemeBrowse';
import NewThemeScratch from './NewThemeScratch';
import { useSelector, useDispatch } from 'react-redux';
import { changeThemeID } from './themeSlice';

function NewListTheme() {

    const [successMessage, setSuccessMessage] = useState(false);
    const [errors, setErrors] = useState([]);
    const primColor = useSelector(state => state.theme.newPrimColor);
    const secColor = useSelector(state => state.theme.newSecColor);
    const bulletIcon = useSelector(state => state.theme.newBulletIcon);
    
    const dispatch = useDispatch();

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
                r.json().then(data => {
                    dispatch(changeThemeID(data.id))
                    setSuccessMessage(true);
                    setErrors([]);
                })
            } else {
                r.json().then(e => setErrors(e.errors));
            }
        })
    }

    return (
        <div style={{ display: 'inline-block'}}>
            <h6 style={{ fontSize: 17, textAlign: 'left' }}>Themes</h6>
            <div style={{ marginBottom: 55 }}>
                <ThemeBrowse/>
            </div>
                <NewThemeScratch/>
            <div style={{ marginTop: 8 }}>
                <button onClick={onThemeSave} style={{ backgroundColor: '#4f564e', border: 'solid 1px #4f564e', borderColor: '#4f564e', textAlign: 'center', fontSize: 12, marginTop: 15, display: 'inline-block', borderRadius: 3, color: 'white', padding: '2px 10px 3px 10px' }}>Save theme</button>
                <div style={{ marginTop: 20, fontSize: 12 }}>
                    {errors ? errors.map(e => <p style={{ marginBottom: 3 }}>{e}</p>) : null}
                    {successMessage ? <p>Theme saved.</p> : null }
                </div>
            </div>
        </div>
    )
}

export default NewListTheme;