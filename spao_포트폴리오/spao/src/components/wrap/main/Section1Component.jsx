import React from 'react';
import './scss/section1.scss';
import $ from 'jquery';

export default function section1Component () {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cnt_1,setCnt_1] =React.useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(()=>{

        const $slide= $('#section1 .slide');
        const $pageBtn= $('#section1 .page-btn');
        let cnt = cnt_1;
        let setId = 0;
        let imsi = null;

        function mainNextSlide(){
                   
            $slide.css({zIndex:1,opacity:1});
            $slide.eq(imsi!==null?imsi:(cnt===0?1:cnt-1)).css({zIndex:2});
            $slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},600);
            pageBtn();
        }
        //1-2 메인 이전슬라이드 함수 : 페이드아웃
        function mainPrevSlide(){ // 1 2 0
            console.log(cnt);
            $slide.css({zIndex:1,opacity:1});
            $slide.eq(cnt).css({zIndex:2});
             $slide.eq(imsi!==null?imsi:(cnt===1?0:cnt+1)).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},600); //현재슬라이드
             pageBtn();
        }
        // 2-1. 다음 카운트 함수
        function nextCount(){
            cnt++;
            if (cnt>1){ 
                cnt=0; 
            }
            mainNextSlide(); 
        }
        // 2-2. 이전 카운트 함수
        function prevCount(){
            cnt--;
            if (cnt<0){
                cnt=1; 
            }
            mainPrevSlide(); 
        }
        // 3.자동타이머 함수
        function autoTimer(){
        setId=setInterval(nextCount, 5000); 

        }  
        autoTimer();

          //4-1.다음 화살 버튼 클릭 이벤트
          $('.next-btn-s1').on({
            click(e){
                e.preventDefault();
                if(!$slide.is(':animated')){
                    nextCount();
                    clearInterval(setId);
                }
                autoTimer();
            }
        });
          //4-2.이전 화살 버튼 클릭 이벤트
          $('.prev-btn-s1').on({
            click(e){
                e.preventDefault();
                if(!$slide.is(':animated')){
                    prevCount();
                    clearInterval(setId);
                }
                autoTimer();
            }
        });

        function pageBtn(){
            $pageBtn.removeClass('on');
            $pageBtn.eq(cnt > 1?0:cnt).addClass('on');
        }

        //6.페이지버튼 클릭이벤트
        $pageBtn.each(function(idx){
            $(this).on({
                click(e){
                    e.preventDefault();
                    clearInterval(setId);                        
                    if(cnt<idx){
                        if(Math.abs(idx-cnt)>=1){
                            imsi=cnt;
                            cnt=idx;
                        }
                        else{
                            imsi=null;
                            cnt=idx;
                            
                        }
                        mainNextSlide();
                    }
                    if(cnt>idx){
                        if(Math.abs(idx-cnt)>=1){
                            imsi=cnt;
                            cnt=idx;
                        }
                        else{
                            imsi=null;
                            cnt=idx;                               
                        }
                        mainPrevSlide();
                    }
                    autoTimer();
                }
            });
        });

        let touchStart = 0;
        let touchEnd = 0;
        let mouseDown = false; //마우스다운하면 true 아니면 false
        let dragStart = 0;
        let dragEnd = 0;
        let winWidth = $(window).innerWidth();

        //데스크 용-마우스로
        $('#section1').on({
            mousedown(e) {
                winWidth = $(window).innerWidth();
                touchStart = e.clientX;
                dragStart = e.clientX - $('.slide-wrap').offset().left - winWidth;
                mouseDown = true;
                clearInterval(setId);
            },
            mouseup(e) {
                touchEnd = e.clientX;

                if (touchStart - touchEnd > 0) {
                    if (!$('.slide-wrap').is(':animated')) {
                        nextCount();
                    }
                }
                if (touchStart - touchEnd < 0) {
                    if (!$('.slide-wrap').is(':animated')) {
                        prevCount();
                    }
                }
                mouseDown = false;
                autoTimer();
            }

        });

    },[cnt_1]);

    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide1"><img src="./img/main/section1_slide1.jpg" alt="" /></li>
                                <li className="slide slide2"><img src="./img/main/section1_slide2.jpg"  alt="" /></li>
                            </ul>
                        </div>
                        <a href="!#" className='prev-btn-s1'><i></i></a>
                        <a href="!#" className='next-btn-s1'><i></i></a>
                        <div class="page-btn-box">
                            <span><a href="!#" class="page-btn blind on">페이지1</a></span>
                            <span><a href="!#" class="page-btn blind">페이지2</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

