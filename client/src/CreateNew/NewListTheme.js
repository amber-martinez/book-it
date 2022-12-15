import React, { useState } from 'react';
import ThemeBrowse from './ThemeBrowse';
import NewThemeScratch from './NewThemeScratch';

function NewListTheme({ primColor, setPrimColor, secColor, setSecColor, bulletIcon, setBulletIcon, setThemeID }) {

    const [successMessage, setSuccessMessage] = useState(false);
    const [errors, setErrors] = useState([]);

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
                    setThemeID(data.id)
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
                <ThemeBrowse setThemeID={setThemeID}/>
            </div>
                <NewThemeScratch setThemeID={setThemeID}/>
            <div style={{ marginTop: 15 }}>
                {errors ? errors.map(e => <p style={{ marginBottom: 3 }}>{e}</p>) : null}
                {successMessage ? <p>Theme saved.</p> : null }
            </div>
        </div>
    )
}

export default NewListTheme;