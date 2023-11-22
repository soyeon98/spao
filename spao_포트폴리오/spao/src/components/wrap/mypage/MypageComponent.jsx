import React from 'react';
import { Link } from 'react-router-dom';
import './scss/mypageCategory.scss';
import './scss/mypage.scss';
import MypageCategoryComponent from './MypageCategoryComponent';

export default function MypageComponent() {
    return (
        <div id='mypageIntro'>
            <div className="container">
                <div className="gap">
                    <div className="link-box">
                        <ul>
                            <li><Link to="/main">HOME</Link></li>
                            <li>마이페이지</li>
                        </ul>
                    </div>
                    <div className="title">
                        <h3>박소연 님 스파오몰을 이용해 주셔서 감사합니다. </h3>
                        <div className="rank-box">
                            <ul>
                                <li>
                                    <h4>NEW</h4>
                                    <p>다음 등급까지 남은 금액은 1입니다.</p>
                                    <a href="!#">회원 등급별 혜택 보기 <img src="./img/mypage/mypage_icon_arrow.png" alt="" /></a>
                                </li>
                                <li>
                                    <p>총 적립금</p>
                                    <h5>0원</h5>
                                </li>
                                <li>
                                    <p>사용 가능 적립금</p>
                                    <h5>0원</h5>
                                </li>
                                <li>
                                    <p>사용 적립금</p>
                                    <h5>0원</h5>
                                </li>
                                <li>
                                    <p>쿠폰</p>
                                    <h5>0개</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <MypageCategoryComponent/>
                        <div className="right">
                            <div className="up">
                                <div className="up-title">
                                    <p>주문처리 현황 <span>(최근 3개월 기준)</span></p>
                                </div>
                                <div className="up-content">
                                    <ul>
                                        <li>입금대기<br /><span>0</span></li>
                                        <i><img src="./img/mypage/mypage_icon_arrow_big.png" alt="" /></i>
                                        <li>상품준비중<br /><span>0</span></li>
                                        <i><img src="./img/mypage/mypage_icon_arrow_big.png" alt="" /></i>
                                        <li>배송중<br /><span>0</span></li>
                                        <i><img src="./img/mypage/mypage_icon_arrow_big.png" alt="" /></i>
                                        <li>배송완료<br /><span>0</span></li>
                                        <i><img src="./img/mypage/mypage_icon_arrow_big.png" alt="" /></i>
                                        <li>취소/교환/반품<br /><span>0/0/0</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="bottom-title">
                                    <p>최근 주문내역</p>
                                </div>
                                <div className="bottom-content">
                                    <table>
                                        <tr>
                                            <th>주문일자 [주문번호]</th>
                                            <th>상품정보</th>
                                            <th>수량</th>
                                            <th>주문금액</th>
                                            <th>주문상태</th>
                                            <th>취소/교환/반품</th>
                                        </tr>
                                        <tr>
                                            <td colSpan={6}>주문 내역이 없습니다.</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
