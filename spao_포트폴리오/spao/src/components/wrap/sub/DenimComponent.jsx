import React from 'react';
import './scss/denim.scss';

export default function DenimComponent() {
    return (
        <div id='denim'>
            <div className="container">
                <div className="gap">
                    <div className="link-box">
                        <ul>
                            <li><a href="!#">HOME</a></li>
                            <li>기획전</li>
                            <li>[기획전] 데님 제안서</li>
                        </ul>
                    </div>
                    <div className="title">
                        <h2>[기획전] 데님 제안서</h2>
                    </div>
                    <div className="img-box">
                        <img src="./img/denim/shop1_3180_top_923591.jpg" alt="" />
                        <img src="./img/denim/shop1_3180_top_735197.jpg" alt="" />
                    </div>
                    <div className="slide-container-up">
                        <div className="slide-view-up">
                            <ul className="slide-wrap-up">
                                <li className="slide-review">
                                    <a href="!#"><img src="./img/denim/pc-card_00007.jpg" alt="" /></a>
                                </li>
                                <li className="slide-review">
                                    <a href="!#"><img src="./img/denim/pc-card_00001.jpg" alt="" /></a>
                                </li>
                                <li className="slide-review">
                                    <a href="!#"><img src="./img/denim/pc-card_00002.jpg" alt="" /></a>
                                </li>
                                <li className="slide-review">
                                    <a href="!#"><img src="./img/denim/pc-card_00003.jpg" alt="" /></a>
                                </li>
                                <li className="slide-review">
                                    <a href="!#"><img src="./img/denim/pc-card_00004.jpg" alt="" /></a>
                                </li>
                                <li className="slide-review">
                                    <a href="!#"><img src="./img/denim/pc-card_00005.jpg" alt="" /></a>
                                </li>
                                <li className="slide-review">
                                    <a href="!#"><img src="./img/denim/pc-card_00006.jpg" alt="" /></a>
                                </li>
                                <li className="slide-review">
                                    <a href="!#"><img src="./img/denim/pc-card_00007.jpg" alt="" /></a>
                                </li>
                                <li className="slide-review">
                                    <a href="!#"><img src="./img/denim/pc-card_00001.jpg" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="left-btn-up"><img src="./img/denim/icon_pro_prev.svg" alt="" /></div>
                        <div className="right-btn-up"><img src="./img/denim/icon_pro_next.svg" alt="" /></div>
                        <div className="page-btn-up">
                            <span><a href="!#" class="page-btn blind on">페이지1</a></span>
                            <span><a href="!#" class="page-btn blind">페이지2</a></span>
                            <span><a href="!#" class="page-btn blind">페이지3</a></span>
                            <span><a href="!#" class="page-btn blind">페이지4</a></span>
                            <span><a href="!#" class="page-btn blind">페이지5</a></span>
                            <span><a href="!#" class="page-btn blind">페이지6</a></span>
                            <span><a href="!#" class="page-btn blind">페이지7</a></span>
                        </div>
                    </div>
                    <div className="slide-container-down">
                        <div className="slide-view-down">
                            <ul className="slide-wrap-down">
                                <li className="slide-guide">
                                    <a href="!#"><img src="./img/denim/pc-card2_002.jpg" alt="" /></a>
                                </li>
                                <li className="slide-guide">
                                    <a href="!#"><img src="./img/denim/pc-card2_001.jpg" alt="" /></a>
                                </li>
                                <li className="slide-guide">
                                    <a href="!#"><img src="./img/denim/pc-card2_002.jpg" alt="" /></a>
                                </li>
                                <li className="slide-guide">
                                    <a href="!#"><img src="./img/denim/pc-card2_001.jpg" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="left-btn-down"><img src="./img/denim/icon_pro_prev.svg" alt="" /></div>
                        <div className="right-btn-down"><img src="./img/denim/icon_pro_next.svg" alt="" /></div>
                        <div className="page-btn-down">
                            <span><a href="!#" class="page-btn blind on">페이지1</a></span>
                            <span><a href="!#" class="page-btn blind">페이지2</a></span>
                        </div>
                    </div>
                    <div className="cate-box">
                        <ul>
                            <li><a href="!#">MEN</a></li>
                            <li><a href="!#">WOMEN</a></li>
                            <li><a href="!#">KID</a></li>
                        </ul>
                    </div>
                    <div className="product-box">
                <div className="row row1">
                    <div className="cate">
                        <h3>MEN</h3>
                    </div>
                    <div className="product">
                        {/* <ul>
                        {
                            state.setSale.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href="!#">
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

                    </ul> */}
                    </div>
                </div>
                <div className="row row1">
                    <div className="cate">
                        <h3>WOMEN</h3>
                    </div>
                    <div className="product">
                        {/* <ul>
                        {
                            state.setSale.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href="!#">
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

                    </ul> */}
                    </div>
                </div>
                <div className="row row1">
                    <div className="cate">
                        <h3>KID</h3>
                    </div>
                    <div className="product">
                        {/* <ul>
                        {
                            state.setSale.map((i, idx) => {
                                return (
                                    <li key={i.제품코드}>
                                        <div className="img-box">
                                            <a href="!#">
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

                    </ul> */}
                    </div>
                </div>

            </div>
                </div>
            </div>


        </div>
    );
};

