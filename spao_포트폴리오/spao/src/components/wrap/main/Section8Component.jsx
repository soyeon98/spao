import React from 'react';
import './scss/section8.scss';
import axios from 'axios';

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

