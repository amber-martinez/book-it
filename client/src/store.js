import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './CoreComponents/userSlice.js';
import themeReducer from './CreateNew/themeSlice.js'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({ 
    user: userReducer,
    theme: themeReducer
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

console.log(store.getState())

export default store;
export const persistor = persistStore(store)


// const rootReducer = combineReducers({ 
//     user: userReducer,
//     notes: NotesReducer
//   })
  
//   const persistedReducer = persistReducer(persistConfig, rootReducer)
  
//   const store = configureStore({
//     reducer: persistedReducer
//   })
