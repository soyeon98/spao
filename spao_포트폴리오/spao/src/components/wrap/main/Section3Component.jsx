import React from 'react';
import './scss/section3.scss';
import axios from 'axios';
import $ from 'jquery';

export default function Section3Component({setViewProduct}) {

    const [state, setState] = React.useState({
        신상품: [],
        n: 0
    });

    const slideWrap = React.useRef();


    React.useEffect(() => {
        axios({
            url: './data/main_slide/section3.json',
            method: 'get'
        })
            .then((res) => {
                if (res.status === 200) {
                    setState({
                        ...state,
                        신상품: res.data.신상품,
                        n: res.data.신상품.length
                    });
                }
            })
            .catch((err) => {
                console.log(`AXIOS 실패 ${err}`);
            })

        if ($('.color3').css({ "background": "transparent" })) {
            $('.color3').css({ "border": "1px solid #fff" });
        }

    }, []);


    React.useEffect(() => {

        const $slideWrap = $('#section3 .slide-wrap');
        const $leftArrowBtn = $('#section3 .prev-btn');
        const $rightArrowBtn = $('#section3 .next-btn');
        let cnt = 0;
        let setId = 0;

        $slideWrap.css({ width: `${25 * state.n}%` });
        //1. 메인슬라이드함수
        function mainSlide() {
            $slideWrap.stop().animate({ left: `${cnt * -25}%` }, 600, function () {
                if (cnt > 11) cnt = 0;
                if (cnt < 0) cnt = 11;
                $slideWrap.stop().animate({ left: `${-25 * cnt}%` }, 0);
            });
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

    }, [state.n]);

    const onClickProductList = (e, item) => {
        e.preventDefault();
        let obj = {
            제품코드: item.제품코드,
            이미지: item.이미지,
            제품명: item.상품명,
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



    return (
        <section id='section3'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>신상품</h2>
                    </div>
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul ref={slideWrap} className="slide-wrap">
                                {
                                    state.신상품.map((item, idx) => {
                                        return (
                                            <li className='slide' key={idx}>
                                                <div className="img-box">
                                                    <a href="!#" onClick={(e)=>onClickProductList(e,item)}><img src={item.이미지} alt="" /></a>
                                                </div>
                                                <div className="info-box">
                                                    <a href="!#"><h2>{item.상품명}</h2></a>
                                                    <h3>{Math.round(item.정가 * (1 - item.할인율)).toLocaleString('ko-KR')} <span className='price'>{item.할인율 === 0 ? '' : `${item.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{item.할인율 === 0 ? '' : `${item.할인율 * 100}%`}</span></h3>
                                                    <div className="color">
                                                        <span style={{ "background-color": `${item.색상1}`, "border-color": `${item.색상1 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span style={{ "background-color": `${item.색상2}`, "border-color": `${item.색상2 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span style={{ "background-color": `${item.색상3}`, "border-color": `${item.색상3 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span style={{ "background-color": `${item.색상4}`, "border-color": `${item.색상4 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span style={{ "background-color": `${item.색상5}`, "border-color": `${item.색상5 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span style={{ "background-color": `${item.색상6}`, "border-color": `${item.색상6 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span style={{ "background-color": `${item.색상7}`, "border-color": `${item.색상7 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                        <span style={{ "background-color": `${item.색상8}`, "border-color": `${item.색상8 === "" ? "transparent" : "#e6e5e5"}` }}></span>
                                                    </div>
                                                    <p>리뷰 {item.리뷰수}건</p>
                                                    <div className="gender">
                                                        <span>{item.성별}</span>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

