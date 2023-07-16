import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

export default function HeaderComponent () {

    const [isLogin, setIsLogin] = React.useState(false);

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

            $('#header .sub-up').on({
                mouseenter(){
                    $(this).next().css({"display":"block"});
                    $('#header').addClass('up');
                }
            });
        
            $('#header .sub-page').on({
                mouseleave(){
                    $('.sub').css({"display":"none"});
                    $('#header').removeClass('up');
                }
            });
      
        });
    });

    React.useEffect(()=>{
       
        let isLogin = false;

        if(sessionStorage.getItem('user_id') !==null){
            isLogin =true;
        }
        else {
            isLogin =false;
        }
        setIsLogin(isLogin);

    },[isLogin])

    const onClickLogout=(e)=>{
        e.preventDefault();
        sessionStorage.removeItem('user_id');
        setIsLogin(false);
        window.location.href="/";
    }
    
    return (
        <header id='header'>
            <div className="container">
                <div className="gap">
                    <div className="left">
                        <div className="logo">
                            <Link to="/main">
                                <img src="./img/header/logo_wht.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="center">
                        <ul>
                            <li><Link to="/sale">할인 상품</Link></li>
                            <li><Link to="/denim">데님 제안서</Link></li>
                            <li><a href="!#">베스트</a></li>
                            <li className='sub-page'>
                                <a href="!#" className='sub-up'>우먼</a>
                                <div className="sub sub1">
                                    <div className="container">
                                        <ul className="col col1">
                                            <li><a href="!#">신상품</a></li>
                                            <li><a href="!#">베스트</a></li>
                                            <li><a href="!#">전체보기</a></li>
                                        </ul>
                                        <ul className="col col2">
                                            <li><a href="!#">아우터</a></li>
                                            <li><a href="!#">상의</a></li>
                                            <li><a href="!#">하의</a></li>
                                            <li><a href="!#">원피스</a></li>
                                            <li><a href="!#">액세서리</a></li>
                                            <li><a href="!#">이너/언더웨어</a></li>
                                            <li><a href="!#">홈웨어/잠옷</a></li>
                                        </ul>
                                        <ul className="col col3">
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/818de2b816eec0dedebc0a542c6ead28.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>[데일리지] 쿨 와이드 진_SPTJD25G51</h3>
                                                        <h4 className='pr'>49,900</h4>
                                                        <h4 className='sale-pr'>45,900</h4>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/8c07eb4fe2fa3623a5e13188b89b6d96.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>라이트 패커블 윈드브레이커 (SPJJD25C21 RE)_SPJJD37C21</h3>
                                                        <h4 className='pr'>39,900</h4>
                                                        <h4 className='sale-pr'>35,910</h4>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/d029828c5404340bbeabf6758593d9d4.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>[에어비스코스] 롱와이드 팬츠_G_SPMTD26U01</h3>
                                                        <h4>25,900</h4>
                                                        <h4 className='sale-pr'></h4>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='sub-page'>
                                <a href="!#" className='sub-up'>맨</a>
                                <div className="sub sub2">
                                    <div className="container">
                                        <ul className="col col1">
                                            <li><a href="!#">신상품</a></li>
                                            <li><a href="!#">베스트</a></li>
                                            <li><a href="!#">전체보기</a></li>
                                        </ul>
                                        <ul className="col col2">
                                            <li><a href="!#">아우터</a></li>
                                            <li><a href="!#">상의</a></li>
                                            <li><a href="!#">하의</a></li>
                                            <li><a href="!#">액세서리</a></li>
                                            <li><a href="!#">이너/언더웨어</a></li>
                                            <li><a href="!#">홈웨어/잠옷</a></li>
                                        </ul>
                                        <ul className="col col3">
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/ca6fca25b6d57c2af894302dcbf51668.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>라이트 패커블 윈드브레이커_SPJJD25C21</h3>
                                                        <h4 className='pr'>39,900</h4>
                                                        <h4 className='sale-pr'>35,910</h4>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/d3f1428765e813926c03e7ee69c196d3.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>[데일리지] 쿨 와이드 진_SPTJD25C51</h3>
                                                        <h4 className='pr'>49,900</h4>
                                                        <h4 className='sale-pr'>45,900</h4>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/65da233ec7a9d30d805eaf66e56c8e4c.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>(시티보이) 오버핏 옥스포드 반팔셔츠_SPYWD25C01</h3>
                                                        <h4>35,900</h4>
                                                        <h4 className='sale-pr'></h4>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='sub-page'>
                                <a href="!#" className='sub-up'>컬래버레이션</a>
                                <div className="sub sub3">
                                    <div className="container">
                                        <ul className="col col1">
                                            <li><a href="!#">신상품</a></li>
                                            <li><a href="!#">베스트</a></li>
                                            <li><a href="!#">전체보기</a></li>
                                        </ul>
                                        <ul className="col col2">
                                            <li><a href="!#">잠옷</a></li>
                                            <li><a href="!#">상의</a></li>
                                            <li><a href="!#">잡화</a></li>
                                            <li><a href="!#">팬시/뷰티</a></li>
                                        </ul>
                                        <ul className="col col3">
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/f3b54526e319e1231feada204f3fbd89.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>[키즈] (산리오캐릭터즈) 반팔 파자마(LIGHT BLUE)_SPPPD37KU4</h3>
                                                        <h4 className='pr'>35,900</h4>
                                                        <h4 className='sale-pr'>32,900</h4>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/3c580fb2a3e61c513d2b3c8fb8fd1028.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>(담곰이) 날 안입겠담곰? 반팔 잠옷(BLACK)_SPPPD37U03</h3>
                                                        <h4 className='pr'>39,900</h4>
                                                        <h4 className='sale-pr'></h4>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/e97765d6496400e87b966e905d3bb97d.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>(담곰이) 날 안입겠담곰? 반팔 잠옷(WHITE)_SPPPD37U03</h3>
                                                        <h4>39,900</h4>
                                                        <h4 className='sale-pr'></h4>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='sub-page'>
                                <a href="!#" className='sub-up'>키즈</a>
                                <div className="sub sub4">
                                    <div className="container">
                                        <ul className="col col1">
                                            <li><a href="!#">신상품</a></li>
                                            <li><a href="!#">베스트</a></li>
                                            <li><a href="!#">전체보기</a></li>
                                        </ul>
                                        <ul className="col col2">
                                            <li><a href="!#">아우터</a></li>
                                            <li><a href="!#">상의</a></li>
                                            <li><a href="!#">하의</a></li>
                                            <li><a href="!#">원피스/스커트</a></li>
                                            <li><a href="!#">상하의세트</a></li>
                                            <li><a href="!#">홈웨어/잠옷</a></li>
                                            <li><a href="!#">액세서리</a></li>
                                        </ul>
                                        <ul className="col col3">
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/8901552b8f3348f21679191bd55da8a9.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>[키즈] (포켓몬) 너로 정했다! 티셔츠(WHITE)_SPRPD37KU2</h3>
                                                        <h4 className='pr'>25,900</h4>
                                                        <h4 className='sale-pr'></h4>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/6bcb9a582b15167c3a94741128e17298.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>[키즈] (포켓몬) 너로 정했다! 티셔츠(GRAPHIC WHITE)_SPRPD37KU2</h3>
                                                        <h4 className='pr'>25,900</h4>
                                                        <h4 className='sale-pr'></h4>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='sub-page'>
                                <a href="!#" className='sub-up'>커뮤니티</a>
                                <div className="sub sub5">
                                    <div className="container">
                                        <ul className="col col1">
                                            <li><a href="!#">런칭 캘린더</a></li>
                                            <li><a href="!#">룩북</a></li>
                                            <li><a href="!#">스냅</a></li>
                                            <li><a href="!#">스파오TV</a></li>
                                            <li><a href="!#">위클리 코디</a></li>
                                            <li><a href="!#" className='review'>리뷰</a></li>
                                            <li><a href="!#">이벤트</a></li>
                                            <li><a href="!#">채용정보</a></li>
                                        </ul>
                                        <ul className="col col2">
                                            <li><a href="!#">출석체크</a></li>
                                            <li><a href="!#">실시간 리뷰</a></li>
                                            <li><a href="!#">베스트 리뷰어 발표</a></li>
                                            <li><a href="!#">진행 이벤트</a></li>
                                            <li><a href="!#">종료 이벤트</a></li>
                                            <li><a href="!#">당첨자 발표</a></li>
                                        </ul>
                                        <ul className="col col3">
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/510cf2ad10fc9ec33e9fb267841121e3.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>PAJAMA OLYMPIAD</h3>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/bdc4af71a5560eea53c13459c7602448.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>WALK IN THE CAMPUS</h3>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                    <div className="bg8-box">
                                                        <img src="./img/main/6ed6536f3d339f02b1aa756347635c5d.jpg" alt="" />
                                                    </div>
                                                    <div className="txt-box">
                                                        <h3>MOOD OF MINIMAL</h3>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><a href="!#">런칭 캘린더</a></li>
                            <li><a href="!#">매거진</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li className='sub-page'>
                                <a href="!#"  className='sub-up'><div className="img"></div></a>
                                <div className="sub login-sub">
                                    <ul>
                                        {
                                            
                                            !isLogin&&(
                                                <li><Link to="/signin">LOGIN</Link></li>
                                            )
                                        }
                                        {
                                            isLogin&&(
                                                <li><Link to="/signin" onClick={onClickLogout}>LOGOUT</Link></li>
                                            )
                                        }
                                        <li><a href="!#">ORDER</a></li>
                                    </ul>
                                </div>
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

