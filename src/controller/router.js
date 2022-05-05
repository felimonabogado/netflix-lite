import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Signin, Browse, ContinueToWatch, NewRelease, Trending } from './pages';

export function PageRouter(){

    return(
        <>
            <Routes>
                <Route exact path='/' element={<Signin/>}/>
                <Route exact path='/browse' element={<Browse/>}/>
                <Route exact path='/continue-to-watch' element={<ContinueToWatch/>}/>
                <Route exact path='/new-release' element={<NewRelease/>}/>
                <Route exact path='/trending' element={<Trending/>}/>
            </Routes>
        </>
    )
}
