import React from 'react';
import './scss/recent.scss';
import './scss/mypageCategory.scss'
import MypageCategoryComponent from './MypageCategoryComponent';

export default function RecentComponent() {

    const [state, setState] = React.useState({
        recentProduct: []
    });

    React.useEffect(() => {
        window.scrollTo(0, 0)
        if (localStorage.getItem('SY_VIEW_PRODUCT') !== null) {
            if (JSON.parse(localStorage.getItem('SY_VIEW_PRODUCT')).length > 8) {
                setState({
                    ...state,
                    recentProduct: JSON.parse(localStorage.getItem('SY_VIEW_PRODUCT')).slice(0, 8)
                })
            }
            else {
                setState({
                    ...state,
                    recentProduct: JSON.parse(localStorage.getItem('SY_VIEW_PRODUCT'))
                })
            }
        }

    }, []);
    
    return (
        <div id='recentProduct'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>최근 본 상품</h1>
                    </div>
                    <div className="content">
                        <MypageCategoryComponent />
                        <div className="right">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>상품명</th>
                                        <th>옵션정보</th>
                                        <th>판매가</th>
                                        <th>적립금</th>
                                        <th>주문</th>
                                    </tr>
                                </thead>
                                {
                                        state.recentProduct.length===0 && 
                                        (
                                            <tr>
                                                <td colSpan={6}>
                                                    <p className='no-product'>최근 본 상품이 없습니다.</p>
                                                </td>
                                            </tr>
                                        )
                                    }
                                <tbody>
                                    {
                                        state.recentProduct &&
                                        state.recentProduct.map((i,idx) => {
                                            return (
                                                <tr>
                                                    <td><a href="!#"><img src={i.이미지} alt="" /></a></td>
                                                    <td><a href="!#">{i.제품명}</a></td>
                                                    <td>
                                                        <span>Size :</span>
                                                        <select name="size" id="size">
                                                            <option value="">- [필수] 옵션을 선택해 주세요 -</option>
                                                            <option value="S(085)">S(085)</option>
                                                            <option value="M(090)">M(090)</option>
                                                            <option value="L(095)">L(095)</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <div className="origin" style={{"display":`${i.정가===i.판매가?"none":"block"}`}}>{i.정가.toLocaleString('ko-KR')}</div>
                                                        <div className="sale">{i.판매가.toLocaleString('ko-KR')}</div>
                                                    </td>
                                                    <td><span className='point'><img src="./img/mypage/ico_product_point.gif" alt="" />{(i.판매가*0.01).toLocaleString('ko-KR')}원 (1%)</span></td>
                                                    <td>
                                                        <button>담기</button>
                                                        <button>주문</button>
                                                        <button>삭제</button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

