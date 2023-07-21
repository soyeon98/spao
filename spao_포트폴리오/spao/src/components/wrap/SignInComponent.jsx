import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default  function SignInComponent () {

    const [state,setState] = React.useState({
        user_id:'',
        user_pw:''
    })

    const onChangeId =(e)=>{
        setState({
            ...state,
            user_id:e.target.value
        })
    }
    const onChangePw =(e)=>{
        setState({
            ...state,
            user_pw:e.target.value
        })
    }

    const onClickSignUp=(e)=>{
        e.preventDefault();
        window.location.href='#/signup';
    }

    const onSubmitSignIn =(e)=>{
        e.preventDefault();
        const formData={
            "user_id":state.user_id,
            "user_pw":state.user_pw
        }
        $.ajax({
            url: 'http://qkrthdus212.cafe24.com/JSP/spao/signin_action.jsp',
            type: 'POST',
            data: formData,
            dataType:'json',
            success(res){
                console.log(res.result);
                if(state.user_id===''){
                    alert('아이디를 입력해주세요');
                }
                else if(state.user_pw===''){
                    alert('비밀번호를 입력해주세요');
                }
                else if(res.result==='1'){
                    alert('로그인되었습니다');
                    sessionStorage.setItem('user_id',state.user_id);
                    window.location.href='#/';
                }
                else if(res.result==='-1'){
                    alert('존재하지 않는 아이디입니다.\n확인 후 다시 시도 해주세요');
                }
                else if(res.result==='0'){
                    alert('존재하지 않는 비밀번호입니다.\n확인 후 다시 시도 해주세요');
                }
       
            },
            error(err){
                console.log('AJAX 실패'+err);
            }
        })
    }
    return (
        <div id='signIn'>
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
                    <form action="" method='post' onSubmit={onSubmitSignIn}>
                        <input type="text" name="user_id" id="userId" placeholder='아이디 입력' onChange={onChangeId}/>
                        <input type="password" name="user_pw" id="userPw" placeholder='비밀번호 입력' onChange={onChangePw}/>
                        <button type='submit'>로그인하기</button>
                    </form>
                    <a href="!#">아이디/비밀번호찾기</a>
                    <div className="gaib">
                        <p>이랜드 통합 멤버십 회원이 아니신가요?</p>
                        <button onClick={onClickSignUp}><img src="./img/main/login_logo_ss.png" alt="" /></button>
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

