import React from 'react';
import { Routes, Route}  from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import SaleProduct from './sub/SaleProduct';
import SaleProductMen from './sub/SaleProductMen';
import DenimComponent from './sub/DenimComponent';
import GoUpDownComponent from './GoUpDownComponent';
import SignInComponent from './SignInComponent';
import NoticeComponent from './NoticeComponent';
import NoticeViewComponent from './NoticeViewComponent';

export default function IntroComponent  ()  {
    return (
        <>
            <HeaderComponent/>
            <Routes>
                <Route index element={<MainComponent />} />
                <Route path='/main' element={<MainComponent/>} />
                <Route path='/sale' element={<SaleProduct/>} />
                <Route path='/saleMen' element={<SaleProductMen/>} />
                <Route path='/denim' element={<DenimComponent/>} />
                <Route path='/signin' element={<SignInComponent/>} />
                <Route path='/notice' element={<NoticeComponent/>} />
                <Route path='/noticeView' element={<NoticeViewComponent/>} />
            </Routes>
            <FooterComponent/>
            <GoUpDownComponent/>
        </>
    );
};

