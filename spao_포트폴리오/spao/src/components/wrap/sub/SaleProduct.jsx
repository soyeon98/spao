import React from 'react';
import $ from 'jquery';
import './scss/sale.scss';
import SaleProductChildComponent from './SaleProductChildComponent';
import {Link} from 'react-router-dom';

export default function SaleProduct({setViewProduct}) {

    function reset(){
        window.scrollTo(0,0);
    }

    React.useEffect(()=>{
        reset();
    });

    const onClickNav=(e,value)=>{
        e.preventDefault();
        let ul1 = $('#saleProduct .row1').offset().top - 100;
        let ul2 = $('#saleProduct .row2').offset().top - 100;
        let ul3 = $('#saleProduct .row3').offset().top - 100;
        let ul4 = $('#saleProduct .row4').offset().top - 100;
        let ul5 = $('#saleProduct .row5').offset().top - 100;
        let ul6 = $('#saleProduct .row6').offset().top - 100;
        let ul7 = $('#saleProduct .row7').offset().top - 100;
        let ul8 = $('#saleProduct .row8').offset().top - 100;
        let ul9 = $('#saleProduct .row9').offset().top - 100;
        let ul10 = $('#saleProduct .row10').offset().top - 100;
        let ul11 = $('#saleProduct .row11').offset().top - 100;
        if(value===1){
            $('html,body').stop().animate({scrollTop:ul1},300);
        }
        else if(value===2){
            $('html,body').stop().animate({scrollTop:ul2},300);
        }
        else if(value===3){
            $('html,body').stop().animate({scrollTop:ul3},300);
        }
        else if(value===4){
            $('html,body').stop().animate({scrollTop:ul4},300);
        }
        else if(value===5){
            $('html,body').stop().animate({scrollTop:ul5},300);
        }
        else if(value===6){
            $('html,body').stop().animate({scrollTop:ul6},300);
        }
        else if(value===7){
            $('html,body').stop().animate({scrollTop:ul7},300);
        }
        else if(value===8){
            $('html,body').stop().animate({scrollTop:ul8},300);
        }
        else if(value===9){
            $('html,body').stop().animate({scrollTop:ul9},300);
        }
        else if(value===10){
            $('html,body').stop().animate({scrollTop:ul10},300);
        }
        else if(value===11){
            $('html,body').stop().animate({scrollTop:ul11},300);
        }
    }


   
    return (
        <div id='saleProduct' className='sale-product'>
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
                            <li><a href="!#" onClick={(e)=>onClickNav(e,1) }>[세트할인] 2장 구매시 5,000원 할인 </a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,2) }>[여름 추천 상품] </a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,3) }>[쿨 진] </a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,4) }>파자마 </a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,5) }>셔츠/티셔츠 </a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,6) }>슬랙스 </a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,7) }>스웨트 셋업 </a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,8) }>니트/가디건 </a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,9) }>스커트/원피스 </a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,10)}>아우터 </a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,11)}>푸퍼 </a></li>
                        </ul>
                    </div>
                    <SaleProductChildComponent setViewProduct={setViewProduct}/>
                </div>
            </div>

        </div>
    );
};

