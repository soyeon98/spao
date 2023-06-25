import React from 'react';
import './scss/denim.scss';
import axios from 'axios';
import $ from 'jquery';

export default function DenimComponent() {

    const [state, setState] = React.useState({
        men: [],
        women:[],
        kid:[],
        cnt_1:0,
        cnt_2:0
    });


    React.useEffect(() => {
        axios({
            url: './data/sub/denim.json',
            method: 'get'
        })
            .then((res) => {
                if (res.status === 200) {
                    setState({
                        ...state,
                        men: res.data.men,
                        women: res.data.women,
                        kid: res.data.kid
                    });
                }
            })
            .catch((err) => {
                console.log(`AXIOS 실패 ${err}`);
            })

    }, []);

    React.useEffect(() => {

        const $slideWrap = $('#denim .slide-wrap-up');
        const $leftArrowBtn = $('#denim .left-btn-up');
        const $rightArrowBtn = $('#denim .right-btn-up');
        const $pageBtn_du = $('#denim .page-btn-up');
        let cnt = state.cnt_1;

        //1. 메인슬라이드함수
        function mainSlide() {
            $slideWrap.stop().animate({ left: `${cnt * -100}%` }, 600, function () {
                if (cnt > 6) cnt = 0;
                if (cnt < 0) cnt = 6;
                $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 0);
                
            });
            pageBtn_du();
        }
        //2-1. 다음 카운트 함수
        function nextCount() {
            if (!$slideWrap.is(':animated')) {
                cnt++;
                mainSlide();
            }
        }
        //2-2. 이전 카운트 함수
        function prevCount() {
            if (!$slideWrap.is(':animated')) {
                cnt--;
                mainSlide();
            }
        }

        //3. 다음 화살버튼 클릭 이벤트
        $leftArrowBtn.on({
            click(e) {
                e.preventDefault();
                prevCount();
            }

        });
        $rightArrowBtn.on({
            click(e) {
                e.preventDefault();
                nextCount();
            }
        });

        function pageBtn_du() {
            $pageBtn_du.removeClass('on');
            $pageBtn_du.eq(cnt > 6 ? 0 : cnt).addClass('on');
        }

        $pageBtn_du.each(function (idx) {
            $(this).on({
                click(e) {
                    e.preventDefault();
                    cnt=idx;
                    mainSlide();
                }
            });
        });

    }, [state.cnt]);
    React.useEffect(() => {

        const $slideWrapD = $('#denim .slide-wrap-down');
        const $leftArrowBtnD = $('#denim .left-btn-down');
        const $rightArrowBtnD = $('#denim .right-btn-down');
        const $pageBtn_dd = $('#denim .page-btn-down');
        let cnt_d = state.cnt_2;

        //1. 메인슬라이드함수
        function mainSlide() {
            $slideWrapD .stop().animate({ left: `${cnt_d * -100}%` }, 600, function () {
                if (cnt_d > 1) cnt_d = 0;
                if (cnt_d < 0) cnt_d = 1;
                $slideWrapD .stop().animate({ left: `${-100 * cnt_d}%` }, 0);
                
            });
            pageBtn_du();
        }
        //2-1. 다음 카운트 함수
        function nextCount() {
            if (!$slideWrapD .is(':animated')) {
                cnt_d++;
                mainSlide();
            }
        }
        //2-2. 이전 카운트 함수
        function prevCount() {
            if (!$slideWrapD .is(':animated')) {
                cnt_d--;
                mainSlide();
            }
        }

        //3. 다음 화살버튼 클릭 이벤트
        $leftArrowBtnD.on({
            click(e) {
                e.preventDefault();
                prevCount();
            }
        });
        $rightArrowBtnD.on({
            click(e) {
                e.preventDefault();
                nextCount();
            }
        });

        function pageBtn_du() {
            $pageBtn_dd.removeClass('on');
            $pageBtn_dd.eq(cnt_d > 1 ? 0 : cnt_d).addClass('on');
        }

        $pageBtn_dd.each(function (idx) {
            $(this).on({
                click(e) {
                    e.preventDefault();
                    cnt_d=idx;
                    mainSlide();
                }
            });
        });

    }, [ state.cnt_2]);

    const onClickNav=(e,value)=>{
        e.preventDefault();
        let ul1 = $('#denim .row1').offset().top - 100;
        let ul2 = $('#denim .row2').offset().top - 100;
        let ul3 = $('#denim .row3').offset().top - 100;

        if(value===1){
            $('html,body').stop().animate({scrollTop:ul1},300);
        }
        else if(value===2){
            $('html,body').stop().animate({scrollTop:ul2},300);
        }
        else if(value===3){
            $('html,body').stop().animate({scrollTop:ul3},300);
        }
    }


    return (
        <div id='denim'>
            <div className="container">
                <div className="gap">
                    <div className="link-box">
                        <ul>
                            <li><a href="!#">HOME</a></li>
                            <li>기획전</li>
                            <li>[기획전] 데님 제안서</li>
                        </ul>
                    </div>
                    <div className="title">
                        <h2>[기획전] 데님 제안서</h2>
                    </div>
                    <div className="img-box">
                        <img src="./img/denim/shop1_3180_top_923591.jpg" alt="" />
                        <img src="./img/denim/shop1_3180_top_735197.jpg" alt="" />
                    </div>
                    <div className="slide-container-up">
                        <div className="slide-view-up">
                            <ul className="slide-wrap-up">
                                <li className="slide-review">
                                    <img src="./img/denim/pc-card_00007.jpg" alt="" />
                                </li>
                                <li className="slide-review">
                                    <img src="./img/denim/pc-card_00001.jpg" alt="" />
                                </li>
                                <li className="slide-review">
                                    <img src="./img/denim/pc-card_00002.jpg" alt="" />
                                </li>
                                <li className="slide-review">
                                    <img src="./img/denim/pc-card_00003.jpg" alt="" />
                                </li>
                                <li className="slide-review">
                                    <img src="./img/denim/pc-card_00004.jpg" alt="" />
                                </li>
                                <li className="slide-review">
                                    <img src="./img/denim/pc-card_00005.jpg" alt="" />
                                </li>
                                <li className="slide-review">
                                    <img src="./img/denim/pc-card_00006.jpg" alt="" />
                                </li>
                                <li className="slide-review">
                                    <img src="./img/denim/pc-card_00007.jpg" alt="" />
                                </li>
                                <li className="slide-review">
                                    <img src="./img/denim/pc-card_00001.jpg" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="left-btn-up"><img src="./img/denim/icon_pro_prev.svg" alt="" /></div>
                        <div className="right-btn-up"><img src="./img/denim/icon_pro_next.svg" alt="" /></div>
                        <div className="page-btn-box">
                            <span><a href="!#" class="page-btn-up blind on">페이지1</a></span>
                            <span><a href="!#" class="page-btn-up blind">페이지2</a></span>
                            <span><a href="!#" class="page-btn-up blind">페이지3</a></span>
                            <span><a href="!#" class="page-btn-up blind">페이지4</a></span>
                            <span><a href="!#" class="page-btn-up blind">페이지5</a></span>
                            <span><a href="!#" class="page-btn-up blind">페이지6</a></span>
                            <span><a href="!#" class="page-btn-up blind">페이지7</a></span>
                        </div>
                    </div>
                    <div className="slide-container-down">
                        <div className="slide-view-down">
                            <ul className="slide-wrap-down">
                                <li className="slide-guide">
                                    <img src="./img/denim/pc-card2_002.jpg" alt="" />
                                </li>
                                <li className="slide-guide">
                                    <img src="./img/denim/pc-card2_001.jpg" alt="" />
                                </li>
                                <li className="slide-guide">
                                    <img src="./img/denim/pc-card2_002.jpg" alt="" />
                                </li>
                                <li className="slide-guide">
                                    <img src="./img/denim/pc-card2_001.jpg" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="left-btn-down"><img src="./img/denim/icon_pro_prev.svg" alt="" /></div>
                        <div className="right-btn-down"><img src="./img/denim/icon_pro_next.svg" alt="" /></div>
                        <div className="page-btn-box">
                            <span><a href="!#" class="page-btn-down blind on">페이지1</a></span>
                            <span><a href="!#" class="page-btn-down blind">페이지2</a></span>
                        </div>
                    </div>
                    <div className="cate-box">
                        <ul>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,1) }>MEN</a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,2) }>WOMEN</a></li>
                            <li><a href="!#" onClick={(e)=>onClickNav(e,3) }>KID</a></li>
                        </ul>
                    </div>
                    <div className="product-box">
                <div className="row row1">
                    <div className="cate">
                        <h3>MEN</h3>
                    </div>
                    <div className="product">
                        <ul>
                        {
                            state.men.map((i, idx) => {
                                return (
                                    <li key={idx}>
                                        <div className="img-box">
                                            <a href="!#">
                                                <div className="img">
                                                    <img src={`./img/denim/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
                                            <div className="color">
                                                <span style={{ "background-color": `${i.색상1}`, "border-color": `${i.색상1 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상2}`, "border-color": `${i.색상2 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상3}`, "border-color": `${i.색상3 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상4}`, "border-color": `${i.색상4 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상5}`, "border-color": `${i.색상5 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상6}`, "border-color": `${i.색상6 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상7}`, "border-color": `${i.색상7 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상8}`, "border-color": `${i.색상8 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                            </div>
                                            <p>리뷰 {i.리뷰}건</p>
                                            <div className="gender">
                                                <span>{i.성별}</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    </div>
                </div>
                <div className="row row2">
                    <div className="cate">
                        <h3>WOMEN</h3>
                    </div>
                    <div className="product">
                        <ul>
                        {
                            state.women.map((i, idx) => {
                                return (
                                    <li key={idx}>
                                        <div className="img-box">
                                            <a href="!#">
                                                <div className="img">
                                                    <img src={`./img/denim/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
                                            <div className="color">
                                                <span style={{ "background-color": `${i.색상1}`, "border-color": `${i.색상1 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상2}`, "border-color": `${i.색상2 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상3}`, "border-color": `${i.색상3 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상4}`, "border-color": `${i.색상4 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상5}`, "border-color": `${i.색상5 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상6}`, "border-color": `${i.색상6 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상7}`, "border-color": `${i.색상7 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상8}`, "border-color": `${i.색상8 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                            </div>
                                            <p>리뷰 {i.리뷰}건</p>
                                            <div className="gender">
                                                <span>{i.성별}</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    </div>
                </div>
                <div className="row row3">
                    <div className="cate">
                        <h3>KID</h3>
                    </div>
                    <div className="product">
                        <ul>
                        {
                            state.kid.map((i, idx) => {
                                return (
                                    <li key={idx}>
                                        <div className="img-box">
                                            <a href="!#">
                                                <div className="img">
                                                    <img src={`./img/denim/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
                                            <div className="color">
                                                <span style={{ "background-color": `${i.색상1}`, "border-color": `${i.색상1 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상2}`, "border-color": `${i.색상2 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상3}`, "border-color": `${i.색상3 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상4}`, "border-color": `${i.색상4 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상5}`, "border-color": `${i.색상5 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상6}`, "border-color": `${i.색상6 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상7}`, "border-color": `${i.색상7 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                <span style={{ "background-color": `${i.색상8}`, "border-color": `${i.색상8 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                            </div>
                                            <p>리뷰 {i.리뷰}건</p>
                                            <div className="gender">
                                                <span>{i.성별}</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    </div>
                </div>

            </div>
                </div>
            </div>


        </div>
    );
};

