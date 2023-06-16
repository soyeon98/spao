import React from 'react';
import FooterComponent from './wrap/FooterComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';

export default function WrapComponent ()  {
    return (
        <div id='wrap'>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
        </div>
    );
};

