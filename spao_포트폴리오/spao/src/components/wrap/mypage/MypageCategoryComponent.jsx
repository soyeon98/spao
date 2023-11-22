import React from 'react';
import { Link } from 'react-router-dom';

export default function MypageCategoryComponent () {
    return (
        <div id="category">
            <div className="up">
                <h3>마이페이지</h3>
            </div>
            <div className="bottom">
                <ul>
                    <li>나의 쇼핑 정보</li>
                    <li><a href="!#">주문/배송</a></li>
                    <li><a href="!#">취소/반품</a></li>
                </ul>
                <ul>
                    <li>나의 혜택 정보</li>
                    <li><a href="!#">적립금</a></li>
                    <li><a href="!#">쿠폰</a></li>
                    <li><a href="!#">혜택보기</a></li>
                </ul>
                <ul>
                    <li>나의 활동 정보</li>
                    <li><a href="!#">회원정보 수정</a></li>
                    <li><a href="!#">배송 주소록 관리</a></li>
                    <li><a href="!#">나의 게시물 관리</a></li>
                    <li><a href="!#">나의 문의</a></li>
                    <li><a href="!#">위시리스트</a></li>
                    <li><Link to="/recent">최근 본 상품</Link></li>
                    <li><a href="!#">스냅 좋아요</a></li>
                    <li><a href="!#">회원탈퇴</a></li>
                </ul>
            </div>
        </div>
    );
};

