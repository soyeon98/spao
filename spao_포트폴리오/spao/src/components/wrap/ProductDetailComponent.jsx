import React from 'react';

export default function ProductDetailComponent (){
    return (
        <div id='productDetail'>
            <div className="container">
                <div className="gap">
                    <div className="left">
                        <img src="./img/sale/0aec5d653cc529a1df5fd6491b17803c.jpg" alt="" />
                    </div>
                    <div className="right">
                        <div className="product-info">
                            <h2>크롭 폴로카라 반팔티_G_SPHWD24U02</h2>
                            <div className="gender">
                                <span>여성용</span>
                            </div>
                            <div className="price">
                                <h3>25,900</h3>
                                <a href="!#"><img src="./img/detail_sns.png" alt="" /></a>
                            </div>
                            <a href="!#">등급별 쿠폰 적용가<img src="./img/sub/member_icon.svg" alt="" /></a>
                        </div>
                        <div className="gaib">
                            <span>신규가입 혜택</span>
                            <a href="!#">신규 가입 시 웰컴 쿠폰팩 즉시 지급<img src="./img/membership_right_arrow.svg" alt="" /></a>
                        </div>
                        <div className="option-box">
                            <div className="color">
                                <span>Color</span>
                                <div className="color-btn">
                                    <button></button>
                                </div>
                            </div>
                            <div className="size">
                                <span>Size</span>
                                <div className="size-btn">
                                    <button>S(085)</button>
                                    <button>M(090)</button>
                                    <button>L(095)</button>
                                </div>
                            </div>
                            <div className="buy">
                                <div className="col1">
                                    <h3>크롭 폴로카라 반팔티_G_SPHWD24U02</h3>
                                    <p>- M(090)</p>
                                </div>
                                <div className="col2">
                                    <div className="minus"></div>
                                    <input type="text" />
                                    <div className="plus"></div>
                                </div>
                                <div className="col3">
                                    <button><img src="" alt="" /></button>
                                    <p>77,700</p>
                                </div>
                            </div>
                            <div className="btn-box">
                                <button><img src="" alt="" /></button>
                                <button>장바구니</button>
                                <button>바로구매</button>
                            </div>
                            <div className="review">
                                <a href="!#"><img src="./img/sub/EAB3B5ED86B5EC9DB4EBB2A4ED8AB8_EBB2A0EC8AA4ED8AB8EBA6ACEBB7B0.jpg" alt="" /></a>
                            </div>
                            <div className="total">
                                <span>총 상품금액</span>
                                <span>77,700 (1개)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

