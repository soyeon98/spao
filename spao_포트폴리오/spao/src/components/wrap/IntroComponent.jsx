import React from 'react';
import { Routes, Route}  from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import SaleProduct from './sub/SaleProduct';
import SaleProductMen from './sub/SaleProductMen';
import DenimComponent from './sub/DenimComponent';

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
            </Routes>
            <FooterComponent/>
        </>
    );
};

