import React from 'react';
import './scss/section8.scss';
import axios from 'axios';
import $ from 'jquery';

export default function Section8Component () {

    const [state,setState] = React.useState({
        스냅:[],
        n:0
    });
   
    React.useEffect(()=>{
        axios({
            url:'./data/main_slide/section8.json',
            method:'get'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    스냅:res.data.스냅,
                    n:res.data.스냅.length
                });
                console.log(state.스냅);
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 실패 ${err}`);
        })
        
    },[state.n]);

    React.useEffect(() => {

        const $slideWrap = $('#section8 .slide-wrap');
        const $leftArrowBtn = $('#section8 .prev-btn-s8');
        const $rightArrowBtn = $('#section8 .next-btn-s8');
        let cnt = 0;
        let setId = 0;

        $slideWrap.css({ width: `${20 * state.n}%` });
        //1. 메인슬라이드함수
        function mainSlide() {
            $slideWrap.stop().animate({ left: `${cnt * -20}%` }, 600, function () {
                if (cnt > 9) cnt = 0;
                if (cnt < 0) cnt = 9;
                $slideWrap.stop().animate({ left: `${-20 * cnt}%` }, 0);
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

    return (
        <section id="section8">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>스냅</h2>
                    </div>
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                {
                                    state.스냅.map((item,idx)=>{
                                        return(
                                            <li className='slide' key={idx}>
                                            <a href="!#">
                                                <div className="bg8-box">
                                                    <img src={`${item.이미지}`} alt="" />
                                                </div>
                                                <div className="txt-box">
                                                    <div className="tag">{item.태그}</div>
                                                    <div className="bt-name">
                                                        <p className='row1'>{item.제품명}<span></span></p>
                                                        <p className='row2'><span></span>{item.사용자}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="prev-btn-s8"><a href="!#"><img src="./img/main/left-arrow.png" alt="" /></a></div>
                        <div className="next-btn-s8"><a href="!#"><img src="./img/main/right-arrow.png" alt="" /></a></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

