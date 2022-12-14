import React, { useState } from 'react';

function NewListTheme({ primColor, setPrimColor, secColor, setSecColor, bulletIcon, setBulletIcon }) {

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
                setSuccessMessage(true);
                setErrors([]);
            } else {
                r.json().then(e => setErrors(e.errors));
            }
        })
    }

    return (
        <div>
            <h6>Theme</h6>
            Primary Color: <input type='color' value={primColor} onChange={((e) => setPrimColor(e.target.value))}></input><br></br>
            Secondary Color: <input type='color' value={secColor} onChange={((e) => setSecColor(e.target.value))}></input><br></br>
            Bullet Icon: <input type='text' value={bulletIcon} onChange={((e) => setBulletIcon(e.target.value))}></input><br></br>
            <button onClick={onThemeSave}>Save theme</button>
            {successMessage ? <p>New theme saved!</p> : null}
            {errors ? errors.map(e => <p>{e}</p>) : null}
        </div>
    )
}

export default NewListTheme;