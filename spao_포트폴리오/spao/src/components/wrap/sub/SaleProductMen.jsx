import React from 'react';
import './scss/sale.scss';
import {Link} from 'react-router-dom';
import SaleMenProductChildComponent from './SaleMenProductChildComponent';

export default function SaleProductMen() {

    return (
        <div id='saleProduct'>
            <div className="container">
                <div className="gap">
                    <div className="link-box">
                        <ul>
                            <li><a href="!#">HOME</a></li>
                            <li>기획전</li>
                            <li>[할인 상품] 남성</li>
                        </ul>
                    </div>
                    <div className="title">
                        <h2>[할인 상품] 남성</h2>
                    </div>
                    <div className="women-men">
                        <img src="./img/sale/shop1_3078_top_279010.jpg" alt="" />
                        <Link to="/sale"><img src="./img/sale/shop1_3078_top_200537.jpg" alt="" /></Link>
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
                            <li><a href="!#">팬츠 </a></li>
                            <li><a href="!#">아우터 </a></li>
                            <li><a href="!#">푸퍼 </a></li>
                        </ul>
                    </div>
                    <SaleMenProductChildComponent/>
                </div>
            </div>

        </div>
    );
};

