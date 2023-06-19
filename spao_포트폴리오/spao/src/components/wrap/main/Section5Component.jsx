import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import './scss/section5.scss';

export default function Section5Component () {

    const [state,setState] = React.useState({
        신상품:[],
        n:0
    });
  

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
                                    state.신상품.map((item, idx) => {
                                        return (
                                            <li className='slide' key={idx}>
                                                <div className="img-box">
                                                    <a href="!#"><img src={item.이미지} alt="" /></a>
                                                </div>
                                                <div className="info-box">
                                                    <a href="!#"><h2>{item.상품명}</h2></a>
                                                    <h3>{item.정가.toLocaleString('ko-KR')}</h3>
                                                    <div className="color-box">
                                                        <span className='color color1' style={{ "backgroundColor": `${item.색상1}` }}></span>
                                                        <span className='color color2' style={{ "backgroundColor": `${item.색상2}` }}></span>
                                                        <span className='color color3' style={{ "backgroundColor": `${item.색상3}` }}></span>
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
                        <div class="page-btn-box">
                            <span><a href="!#" class="page-btn blind on">페이지1</a></span>
                            <span><a href="!#" class="page-btn blind">페이지2</a></span>
                            <span><a href="!#" class="page-btn blind">페이지3</a></span>
                            <span><a href="!#" class="page-btn blind">페이지4</a></span>
                            <span><a href="!#" class="page-btn blind">페이지5</a></span>
                            <span><a href="!#" class="page-btn blind">페이지6</a></span>
                            <span><a href="!#" class="page-btn blind">페이지7</a></span>
                            <span><a href="!#" class="page-btn blind">페이지8</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

