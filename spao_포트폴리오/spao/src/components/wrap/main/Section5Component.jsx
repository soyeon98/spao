import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import './scss/section5.scss';

export default function Section5Component({setViewProduct}) {

    const [state, setState] = React.useState({
        stylePick: [],
        n: 0
    });


    React.useEffect(() => {
        axios({
            url: './data/main_slide/section5.json',
            method: 'get'
        })
            .then((res) => {
                if (res.status === 200) {
                    setState({
                        ...state,
                        stylePick: res.data.stylePick,
                        n: res.data.stylePick.length
                    });
                }
            })
            .catch((err) => {
                console.log(`AXIOS 실패 ${err}`);
            })

    }, []);

    const onClickProductList = (e, item) => {
        e.preventDefault();
        let obj = {
            제품코드: item.제품코드,
            이미지: `./img/main/${item.이미지}`,
            제품명: item.제품명,
            성별: item.성별,
            판매가: Math.round(item.정가 * (1 - item.할인율)),
            할인율: (item.할인율)*100,
            정가: item.정가,
            색상1: item.색상1,
            색상2: item.색상2,
            색상3: item.색상3,
            색상4: item.색상4,
            색상5: item.색상5,
            색상6: item.색상6,
            색상7: item.색상7,
            색상8: item.색상8
        }
        console.log(obj);
        setViewProduct(obj);
        // 상세페이지 이동
        window.location.href = '#/detail';
    }



    React.useEffect(() => {

        const $slideWrap = $('#section5 .slide-wrap');
        const $leftArrowBtn = $('#section5 .prev-btn');
        const $rightArrowBtn = $('#section5 .next-btn');
        const $pageBtn_s5 = $('#section5 .page-btn');
        let cnt = 0;
        let setId = 0;

        $slideWrap.css({ width: `${33.333 * state.n}%` });
        //1. 메인슬라이드함수
        function mainSlide() {
            $slideWrap.stop().animate({ left: `${cnt * -33.333}%` }, 600, function () {
                if (cnt > 7) cnt = 0;
                if (cnt < 0) cnt = 7;
                $slideWrap.stop().animate({ left: `${-33.333 * cnt}%` }, 0);
                
            });
            pageBtn_s5();
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

        function autoTimer() {
            setId = setInterval(nextCount, 5000);
        }
        autoTimer();
        //3. 다음 화살버튼 클릭 이벤트
        $leftArrowBtn.on({
            click(e) {
                e.preventDefault();
                clearInterval(setId);
                prevCount();
                autoTimer();
            }

        });
        $rightArrowBtn.on({
            click(e) {
                e.preventDefault();
                clearInterval(setId);
                nextCount();
                autoTimer();
            }
        });

        function pageBtn_s5() {
            $pageBtn_s5.removeClass('on');
            $pageBtn_s5.eq(cnt > 7 ? 0 : cnt).addClass('on');
        }

        $pageBtn_s5.each(function (idx) {
            $(this).on({
                click(e) {
                    e.preventDefault();
                    clearInterval(setId);
                    cnt=idx;
                    mainSlide();
                    autoTimer();
                }
            });
        });

    }, [state.n]);


    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>스타일 픽</h2>
                    </div>
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                {
                                    state.stylePick.map((i, idx) => {
                                        return (
                                            <li className='slide' key={idx}>
                                                <div className="img-box">
                                                    <a href="!#" onClick={(e)=>onClickProductList(e,i)}><img src={`./img/main/${i.이미지}`} alt="" /></a>
                                                </div>
                                                <div className="info-box">
                                                    <a href="!#"><h2>{i.제품명}</h2></a>
                                                    <h3>{i.판매가.toLocaleString('ko-KR')} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${Math.round(i.할인율 * 100)}%`}</span></h3>
                                                    <div className="color-box">
                                                        <span className='color' style={{ "background-color": `${i.색상1}`, "border-color": `${i.색상1 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span className='color' style={{ "background-color": `${i.색상2}`, "border-color": `${i.색상2 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span className='color' style={{ "background-color": `${i.색상3}`, "border-color": `${i.색상3 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span className='color' style={{ "background-color": `${i.색상4}`, "border-color": `${i.색상4 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span className='color' style={{ "background-color": `${i.색상5}`, "border-color": `${i.색상5 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span className='color' style={{ "background-color": `${i.색상6}`, "border-color": `${i.색상6 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span className='color' style={{ "background-color": `${i.색상7}`, "border-color": `${i.색상7 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span className='color' style={{ "background-color": `${i.색상8}`, "border-color": `${i.색상8 === "" ? "transparent" : "#e6e5e5"}` }}></span>
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
                        <div className="prev-btn"><a href="!#"><img src="./img/main/left-arrow.png" alt="" /></a></div>
                        <div className="next-btn"><a href="!#"><img src="./img/main/right-arrow.png" alt="" /></a></div>
                        <div className="page-btn-box">
                            <span><a href="!#" className="page-btn blind on">페이지1</a></span>
                            <span><a href="!#" className="page-btn blind">페이지2</a></span>
                            <span><a href="!#" className="page-btn blind">페이지3</a></span>
                            <span><a href="!#" className="page-btn blind">페이지4</a></span>
                            <span><a href="!#" className="page-btn blind">페이지5</a></span>
                            <span><a href="!#" className="page-btn blind">페이지6</a></span>
                            <span><a href="!#" className="page-btn blind">페이지7</a></span>
                            <span><a href="!#" className="page-btn blind">페이지8</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

