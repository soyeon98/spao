import React from 'react';
import {HashRouter, Routes, Route}  from 'react-router-dom';
import IntroComponent from './wrap/IntroComponent';
import SignUpComponent from './wrap/SignUpComponent';

export default function WrapComponent ()  {

    const [product, setProduct] = React.useState({
        product_key: 'SY_VIEW_PRODUCT',
        getViewProduct: []
    });
    // 비구조화 구조분할할당
    const { getViewProduct, product_key } = product;

    const setViewProduct = (value) => {
        let arr = [];
        if (localStorage.getItem(product_key) !== null) {
            arr = JSON.parse(localStorage.getItem(product_key));
            arr = [value, ...arr]
            localStorage.setItem(product_key, JSON.stringify(arr));
            setProduct({
                ...product,
                getViewProduct: arr
            });
        }
        else {
            arr = [...arr, value];
            localStorage.setItem(product_key, JSON.stringify(arr));
            setProduct({
                ...product,
                getViewProduct: arr
            });
        }

    }

    return (
        <div id='wrap'>
            
            <HashRouter>
                <Routes>
                    <Route path='/*'  element={<IntroComponent setViewProduct={setViewProduct}/>} />
                    <Route path='/signup'  element={<SignUpComponent />}/>
                </Routes>
            </HashRouter>
        </div>
    );
};

