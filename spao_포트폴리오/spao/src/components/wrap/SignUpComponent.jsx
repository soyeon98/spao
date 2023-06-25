import React from 'react';
import { Link } from 'react-router-dom';

export default  function SignUpComponent () {
    return (
        <div id='signUp'>
            <div className="container">
                <div className="gap">
                    <div className="link-box">
                        <ul>
                            <li><Link to="/'main">HOME</Link></li>
                            <li>로그인</li>
                        </ul>
                    </div>
                    <div className="title">
                        <h1>로그인</h1>
                    </div>
                    <div className="eland">
                        <img src="./img/main/login_logo.png" alt="" />
                        <p>이랜드의 새로운 통합 멤버십 <br />이멤버와 함께 이로운 생활을 시작하세요!</p>
                    </div>
                    <form action="">
                        <input type="text" name="user_id" id="userId" placeholder='아이디 입력'/>
                        <input type="password" name="user_pw" id="userPw" placeholder='비밀번호 입력'/>
                        <button type='submit'>로그인하기</button>
                    </form>
                    <a href="!#">아이디/비밀번호찾기</a>
                    <div className="gaib">
                        <p>이랜드 통합 멤버십 회원이 아니신가요?</p>
                        <button><img src="./img/main/login_logo_ss.png" alt="" /></button>
                    </div>
                    <div className="sns">
                        <ul>
                            <li><a href="!#"><img src="./img/main/sns_kako.png" alt="" /></a></li>
                            <li><a href="!#"><img src="./img/main/sns_naver.png" alt="" /></a></li>
                            <li><a href="!#"><img src="./img/main/sns_facebook.png" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

