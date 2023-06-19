import React from 'react';
import './scss/section7.scss';
import axios from 'axios';
import $ from 'jquery';

export default function Section7Component ()  {

    const [state,setState] = React.useState({
        룩북:[],
        n:0
    });
   
    React.useEffect(()=>{
        axios({
            url:'./data/main_slide/section7.json',
            method:'get'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    룩북:res.data.룩북,
                    n:res.data.룩북.length
                });
                console.log(res.data);
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 실패 ${err}`);
        })
        
    },[]);

    React.useEffect(()=>{
        const $slideWrap =$('#section7 .slide-wrap');
        const $leftArrowBtn = $('#section7 .prev-btn');
        const $rightArrowBtn = $('#section7 .next-btn');
        let n=state.n;
        let cnt=0;

        $slideWrap.css({width:`${770*state.n}px`});
                //1. 메인슬라이드함수
                function mainSlide(){
                    $slideWrap.stop().animate({left:`${cnt*-770}px`},600,function(){
                        if(cnt > 8) cnt=0;
                        if(cnt < 0) cnt=8;
                        $slideWrap.stop().animate({left:`${-770*cnt}px`},0);
                    });
                }
                //2-1. 다음 카운트 함수
                function nextCount(){
                    if(!$slideWrap.is(':animated')){
                        cnt++;            
                        mainSlide();
                    }
                }
                //2-2. 이전 카운트 함수
                function prevCount(){
                    if(!$slideWrap.is(':animated')){
                        cnt--;            
                        mainSlide();
                    }
                }
                //3. 다음 화살버튼 클릭 이벤트
                $leftArrowBtn.on({
                    click(e){
                        e.preventDefault();
                        prevCount();
                    }
                });
                $rightArrowBtn.on({
                    click(e){
                        e.preventDefault();
                        nextCount();
                    }
                });
    });

    return (
        <section id="section7">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>룩북</h2>
                    </div>
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                {
                                    state.룩북.map((item, idx) => {
                                        return (
                                            <li className="slide" key={idx} data-key={idx + 1}>
                                                <div className="box">
                                                    <div className="txt-box">
                                                        <div className="summary">{item.이미지설명}</div>
                                                        <div className="name">{item.이름}</div>
                                                    </div>
                                                    <div className="img-box">
                                                        <img src={item.이미지} alt="" />
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

