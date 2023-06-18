import React from 'react';
import './scss/section3.scss';
import axios from 'axios';
import $ from 'jquery';

export default function Section3Component () {

    const [state,setState] = React.useState({
        신상품:[],
        n:0,
        cnt:0
    });
    const slideWrap = React.useRef();
  

    React.useEffect(()=>{
        axios({
            url:'./data/main_slide/section3.json',
            method:'get'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    신상품:res.data.신상품,
                    n:res.data.신상품.length
                });
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 실패 ${err}`);
        })

        if($('.color3').css({"background":"transparent"})){
            $('.color3').css({"border":"1px solid #fff"});
        }
        
    },[]);


    React.useEffect(()=>{

        const $slideWrap =$('#section3 .slide-wrap');
        const $leftArrowBtn = $('#section3 .prev-btn');
        const $rightArrowBtn = $('#section3 .next-btn');
        let cnt=state.cnt;
        let n=state.n/2
        $slideWrap.css({width:`${25*state.n}%`});
        //1. 메인슬라이드함수
        function mainSlide(){
            $slideWrap.stop().animate({left:`${cnt*-25}%`},600,function(){
                if(cnt > 11) cnt=0;
                if(cnt < 0) cnt=11;
                $slideWrap.stop().animate({left:`${-25*cnt}%`},0);
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

    },[state.n]);





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
                                    state.신상품.map((item,idx)=>{
                                        return(
                                            <li className='slide' key={idx}>
                                            <div className="img-box">
                                                <a href="!#"><img src={item.이미지} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <a href="!#"><h2>{item.상품명}</h2></a>
                                                <h3>{item.정가.toLocaleString('ko-KR')}</h3>
                                                <div className="color-box">
                                                    <span className='color color1' style={{"backgroundColor":`${item.색상1}`}}></span>
                                                    <span className='color color2' style={{"backgroundColor":`${item.색상2}`}}></span>
                                                    <span className='color color3' style={{"backgroundColor":`${item.색상3}`}}></span>
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

