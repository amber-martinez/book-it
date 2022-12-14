import React from 'react'
import AddBookmark from './AddBookmark';
import DeleteBookmark from './DeleteBookmark';

function Bookmarks({ setName, name, setLink, link, list, setBookmarks, bookmarks }) {

    return (
        <div style={{ marginBottom: 18 }}>
            <AddBookmark setName={setName} name={name} setLink={setLink} link={link} list={list} setBookmarks={setBookmarks} bookmarks={bookmarks}/>
            <DeleteBookmark setBookmarks={setBookmarks} bookmarks={bookmarks}/>
        </div>
    )

}

export default Bookmarks;