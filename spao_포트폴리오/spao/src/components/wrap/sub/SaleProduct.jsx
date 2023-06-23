import React from 'react';
import './scss/sale.scss';
import SaleProductChildComponent from './SaleProductChildComponent';
import {Link} from 'react-router-dom';

export default function SaleProduct() {
   
    return (
        <div id='saleProduct'>
            <div className="container">
                <div className="gap">
                    <div className="link-box">
                        <ul>
                            <li><a href="!#">HOME</a></li>
                            <li>기획전</li>
                            <li>[할인 상품] 여성</li>
                        </ul>
                    </div>
                    <div className="title">
                        <h2>[할인 상품] 여성</h2>
                    </div>
                    <div className="women-men">
                        <img src="./img/sale/shop1_3077_top_919223.jpg" alt="" />
                        <Link to="/saleMen"><img src="./img/sale/shop1_3077_top_967780.jpg" alt="" /></Link>
                    </div>
                    <div className="cate-box">
                        <ul>
                            <li><a href="!#">[세트할인] 2장 구매시 5,000원 할인 </a></li>
                            <li><a href="!#">[여름 추천 상품] </a></li>
                            <li><a href="!#">[쿨 진] </a></li>
                            <li><a href="!#">파자마 </a></li>
                            <li><a href="!#">셔츠/티셔츠 </a></li>
                            <li><a href="!#">슬랙스 </a></li>
                            <li><a href="!#">스웨트 셋업 </a></li>
                            <li><a href="!#">니트/가디건 </a></li>
                            <li><a href="!#">스커트/원피스 </a></li>
                            <li><a href="!#">아우터 </a></li>
                            <li><a href="!#">푸퍼 </a></li>
                        </ul>
                    </div>
                    <SaleProductChildComponent/>
                </div>
            </div>

        </div>
    );
};

