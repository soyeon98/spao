import React from 'react';
import './scss/recent.scss';
import './scss/mypageCategory.scss'
import MypageCategoryComponent from './MypageCategoryComponent';

export default function RecentComponent() {
    return (
        <div id='recentProduct'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>최근 본 상품</h1>
                    </div>
                    <div className="content">
                        <MypageCategoryComponent/>
                        <div className="right">
                            <table>
                                <tr>
                                    <th></th>
                                    <th>상품명</th>
                                    <th>옵션정보</th>
                                    <th>판매가</th>
                                    <th>적립금</th>
                                    <th>주문</th>
                                </tr>
                                <tr>
                                    <td><a href="!#"><img src="./img/mypage/02e2a016b14273735e1b4c108b82d31e.jpg" alt="" /></a></td>
                                    <td><a href="!#">크롭 부클 배색 반팔니트_SPKWD25W14</a></td>
                                    <td>
                                        <span>Size:</span>
                                        <select name="size" id="size">
                                            <option value="">- [필수] 옵션을 선택해 주세요 -</option>
                                            <option value="S(085)">S(085)</option>
                                            <option value="M(090)">M(090)</option>
                                            <option value="L(095)">L(095)</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div className="origin">39,900</div>
                                        <div className="sale">29,900</div>
                                    </td>
                                    <td><span><img src="./img/mypage/ico_product_point.gif" alt="" /></span>299원 (1%)</td>
                                    <td>
                                        <button>담기</button>
                                        <button>주문</button>
                                        <button>삭제</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

