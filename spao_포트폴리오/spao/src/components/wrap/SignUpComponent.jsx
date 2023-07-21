import React from 'react';
import $ from 'jquery';
import PostCode from 'react-daum-postcode';

export default function SignUpComponent() {

    const [state, setState] = React.useState({
        user_name: '',
        user_id: '',
        isIdErr: true,
        user_pw: '',
        isPwErr: true,
        user_pw2: '',
        isPw2Err: true,
        user_birth_year: '',
        user_birth_month: '',
        user_birth_date: '',
        user_hp1: '010',
        user_hp2: '',
        isHp2Err: true,
        user_hp3: '',
        isHp3Err: true,
        user_addr1: '',
        user_addr2: '',
        user_email: '',
        isDomainErr:true,
        user_domain: '',
        user_domain_op: '',
        user_receive1: '이메일수신',
        user_receive2: '문자수신',
        user_receive3: 'DM수신',
        user_receive4: '모바일수신',
        isPost: false
    });
    const onClickMain = (e) => {
        e.preventDefault();
        window.location.href = "#/main";
    }

    const onChangeName = (e) => {
  
        const { value } = e.target;
        const regExp = /[^가-힣ㄱ-ㅎㅏ-ㅣA-Za-z]/g;
        let user_name = "";

        user_name = value.replace(regExp, "");
        setState({
            ...state,
            user_name: user_name
        })
    }
    const onChangeId = (e) => {
        const { value } = e.target;
        const regExp1 = /([가-힣ㄱ-ㅎㅏ-ㅣ])|(\s)|([~`!#$%^&*()=+\\|[\]{};:'",<>/?@.\-_])/g;
        let user_id = '';

        user_id = value.replace(regExp1, '');

        setState({
            ...state,
            user_id: user_id
        })
    }
    const onChangePw = (e) => {
        const { value } = e.target;
        let user_pw = ''
        let isPwErr = true;
        const regExp1 = /([가-힣ㄱ-ㅎㅏ-ㅣ])|(\s)/g;
        const regExp2 = /([~`!#$%^&*()=+\\|[\]{};:'",<>/?@.\-_]+[A-Za-z]+)+|([A-Za-z]+[~`!#$%^&*()=+\\|[\]{};:'",<>/?@.\-_]+)+|([0-9]+[~`!#$%^&*()=+\\|[\]{};:'",<>/?@.\-_]+)+|([~`!#$%^&*()=+\\|[\]{};:'",<>/?@.\-_]+[0-9]+)/g;
        user_pw = value.replace(regExp1, '');
        if (regExp2.test(value) === true) {
            isPwErr = false;
        }
        setState({
            ...state,
            user_pw:user_pw,
            isPwErr: isPwErr
        })
    }
    const onChangePw2 = (e) => {
        const { value } = e.target;
        let isPw2Err = true;
        if (value !== state.user_pw) {
            isPw2Err = true;
        }
        else if (value === state.user_pw) {
            isPw2Err = false;
        }
        setState({
            ...state,
            user_pw2: value,
            isPw2Err:isPw2Err
        })
    }
    const onChangeYear = (e) => {
        setState({
            ...state,
            user_birth_year: e.target.value
        })
    }
    const onChangeMonth = (e) => {
        setState({
            ...state,
            user_birth_month: e.target.value
        })
    }
    const onChangeDate = (e) => {
        setState({
            ...state,
            user_birth_date: e.target.value
        })
    }
    const onChangeHp1 = (e) => {
        setState({
            ...state,
            user_hp1: e.target.value
        })
    }
    const onChangeHp2 = (e) => {
        const { value } = e.target;
        const regExp = /.{3,4}/g;
        const regExp1 = /[^\d]/g;
        let user_hp2 = '';
        let isHp2Err = true;
        user_hp2 = value.replace(regExp1, '');
        if(regExp.test(value)===true){
            isHp2Err=false;
        }

        setState({
            ...state,
            user_hp2: user_hp2,
            isHp2Err:isHp2Err
        })
    }
    const onChangeHp3 = (e) => {
        const { value } = e.target;
        const regExp1 = /[^\d]/g;
        let user_hp3 = '';
        let isHp3Err = true;

        user_hp3 = value.replace(regExp1, '');
        if(value.length===4){
            isHp3Err = false;
        }
        setState({
            ...state,
            user_hp3: user_hp3,
            isHp3Err:isHp3Err
        })
    }
    const onChangeAddr1 = (e) => {
        setState({
            ...state,
            user_addr1: e.target.value
        })
    }
    const onChangeAddr2 = (e) => {
        setState({
            ...state,
            user_addr2: e.target.value
        })
    }
    const onChangeEmail = (e) => {
        const { value } = e.target;
        const regExp=/[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        let user_email = '';
        user_email = value.replace(regExp, "");
        setState({
            ...state,
            user_email:user_email
        })
    }
    const onChangeDomain = (e) => {
        const { value } = e.target;
        const regExp1=/^[a-z0-9.\-_]+\.[a-z]{2,5}$/gi;
        const regExp2=/[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        let user_domain = '';
        let isDomainErr=true;
        user_domain = value.replace(regExp2, "");
        if(regExp1.test(value)===true){
            isDomainErr=false;
        }

        setState({
            ...state,
            user_domain: user_domain,
            isDomainErr:isDomainErr
        })
    }
    const onChangeDomainOp = (e) => {
        setState({
            ...state,
            user_domain_op: e.target.value
        })
    }
    const onChangeReceive1 = (e) => {
        setState({
            ...state,
            user_receive1: e.target.value
        })
    }
    const onChangeReceive2 = (e) => {
        setState({
            ...state,
            user_receive2: e.target.value
        })
    }
    const onChangeReceive3 = (e) => {
        setState({
            ...state,
            user_receive3: e.target.value
        })
    }
    const onChangeReceive4 = (e) => {
        setState({
            ...state,
            user_receive4: e.target.value
        })
    }
    const onClickClose = (e)=>{
        e.preventDefault();
        setState({
            ...state,
            isPost:false
        })
    }
    const onClickOpen = (e)=>{
        e.preventDefault();
        setState({
            ...state,
            isPost:true
        })
    }

    const onCompletePost = (data) => {
        if (data.address !== null) {
            setState({
                ...state,
                user_addr1: `[${data.zonecode}] `+data.address,
                isPost: false
            })
        }
    }

    const onClickIdSearch = (e) => {
        e.preventDefault();
        const formData = {
            "user_id": state.user_id
        }
        $.ajax({
            url: 'http://qkrthdus212.cafe24.com/JSP/spao/idsearch_action.jsp',
            type: 'POST',
            data: formData,
            dataType: 'json',
            success(res) {
                console.log(res.result);
                if (res.result === '-1') {
                    alert('중복된 아이디입니다.\n다른 아이디를 사용해주세요');
                }
                else if (res.result === '1') {
                    if(state.user_id.length<6){
                        alert('6자 이상으로 입력해주세요');
                    }
                    else{
                        alert('사용 가능한 아이디 입니다.');
                        setState({
                            ...state,
                            isIdErr:false
                        })
                    }

                }
            },
            error(err) {
                console.log('AJAX 실패' + err);
            }
        })
    }

    const onSubmitSignUp = (e) => {
        e.preventDefault();

        if(state.user_name===''){
            alert('이름 입력은 필수입니다');
        }
        else if(state.user_id===''){
            alert('아이디 입력은 필수입니다');
        }
        else if(state.isIdErr===true){
            alert('아이디 중복검사를 해주세요');
        }
        else if(state.user_pw===''){
            alert('비밀번호 입력은 필수입니다');
        }
        else if(state.isPwErr===true){
            alert('비밀번호 형식이 잘못 되었습니다.\n다른 비밀번호를 사용해 주세요');
        }
        else if(state.isPw2Err===true){
            alert('비밀번호가 같지 않습니다');
        }
        else if(state.user_hp2===''&&state.user_hp3===''){
            alert('핸드폰 번호 입력은 필수입니다');
        }
        else if(state.isHp2Err===true||state.isHp3Err===true){
            alert('핸드폰 번호를 제대로 입력해 주세요');
        }
        else if(state.user_email===''){
            alert('이메일 입력은 필수입니다');
        }
        else if(state.isDomainErr===true&&state.user_domain_op===''){
            alert('이메일을 제대로 입력해주세요');
        }
        else{
            const formData = {
                "user_name": state.user_name,
                "user_id": state.user_id,
                "user_pw": state.user_pw,
                "user_birth": state.user_birth_year + "-" + state.user_birth_month + "-" + state.user_birth_date,
                "user_hp": state.user_hp1 + state.user_hp2 + state.user_hp3,
                "user_addr": state.user_addr1 + state.user_addr2,
                "user_email": state.user_email + "@" + (state.user_domain_op===''?state.user_domain:state.user_domain_op),
                "user_receive": state.user_receive1 + "," + state.user_receive2 + "," + state.user_receive3 + "," + state.user_receive4,
            }
            $.ajax({
                url: 'http://qkrthdus212.cafe24.com/JSP/spao/signup_action.jsp',
                type: 'POST',
                data: formData,
                success(res) {
                    console.log('AJAX 성공!');
                    console.log(res);
                    alert('회원가입되었습니다.');
                    window.location.href='#/signin';
                },
                error(err) {
                    console.log('AJAX 실패!' + err);
                }
            })
        }


    }




    return (
        <>
            <div id='signUp'>
                <div className="container">
                    <div className="gap">
                        <div className="up">
                            <h2>E POINT 이랜드 통합멤버십</h2>
                        </div>
                        <div className="bottom">
                            <div className="title">
                                <h3>E POINT 회원가입</h3>
                            </div>
                            <div className="content">
                                <form action="" method='post' name='sign_up' onSubmit={onSubmitSignUp}>
                                    <div className="sub-tit">
                                        <h4>기본정보</h4>
                                        <p>(<span>*</span>)표시는 필수입력항목입니다.</p>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th scope='row'>이름<span>*</span></th>
                                                <td><input type="text" name="user_name" maxLength={30} onChange={onChangeName} value={state.user_name} /></td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>회원아이디<span>*</span></th>
                                                <td><input type="text" name="user_id" maxLength={16} onChange={onChangeId} value={state.user_id} /><button onClick={onClickIdSearch}>아이디 중복체크</button></td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>비밀번호<span>*</span></th>
                                                <td>
                                                    <input type="password" name="user_pw" maxLength={16} onChange={onChangePw} value={state.user_pw} />
                                                    <div className="warn">연속적인 숫자나 생일, 전화번호등 추측하기 쉬운 개인정보 및 아이디와 비슷한 전화번호 사용을 피하시기 바랍니다 <br />비밀번호는 특수기호를 포함한 2가지 이상을 혼합하여 입력하세요. </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>비밀번호재입력<span>*</span></th>
                                                <td>
                                                    <input type="password" name="user_pw2" maxLength={16} onChange={onChangePw2} value={state.user_pw2} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>생년월일</th>
                                                <td className='birth'>
                                                    <select name="user_birth_year" onChange={onChangeYear} value={state.user_birth_year}>
                                                        <option value="">선택</option>
                                                        <option value="1943">1943</option>
                                                        <option value="1944">1944</option>
                                                        <option value="1945">1945</option>
                                                        <option value="1946">1946</option>
                                                        <option value="1947">1947</option>
                                                        <option value="1948">1948</option>
                                                        <option value="1949">1949</option>
                                                        <option value="1950">1950</option>
                                                        <option value="1951">1951</option>
                                                        <option value="1952">1952</option>
                                                        <option value="1953">1953</option>
                                                        <option value="1954">1954</option>
                                                        <option value="1955">1955</option>
                                                        <option value="1956">1956</option>
                                                        <option value="1957">1957</option>
                                                        <option value="1958">1958</option>
                                                        <option value="1959">1959</option>
                                                        <option value="1960">1960</option>
                                                        <option value="1961">1961</option>
                                                        <option value="1962">1962</option>
                                                        <option value="1963">1963</option>
                                                        <option value="1964">1964</option>
                                                        <option value="1965">1965</option>
                                                        <option value="1966">1966</option>
                                                        <option value="1967">1967</option>
                                                        <option value="1968">1968</option>
                                                        <option value="1969">1969</option>
                                                        <option value="1970">1970</option>
                                                        <option value="1971">1971</option>
                                                        <option value="1972">1972</option>
                                                        <option value="1973">1973</option>
                                                        <option value="1974">1974</option>
                                                        <option value="1975">1975</option>
                                                        <option value="1976">1976</option>
                                                        <option value="1977">1977</option>
                                                        <option value="1978">1978</option>
                                                        <option value="1979">1979</option>
                                                        <option value="1980">1980</option>
                                                        <option value="1981">1981</option>
                                                        <option value="1982">1982</option>
                                                        <option value="1983">1983</option>
                                                        <option value="1984">1984</option>
                                                        <option value="1985">1985</option>
                                                        <option value="1986">1986</option>
                                                        <option value="1987">1987</option>
                                                        <option value="1988">1988</option>
                                                        <option value="1989">1989</option>
                                                        <option value="1990">1990</option>
                                                        <option value="1991">1991</option>
                                                        <option value="1992">1992</option>
                                                        <option value="1993">1993</option>
                                                        <option value="1994">1994</option>
                                                        <option value="1995">1995</option>
                                                        <option value="1996">1996</option>
                                                        <option value="1997">1997</option>
                                                        <option value="1998">1998</option>
                                                        <option value="1999">1999</option>
                                                        <option value="2000">2000</option>
                                                        <option value="2001">2001</option>
                                                        <option value="2002">2002</option>
                                                        <option value="2003">2003</option>
                                                        <option value="2004">2004</option>
                                                    </select>
                                                    <span>년</span>
                                                    <select name="user_birth_month" onChange={onChangeMonth} value={state.user_birth_month}>
                                                        <option value="">선택</option>
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                    <span>월</span>
                                                    <select name="user_birth_date" onChange={onChangeDate} value={state.user_birth_date}>
                                                        <option value="">선택</option>
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                        <option value="20">20</option>
                                                        <option value="21">21</option>
                                                        <option value="22">22</option>
                                                        <option value="23">23</option>
                                                        <option value="24">24</option>
                                                        <option value="25">25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="30">30</option>
                                                        <option value="31">31</option>
                                                    </select>
                                                    <span>일</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>핸드폰번호 <span>*</span></th>
                                                <td className='hp'>
                                                    <select name="user_hp1" onChange={onChangeHp1} value={state.user_hp1}>
                                                        <option value="010">010</option>
                                                        <option value="011">011</option>
                                                        <option value="016">016</option>
                                                        <option value="017">017</option>
                                                        <option value="018">018</option>
                                                        <option value="019">019</option>
                                                    </select>
                                                    <span>-</span>
                                                    <input type="text" name="user_hp2" onChange={onChangeHp2} value={state.user_hp2} maxLength={4} />
                                                    <span>-</span>
                                                    <input type="text" name="user_hp3" onChange={onChangeHp3} value={state.user_hp3} maxLength={4} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>주소 </th>
                                                <td className='addr'>
                                                    <input type="text" name='user_addr1' onChange={onChangeAddr1} value={state.user_addr1} disabled={true} />
                                                    <button onClick={onClickOpen}>주소검색</button>
                                                    <input type="text" name='user_addr2' onChange={onChangeAddr2} value={state.user_addr2} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>이메일 <span>*</span></th>
                                                <td className='email'>
                                                    <input type="text" name='user_email' onChange={onChangeEmail} value={state.user_email} />
                                                    <span>@</span>
                                                    <input type="text" name='user_domain' onChange={onChangeDomain} value={state.user_domain_op === '' ? state.user_domain : state.user_domain_op} />
                                                    <select name="" id="" onChange={onChangeDomainOp} value={state.user_domain_op}>
                                                        <option value="">직접입력</option>
                                                        <option value="naver.com">naver.com</option>
                                                        <option value="gmail.com">gmail.com</option>
                                                        <option value="icloud.com">icloud.com</option>
                                                        <option value="nate.com">nate.com</option>
                                                        <option value="hanmail.net">hanmail.net</option>
                                                        <option value="hotmail.com">hotmail.com</option>
                                                        <option value="yahoo.com">yahoo.com</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="sub-tit">
                                        <h4>마케팅 정보 수신 동의</h4>
                                    </div>
                                    <div className="info">
                                        <p> - ㈜이랜드리테일(NC백화점, 뉴코아아울렛 외)/ ㈜이랜드킴스클럽(킴스클럽 외) / ㈜이랜드글로벌(럭셔리갤러리 외)</p>
                                        <p> - ㈜이랜드월드(스파오, 에블린, 로엠, 이랜드몰 외)/㈜이랜드크루즈(이랜드크루즈)</p>
                                        <p> - ㈜이랜드이츠(애슐리, 더카페 외)/ ㈜이랜드파크(켄싱턴호텔&리조트 외)/</p>
                                        <p> - ㈜이월드쥬얼리사업부가산(로이드 외)외</p>
                                        <p> - 전체 브랜드 및 서비스의 마케팅 정보를 받아보시려면 수신동의를 해주세요.</p>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th scope='row'>이메일 수신</th>
                                                <td>
                                                    <label htmlFor="emailOk">
                                                        <input type="radio" name='user_receive1' id="emailOk" value={'이메일수신'} onChange={onChangeReceive1} checked={state.user_receive1.includes('이메일수신')} />수신
                                                    </label>
                                                    <label htmlFor="emailNo">
                                                        <input type="radio" name='user_receive1' id='emailNo' value={'수신안함'} onChange={onChangeReceive1} checked={state.user_receive1.includes('수신안함')} />수신안함
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>문자수신(LMS, SMS 등)</th>
                                                <td>
                                                    <label htmlFor="smsOk">
                                                        <input type="radio" name='user_receive2' id='smsOk' value={'문자수신'} onChange={onChangeReceive2} checked={state.user_receive2.includes('문자수신')} />수신
                                                    </label>
                                                    <label htmlFor="smsNo">
                                                        <input type="radio" name='user_receive2' id='smsNo' value={'수신안함'} onChange={onChangeReceive2} checked={state.user_receive2.includes('수신안함')} />수신안함
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>DM 수신</th>
                                                <td>
                                                    <label htmlFor="dmOk">
                                                        <input type="radio" name='user_receive3' id='dmOk' value={'DM수신'} onChange={onChangeReceive3} checked={state.user_receive3.includes('DM수신')} />수신
                                                    </label>
                                                    <label htmlFor="dmNo">
                                                        <input type="radio" name='user_receive3' id='dmNo' value={'수신안함'} onChange={onChangeReceive3} checked={state.user_receive3.includes('수신안함')} />수신안함
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>모바일 쿠폰북 수신</th>
                                                <td>
                                                    <label htmlFor="mobileOk">
                                                        <input type="radio" name='user_receive4' id='mobileOk' value={'모바일수신'} onChange={onChangeReceive4} checked={state.user_receive4.includes('모바일수신')} />수신
                                                    </label>
                                                    <label htmlFor="mobileNo">
                                                        <input type="radio" name='user_receive4' id='mobileNo' value={'수신안함'} onChange={onChangeReceive4} checked={state.user_receive4.includes('수신안함')} />수신안함
                                                    </label>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="sns">
                                        <p>- 상단의 E.POINT 마케팅 정보수신에 동의하시면 E.POINT 2,000 POINT를 지급해드리며 다양한 혜택을 받으실 수 있습니다.</p>
                                        <p> ※ 1월 1일 E.POINT APP에서 사용가능하며 최소 1개 이상의 채널 동의 시에 지급 됩니다.</p>
                                        <p>-  선택항목에 동의하지 않으셔도 서비스가입은 가능하나, 관련 서비스를 제공받지 못하실 수 있습니다.</p>
                                    </div>
                                    <div className="btn-box">
                                        <button onClick={onClickMain}>가입취소</button>
                                        <button type='submit'>회원가입</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                state.isPost&&(
                    <div id='postCode'>
                            <div className="container">
                                <div className="contents">
                                    <div className="exit">
                                        <h3>주소 검색</h3>
                                        <button onClick={onClickClose}><img src="./img/icon_x.png" alt="" /></button>
                                    </div>
                                    <PostCode id="post"
                                        autoClose
                                        onComplete={onCompletePost}
                                    />
                                </div>
                            </div>
                        </div>
                )
            }

        </>
    );
};
