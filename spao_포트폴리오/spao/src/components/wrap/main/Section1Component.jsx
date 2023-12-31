import React from 'react';
import './scss/section1.scss';
import $ from 'jquery';

export default function section1Component() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cnt_1, setCnt_1] = React.useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {

        const $slide = $('#section1 .slide');
        const $pageBtn_s1 = $('#section1 .page-btn');
        let cnt = cnt_1;
        let setId = 0;
        let imsi = null;

        function mainNextSlide() {

            $slide.css({ zIndex: 1, opacity: 1 });
            $slide.eq(imsi !== null ? imsi : (cnt === 0 ? 1 : cnt - 1)).css({ zIndex: 2 });
            $slide.eq(cnt).css({ zIndex: 3 }).stop().animate({ opacity: 0 }, 0).animate({ opacity: 1 }, 600);
            pageBtn_s1();
        }
        // 메인 이전슬라이드 함수 : 페이드아웃
        function mainPrevSlide() { // 1 2 0
            console.log(cnt);
            $slide.css({ zIndex: 1, opacity: 1 });
            $slide.eq(cnt).css({ zIndex: 2 });
            $slide.eq(imsi !== null ? imsi : (cnt === 1 ? 0 : cnt + 1)).css({ zIndex: 3 }).stop().animate({ opacity: 1 }, 0).animate({ opacity: 0 }, 600); //현재슬라이드
            pageBtn_s1();
        }
        // 다음 카운트 함수
        function nextCount() {
            cnt++;
            if (cnt > 1) {
                cnt = 0;
            }
            mainNextSlide();
        }
        // 이전 카운트 함수
        function prevCount() {
            cnt--;
            if (cnt < 0) {
                cnt = 1;
            }
            mainPrevSlide();
        }
        // 자동타이머 함수
        function autoTimer() {
            setId = setInterval(nextCount, 5000);
        }
        autoTimer();

        //4-1.다음 화살 버튼 클릭 이벤트
        $('#section1 .next-btn-s1').on({
            click(e) {
                e.preventDefault();
                clearInterval(setId);
                if (!$slide.is(':animated')) {
                    nextCount();
                }
                autoTimer();
            }
        });
        //4-2.이전 화살 버튼 클릭 이벤트
        $('#section1 .prev-btn-s1').on({
            click(e) {
                e.preventDefault();
                clearInterval(setId);
                if (!$slide.is(':animated')) {
                    prevCount();
                }
                autoTimer();
            }
        });

        function pageBtn_s1() {
            $pageBtn_s1.removeClass('on');
            $pageBtn_s1.eq(cnt > 1 ? 0 : cnt).addClass('on');
        }

        //6.페이지버튼 클릭이벤트
        $pageBtn_s1.each(function (idx) {
            $(this).on({
                click(e) {
                    e.preventDefault();
                    clearInterval(setId);
                    if (cnt < idx) {
                        if (Math.abs(idx - cnt) >= 1) {
                            imsi = cnt;
                            cnt = idx;
                        }
                        else {
                            imsi = null;
                            cnt = idx;

                        }
                        mainNextSlide();
                    }
                    else if (cnt > idx) {
                        if (Math.abs(idx - cnt) >= 1) {
                            imsi = cnt;
                            cnt = idx;
                        }
                        else {
                            imsi = null;
                            cnt = idx;
                        }
                        mainPrevSlide();
                    }
                    autoTimer();
                }
            });
        });

        let touchStart = 0;
        let touchEnd = 0;
        let mouseDown = false; 
        let winWidth = $(window).innerWidth();

        $('#section1').on({
            mousedown(e) {
                clearInterval(setId);
                winWidth = $(window).innerWidth();
                touchStart = e.clientX;
                mouseDown = true;
            },
            mouseup(e) {
                touchEnd = e.clientX;

                if (touchStart - touchEnd > 0) {
                    if (!$('#section1 .slide-wrap').is(':animated')) {
                        nextCount();
                    }
                }
                else if (touchStart - touchEnd < 0) {
                    if (!$('#section1 .slide-wrap').is(':animated')) {
                        prevCount();
                    }
                }
                mouseDown = false;
                autoTimer();
            }

        });

    }, [cnt_1]);

    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide1"><img src="./img/main/section1_slide1.jpg" alt="" /></li>
                                <li className="slide slide2"><img src="./img/main/section1_slide2.jpg" alt="" /></li>
                            </ul>
                        </div>
                        <a href="!#" className='prev-btn-s1'><i></i></a>
                        <a href="!#" className='next-btn-s1'><i></i></a>
                        <div className="page-btn-box">
                            <span><a href="!#" className="page-btn blind on">페이지1</a></span>
                            <span><a href="!#" className="page-btn blind">페이지2</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

