import React from 'react';
import $ from 'jquery'
import './scss/section2.scss';

export default function Section2Component () {

    const onClickNav = (e,value) =>{
        e.preventDefault();
        if(value==='우먼'){
            $('.1').addClass('on');
            $('.2').removeClass('on');
            $('.3').removeClass('on');
            $('.4').removeClass('on');
        }
        else if(value==='맨'){
            $('.2').addClass('on');
            $('.1').removeClass('on');
            $('.3').removeClass('on');
            $('.4').removeClass('on');
        }
        else if(value==='키즈'){
            $('.3').addClass('on');
            $('.1').removeClass('on');
            $('.2').removeClass('on');
            $('.4').removeClass('on');
        }
        else if(value==='파자마'){
            $('.4').addClass('on');
            $('.1').removeClass('on');
            $('.2').removeClass('on');
            $('.3').removeClass('on');
        }

    }
    return (
        <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>위클리 베스트</h2>
                    </div>
                    <div className="content">
                        <div className="nav-box">
                            <ul>
                                <li><button className='1 on' onClick={(e)=>onClickNav(e,'우먼')}>우먼</button></li>
                                <li><button className='2' onClick={(e)=>onClickNav(e,'맨')}>맨</button></li>
                                <li><button className='3' onClick={(e)=>onClickNav(e,'키즈')}>키즈</button></li>
                                <li><button className='4' onClick={(e)=>onClickNav(e,'파자마')}>파자마</button></li>
                            </ul>
                        </div>
                        <div className="best-product">
                            <ul>
                                <li>
                                    <div className="img-box">
                                        <a href="!#">
                                            <div className="img">
                                                <img src="./img/main/section2_pro1.jpg" alt="" /><div className="num">1</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="info-box">
                                        <a href="!#"><h2>(산리오캐릭터즈) 산리오캐릭터즈 잠옷(BLACK)_SPPPD25U04</h2></a>
                                        <h3>39,900</h3>
                                        <div className="color">
                                            <span></span>
                                        </div>
                                        <p>리뷰 40건</p>
                                        <div className="gender">
                                            <span>남녀공용</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <a href="!#">
                                            <div className="img">
                                                <img src="./img/main/section2_pro1.jpg" alt="" /><div className="num">1</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="info-box">
                                        <a href="!#"><h2>(산리오캐릭터즈) 산리오캐릭터즈 잠옷(BLACK)_SPPPD25U04</h2></a>
                                        <h3>39,900</h3>
                                        <div className="color">
                                            <span></span>
                                        </div>
                                        <p>리뷰 40건</p>
                                        <div className="gender">
                                            <span>남녀공용</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <a href="!#">
                                            <div className="img">
                                                <img src="./img/main/section2_pro1.jpg" alt="" /><div className="num">1</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="info-box">
                                        <a href="!#"><h2>(산리오캐릭터즈) 산리오캐릭터즈 잠옷(BLACK)_SPPPD25U04</h2></a>
                                        <h3>39,900</h3>
                                        <div className="color">
                                            <span></span>
                                        </div>
                                        <p>리뷰 40건</p>
                                        <div className="gender">
                                            <span>남녀공용</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <a href="!#">
                                            <div className="img">
                                                <img src="./img/main/section2_pro1.jpg" alt="" /><div className="num">1</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="info-box">
                                        <a href="!#"><h2>(산리오캐릭터즈) 산리오캐릭터즈 잠옷(BLACK)_SPPPD25U04</h2></a>
                                        <h3>39,900</h3>
                                        <div className="color">
                                            <span></span>
                                        </div>
                                        <p>리뷰 40건</p>
                                        <div className="gender">
                                            <span>남녀공용</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <a href="!#">
                                            <div className="img">
                                                <img src="./img/main/section2_pro1.jpg" alt="" /><div className="num">1</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="info-box">
                                        <a href="!#"><h2>(산리오캐릭터즈) 산리오캐릭터즈 잠옷(BLACK)_SPPPD25U04</h2></a>
                                        <h3>39,900</h3>
                                        <div className="color">
                                            <span></span>
                                        </div>
                                        <p>리뷰 40건</p>
                                        <div className="gender">
                                            <span>남녀공용</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <a href="!#">
                                            <div className="img">
                                                <img src="./img/main/section2_pro1.jpg" alt="" /><div className="num">1</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="info-box">
                                        <a href="!#"><h2>(산리오캐릭터즈) 산리오캐릭터즈 잠옷(BLACK)_SPPPD25U04</h2></a>
                                        <h3>39,900</h3>
                                        <div className="color">
                                            <span></span>
                                        </div>
                                        <p>리뷰 40건</p>
                                        <div className="gender">
                                            <span>남녀공용</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <a href="!#">
                                            <div className="img">
                                                <img src="./img/main/section2_pro1.jpg" alt="" /><div className="num">1</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="info-box">
                                        <a href="!#"><h2>(산리오캐릭터즈) 산리오캐릭터즈 잠옷(BLACK)_SPPPD25U04</h2></a>
                                        <h3>39,900</h3>
                                        <div className="color">
                                            <span></span>
                                        </div>
                                        <p>리뷰 40건</p>
                                        <div className="gender">
                                            <span>남녀공용</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <a href="!#">
                                            <div className="img">
                                                <img src="./img/main/section2_pro1.jpg" alt="" /><div className="num">1</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="info-box">
                                        <a href="!#"><h2>(산리오캐릭터즈) 산리오캐릭터즈 잠옷(BLACK)_SPPPD25U04</h2></a>
                                        <h3>39,900</h3>
                                        <div className="color">
                                            <span></span>
                                        </div>
                                        <p>리뷰 40건</p>
                                        <div className="gender">
                                            <span>남녀공용</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

