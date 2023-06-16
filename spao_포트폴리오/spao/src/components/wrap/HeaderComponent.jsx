import React from 'react';
import $ from 'jquery';

export default function HeaderComponent () {

    React.useEffect(()=>{

        let scrollTop = $(window).scrollTop();  
        
      
        $(window).scroll(function(){
            
            scrollTop = $(window).scrollTop();

            if(scrollTop!==0){
                $('#header').addClass('on');
   
            }
            else{
                $('#header').removeClass('on');
      
            }
      
        });
    });
    
    return (
        <header id='header'>
            <div className="container">
                <div className="gap">
                    <div className="left">
                        <div className="logo">
                            <a href="!#">
                                <img src="./img/header/logo_wht.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="center">
                        <ul>
                            <li><a href="!#">할인 상품</a></li>
                            <li><a href="!#">데님 제안서</a></li>
                            <li><a href="!#">베스트</a></li>
                            <li><a href="!#">우먼</a></li>
                            <li><a href="!#">맨</a></li>
                            <li><a href="!#">컬래버레이션</a></li>
                            <li><a href="!#">키즈</a></li>
                            <li><a href="!#">커뮤니티</a></li>
                            <li><a href="!#">런칭 캘린더</a></li>
                            <li><a href="!#">매거진</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <a href="!#"><div className="img"></div></a>
                            </li>
                            <li>
                                <a href="!#"><div className="img"></div></a>
                            </li>
                            <li>
                                <a href="!#"><div className="img"></div></a>
                            </li>
                            <li>
                                <a href="!#"><div className="img"></div></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

