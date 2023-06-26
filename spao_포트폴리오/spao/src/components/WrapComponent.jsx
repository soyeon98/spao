import React from 'react';
import {HashRouter, Routes, Route}  from 'react-router-dom';
import IntroComponent from './wrap/IntroComponent';
import SignUpComponent from './wrap/SignUpComponent';

export default function WrapComponent ()  {

    return (
        <div id='wrap'>
            
            <HashRouter>
                <Routes>
                    <Route path='/*'  element={<IntroComponent />} />
                    <Route path='/signup'  element={<SignUpComponent />}/>
                </Routes>
            </HashRouter>
        </div>
    );
};

