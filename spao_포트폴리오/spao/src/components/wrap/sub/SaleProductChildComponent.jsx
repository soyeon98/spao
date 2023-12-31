import React from 'react';
import axios from 'axios';
import {a} from 'react-router-dom'

export default function SaleProductChildComponent({setViewProduct}) {

    const [state, setState] = React.useState({
        setSale: [],
        summer: [],
        coolJean: [],
        pazama: [],
        shirt: [],
        pants: [],
        setUp: [],
        knit: [],
        skirt: [],
        outer: [],
        푸퍼: []
    });
    

    const getProduct=()=> {
        axios({
            url: './data/sub/sale_women.json',
            method: 'get'
        })
            .then((res) => {
                if (res.status === 200) {
                    setState({
                        setSale: res.data.setSale,
                        summer: res.data.summer,
                        coolJean: res.data.coolJean,
                        pazama: res.data.pazama,
                        shirt: res.data.shirt,
                        pants: res.data.pants,
                        setUp: res.data.setUp,
                        knit: res.data.knit,
                        skirt: res.data.skirt,
                        outer: res.data.outer,
                        푸퍼: res.data.푸퍼
                    })
                }
            })
            .catch((err) => {
                console.log(`AXIOS 실패 ${err}`);
            })
    }

    React.useEffect(()=>{
        getProduct();
      },[state]);

      const onClickProductList = (e, item) => {
        e.preventDefault();
        let obj = {
            제품코드: item.제품코드,
            이미지: `./img/sale/${item.이미지}`,
            제품명: item.제품명,
            성별: item.성별,
            판매가: item.판매가,
            할인율: item.할인율,
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
        <div className="product-box">
            <div className="row row1">
                <div className="cate">
                    <h3>[세트할인] 2장 구매시 5,000원 할인</h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.setSale.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                                                <span className='set-sale'>2장구매시할인</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
            <div className="row row2">
                <div className="cate">
                    <h3>[여름 추천 상품] </h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.summer.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                        }

                    </ul>
                </div>
            </div>
            <div className="row row3">
                <div className="cate">
                    <h3>[쿨 진]</h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.coolJean.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                        }

                    </ul>
                </div>
            </div>
            <div className="row row4">
                <div className="cate">
                    <h3>파자마</h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.pazama.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                        }

                    </ul>
                </div>
            </div>
            <div className="row row5">
                <div className="cate">
                    <h3>셔츠/티셔츠 </h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.shirt.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                        }

                    </ul>
                </div>
            </div>
            <div className="row row6">
                <div className="cate">
                    <h3>슬랙스</h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.pants.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                        }

                    </ul>
                </div>
            </div>
            <div className="row row7">
                <div className="cate">
                    <h3>스웨트 셋업</h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.setUp.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                        }

                    </ul>
                </div>
            </div>
            <div className="row row8">
                <div className="cate">
                    <h3>니트/가디건 </h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.knit.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                        }

                    </ul>
                </div>
            </div>
            <div className="row row9">
                <div className="cate">
                    <h3>스커트/원피스 </h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.skirt.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                        }

                    </ul>
                </div>
            </div>
            <div className="row row10">
                <div className="cate">
                    <h3>아우터</h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.outer.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                        }

                    </ul>
                </div>
            </div>
            <div className="row row11">
                <div className="cate">
                    <h3>푸퍼</h3>
                </div>
                <div className="product">
                    <ul>
                        {
                            state.푸퍼.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href='!#' onClick={(e)=>onClickProductList(e,i)}>
                                                <div className="img">
                                                    <img src={`./img/sale/${i.이미지}`} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="info-box">
                                            <a href="!#"><h2>{i.제품명}</h2></a>
                                            <h3>{i.판매가} <span className='price'>{i.할인율 === 0 ? '' : `${i.정가.toLocaleString('ko-KR')}`}</span> <span className='rate'>{i.할인율 === 0 ? '' : `${i.할인율}%`}</span></h3>
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
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

