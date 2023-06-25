import React from 'react';
import {HashRouter, Routes, Route}  from 'react-router-dom';
import IntroComponent from './wrap/IntroComponent';

export default function WrapComponent ()  {
    return (
        <div id='wrap'>
            
            <HashRouter>
                <Routes>
                    <Route path='/*'  element={<IntroComponent />} />
                </Routes>
            </HashRouter>
        </div>
    );
};

