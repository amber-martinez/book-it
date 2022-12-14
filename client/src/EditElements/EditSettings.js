import React from 'react';
import EditTitle from './EditTitle';
import DeleteList from './DeleteList';

function EditSettings({ list, title, setTitle }) {

    return (
        <div>
            <h3 style={{ fontSize: 17, marginBottom: 18, marginTop: 10 }}>Settings</h3>
            <EditTitle list={list} title={title} setTitle={setTitle}/>
            <DeleteList list={list}/>
        </div>
    )
}

export default EditSettings;