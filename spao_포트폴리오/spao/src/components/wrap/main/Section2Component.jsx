import React from 'react';
import $ from 'jquery'
import './scss/section2.scss';
import axios from 'axios';

export default function Section2Component () {

    const [state, setState] = React.useState({
        우먼: [],
        맨:[],
        키즈:[],
        파자마:[]
    });
    const [isWoman,setIsWoman] = React.useState(true);
    const [isMan,setIsMan] = React.useState(false);
    const [isKids,setIsKids] = React.useState(false);
    const [isPazama,setIsPazama] = React.useState(false);

    React.useEffect(() => {
        axios({
            url: './data/main_slide/section2.json',
            method: 'get'
        })
            .then((res) => {
                if (res.status === 200) {
                    setState({
                        ...state,
                        우먼: res.data.우먼,
                        맨:res.data.맨,
                        키즈:res.data.키즈,
                        파자마:res.data.파자마
                    });
                    console.log(res.data.키즈);
                }
            })
            .catch((err) => {
                console.log(`AXIOS 실패 ${err}`);
            })

    }, []);

    const onClickNav = (e,value) =>{
        e.preventDefault();
        if(value==='우먼'){
            $('.1').addClass('on');
            $('.2').removeClass('on');
            $('.3').removeClass('on');
            $('.4').removeClass('on');
            setIsWoman(true);
            setIsMan(false);
            setIsKids(false);
            setIsPazama(false);
        }
        else if(value==='맨'){
            $('.2').addClass('on');
            $('.1').removeClass('on');
            $('.3').removeClass('on');
            $('.4').removeClass('on');
            setIsWoman(false);
            setIsMan(true);
            setIsKids(false);
            setIsPazama(false);
        }
        else if(value==='키즈'){
            $('.3').addClass('on');
            $('.1').removeClass('on');
            $('.2').removeClass('on');
            $('.4').removeClass('on');
            setIsWoman(false);
            setIsMan(false);
            setIsKids(true);
            setIsPazama(false);
        }
        else if(value==='파자마'){
            $('.4').addClass('on');
            $('.1').removeClass('on');
            $('.2').removeClass('on');
            $('.3').removeClass('on');
            setIsWoman(false);
            setIsMan(false);
            setIsKids(false);
            setIsPazama(true);
        }
    }


    return (
        <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>위클리 베스트</h2>
                    </div>
                    <div className="content">
                        <div className="nav-box">
                            <ul>
                                <li><button className='1 on' onClick={(e)=>onClickNav(e,'우먼')}>우먼</button></li>
                                <li><button className='2' onClick={(e)=>onClickNav(e,'맨')}>맨</button></li>
                                <li><button className='3' onClick={(e)=>onClickNav(e,'키즈')}>키즈</button></li>
                                <li><button className='4' onClick={(e)=>onClickNav(e,'파자마')}>파자마</button></li>
                            </ul>
                        </div>
                        <div className="best-product">
                            <ul>
                                {
                                    isWoman && (
                                        state.우먼.map((i, idx) => {
                                            return (
                                                <li className='slide'>
                                                    <div className="img-box">
                                                        <a href="!#">
                                                            <div className="img">
                                                                <img src={`./img/main/${i.이미지}`} alt="" /><div className="num" style={{ "background-color": `${idx > 3 ? "#b5b5b5" : "#e86434"}` }}>{idx + 1}</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="info-box">
                                                        <a href="!#"><h2>{i.제품명}</h2></a>
                                                        <h3>{i.판매가.toLocaleString('ko-KR')} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율 * 100}%`}</span></h3>
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
                                    )
                                }
                                {
                                    isMan && (
                                        state.맨.map((i, idx) => {
                                            return (
                                                <li>
                                                    <div className="img-box">
                                                        <a href="!#">
                                                            <div className="img">
                                                                <img src={`./img/main/${i.이미지}`} alt="" /><div className="num" style={{ "background-color": `${idx > 3 ? "#b5b5b5" : "#e86434"}` }}>{idx + 1}</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="info-box">
                                                        <a href="!#"><h2>{i.제품명}</h2></a>
                                                        <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율 * 100}%`}</span></h3>
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
                                    )
                                }
                                {
                                    isKids && (
                                        state.키즈.map((i, idx) => {
                                            return (
                                                <li>
                                                    <div className="img-box">
                                                        <a href="!#">
                                                            <div className="img">
                                                                <img src={`./img/main/${i.이미지}`} alt="" /><div className="num" style={{ "background-color": `${idx > 3 ? "#b5b5b5" : "#e86434"}` }}>{idx + 1}</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="info-box">
                                                        <a href="!#"><h2>{i.제품명}</h2></a>
                                                        <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율 * 100}%`}</span></h3>
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
                                                            <span style={{"display":"none"}}></span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    )
                                }
                                {
                                    isPazama && (
                                        state.파자마.map((i, idx) => {
                                            return (
                                                <li>
                                                    <div className="img-box">
                                                        <a href="!#">
                                                            <div className="img">
                                                                <img src={`./img/main/${i.이미지}`} alt="" /><div className="num" style={{ "background-color": `${idx > 3 ? "#b5b5b5" : "#e86434"}` }}>{idx + 1}</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="info-box">
                                                        <a href="!#"><h2>{i.제품명}</h2></a>
                                                        <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율 * 100}%`}</span></h3>
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
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

