import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleViewMode, setEmoji } from './viewSlice';
import List from '../CreateNew/List';

function Lists() {

    const account = useSelector(state => state.user.account);
    const viewMode = useSelector(state => state.view.viewMode);
    const emoji = useSelector(state => state.view.emoji);
    const dispatch = useDispatch();

    return (
        <div style={{ marginLeft: 215, marginTop: 45, textAlign: 'left' }}>
            {account ?
            <div>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>Lists</h3>
                <button className={viewMode} id='button'><Link to='/new-list' style={{ textDecoration: 'none', color: 'white' }}>+ New list</Link></button>
                <button onClick={(() => {
                    dispatch(setEmoji())
                    if (emoji == false) {
                        dispatch(toggleViewMode('dark'))
                    } else {
                        dispatch(toggleViewMode('light'))
                    }
                })} style={{ backgroundColor: 'transparent', border: 'none', padding: '3px 11px 3px 11px', marginRight: 10 }}>{emoji ? '☁️' : '☀️'}</button>
                <div style={{ marginTop: 20 }}>
                    { account.lists.length > 0 ?
                    account.lists.map(list => <List list={list}/>)
                    : 'false' }
                </div>
            </div>

            : <p>Sign in <Link to='/signup' id='inlineLink'>here.</Link></p>
            }
        </div>
    )
}

export default Lists;