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
import ProductDetailComponent from './ProductDetailComponent';
import RecentComponent from './mypage/RecentComponent';
import MypageComponent from './mypage/MypageComponent';

export default function IntroComponent  ({setViewProduct})  {
    return (
        <>
            <HeaderComponent/>
            <Routes>
                <Route index element={<MainComponent setViewProduct={setViewProduct} />} />
                <Route path='/main' element={<MainComponent setViewProduct={setViewProduct}/>} />
                <Route path='/sale' element={<SaleProduct setViewProduct={setViewProduct}/>} />
                <Route path='/saleMen' element={<SaleProductMen setViewProduct={setViewProduct}/>} />
                <Route path='/denim' element={<DenimComponent setViewProduct={setViewProduct}/>} />
                <Route path='/detail' element={<ProductDetailComponent setViewProduct={setViewProduct}/>} />
                <Route path='/signin' element={<SignInComponent/>} />
                <Route path='/notice' element={<NoticeComponent/>} />
                <Route path='/noticeView' element={<NoticeViewComponent/>} />
                <Route path='/recent' element={<RecentComponent/>}/>
                <Route path='/mypage' element={<MypageComponent/>}/>
            </Routes>
            <FooterComponent/>
            <GoUpDownComponent/>
        </>
    );
};

