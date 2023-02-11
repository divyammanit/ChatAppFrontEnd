import React from 'react';

import {Routes,Route} from 'react-router-dom'

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

export default function App() {
    return(
        <Routes>
            <Route path="/" exact element={<Join/>} />
            <Route path="/Chat/:name/:room"  element={<Chat/>} />
        </Routes>
    );
}

