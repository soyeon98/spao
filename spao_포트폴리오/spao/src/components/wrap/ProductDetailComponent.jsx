import React from 'react';

export default function ProductDetailComponent ({setViewProduct}){


    const [state,setState]=React.useState({
        product:{},
        cnt:1
    });
    const {product} =state;

    React.useEffect(()=>{
        
        window.scrollTo(0,0);
      
        if(localStorage.getItem('SY_VIEW_PRODUCT')!==null){
            let result =JSON.parse(localStorage.getItem('SY_VIEW_PRODUCT'));
            setState({
                ...state,
                product:result[0]

            })
        }
       
    },[])

    const onChangeNum =(e)=>{
        let cnt = e.target.value;
        setState({
            ...state,
            cnt:cnt
        })
    }

    const onClickPlus = ()=>{
        let cnt=state.cnt;
        cnt++;
        setState({
            ...state,
            cnt:cnt
        })
    }
    const onClickMinus = ()=>{
        let cnt=state.cnt;
        if(cnt===1){
            cnt=1;
        }
        else{
            cnt--;
        }
        
        setState({
            ...state,
            cnt:cnt
        })
    }


    // React.useState(()=>{

    //     reset();
    //     const data = JSON.parse(localStorage.getItem('sale_women'));
        
    //     for(let i=0; i<Object.keys(data).length; i++){

    //         for(let j=0; j<data[Object.keys(data)[i]].length; j++){
            
    //             if(data[Object.keys(data)[i]][j].제품코드 === id){
    //                 setState({
    //                     ...state,
    //                     product : data[Object.keys(data)[i]][j]
    //                 })
    //             }
    //         }
       
    //     }
    //   },[]);

    return (
        <div id='productDetailWomen' className='productDetail'>
            <div className="container">
                <div className="gap">
                    <div className="left">
                        <img src={product.이미지} alt="" />
                    </div>
                    <div className="right">
                        <div className="product-info">
                            <h2>{product.제품명}</h2>
                            <div className="gender">
                                <span>{product.성별}</span>
                            </div>
                            <div className="price">
                                <h3>{Number(product.판매가).toLocaleString('ko-KR')} <span className='origin'  style={{"display":`${product.할인율===0?"none":"inline"}`}}>{Number(product.정가).toLocaleString('ko-KR')}</span><span className='sale' style={{"display":`${product.할인율===0?"none":"inline"}`}}>{product.할인율}%</span></h3>
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
                                    <button style={{"background":`${product.색상1}`,"border-color":`${product.색상1===''?"transparent":"#e6e5e5"}`}} className='blind' >색상1</button>
                                    <button style={{"background":`${product.색상2}`,"border-color":`${product.색상2===''?"transparent":"#e6e5e5"}`}} className='blind' >색상2</button>
                                    <button style={{"background":`${product.색상3}`,"border-color":`${product.색상3===''?"transparent":"#e6e5e5"}`}} className='blind' >색상3</button>
                                    <button style={{"background":`${product.색상4}`,"border-color":`${product.색상4===''?"transparent":"#e6e5e5"}`}} className='blind' >색상4</button>
                                    <button style={{"background":`${product.색상5}`,"border-color":`${product.색상5===''?"transparent":"#e6e5e5"}`}} className='blind' >색상5</button>
                                    <button style={{"background":`${product.색상6}`,"border-color":`${product.색상6===''?"transparent":"#e6e5e5"}`}} className='blind' >색상6</button>
                                    <button style={{"background":`${product.색상7}`,"border-color":`${product.색상7===''?"transparent":"#e6e5e5"}`}} className='blind' >색상7</button>
                                    <button style={{"background":`${product.색상8}`,"border-color":`${product.색상8===''?"transparent":"#e6e5e5"}`}} className='blind' >색상8</button>
                                </div>
                                <p>[필수] 옵션을 선택해 주세요</p>
                            </div>
                            <div className="size">
                                <span>Size</span>
                                <div className="size-btn">
                                    <button>S(085)</button>
                                    <button>M(090)</button>
                                    <button>L(095)</button>
                                </div>
                                <p>[필수] 옵션을 선택해 주세요</p>
                            </div>
                        </div>
                        <div className="buy">
                                <div className="col1">
                                    <h3>{product.제품명}</h3>
                                    <p>- M(090)</p>
                                </div>
                                <div className="col2">
                                    <div className="count">
                                        <button className="minus" onClick={onClickMinus}>-</button>
                                        <input type="text" onChange={onChangeNum} value={state.cnt}/>
                                        <button className="plus" onClick={onClickPlus}>+</button>
                                    </div>
                                </div>
                                <div className="col3">
                                    <button><img src="./img/main/btn_price_delete.gif" alt="" /></button>
                                    <p>{Number(product.판매가).toLocaleString('ko-KR')}</p>
                                </div>
                            </div>
                            <div className="find-size">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" class="svg-inline fit-widget-icon-top"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.58757 5.5C4.26846 5.5 2.32914 7.26247 2.10806 9.57103L1.53991 15.5039L5.25002 16.3251V12.9375C5.25002 12.6614 5.47388 12.4375 5.75002 12.4375C6.02617 12.4375 6.25002 12.6614 6.25002 12.9375V30H19.25V12.9375C19.25 12.6614 19.4739 12.4375 19.75 12.4375C20.0262 12.4375 20.25 12.6614 20.25 12.9375V16.3999L24.4467 15.3787L23.6765 9.42287C23.3864 7.17938 21.4758 5.5 19.2137 5.5H17.9883C17.8091 7.88564 15.5924 9.6875 13 9.6875C10.4076 9.6875 8.19094 7.88564 8.01171 5.5H6.58757ZM9.01607 5.5C9.19554 7.2429 10.8606 8.6875 13 8.6875C15.1395 8.6875 16.8045 7.2429 16.984 5.5H9.01607ZM0.891974 16.3847L5.25002 17.3493V30.5C5.25002 30.7761 5.47388 31 5.75002 31H19.75C20.0262 31 20.25 30.7761 20.25 30.5V17.4291L25.1182 16.2444C25.3659 16.1842 25.5286 15.9473 25.4959 15.6945L24.6683 9.29461C24.3137 6.55258 21.9786 4.5 19.2137 4.5H6.58757C3.7531 4.5 1.38282 6.65413 1.11262 9.4757L0.502302 15.8489C0.478227 16.1003 0.645397 16.3302 0.891974 16.3847Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31 4.375L31.3 4.6L35.3 7.6L34.7 8.4L31.5 6V30L34.7 27.6L35.3 28.4L31.3 31.4L31 31.625L30.7 31.4L26.7 28.4L27.3 27.6L30.5 30V6L27.3 8.4L26.7 7.6L30.7 4.6L31 4.375Z"></path></svg>
                                고객님 사이즈를 찾아보세요!
                            </div>
                            <div className="btn-box">
                                <button className='heart'><img src="./img/main/detail_wish.png" alt="" /></button>
                                <button className='cart'>장바구니</button>
                                <button className='now'>바로구매</button>
                            </div>
                            <div className="stock">
                                오프라인 매장 재고 조회
                            </div>
                            <div className="review">
                                <a href="!#"><img src="./img/sub/EAB3B5ED86B5EC9DB4EBB2A4ED8AB8_EBB2A0EC8AA4ED8AB8EBA6ACEBB7B0.jpg" alt="" /></a>
                            </div>
                            <div className="total">
                                <span>총 상품금액</span>
                                <p><span>{Number(product.판매가).toLocaleString('ko-KR')}</span> (1개)</p>
                            </div>
                            <div className="view">
                                <ul>
                                    <li><a href="!#">사이즈정보 *  상품정보 제공공시</a></li>
                                    <li><a href="!#">배송안내</a></li>
                                    <li><a href="!#">취소/반품/교환/환불 안내</a></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

