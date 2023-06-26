import React from 'react';

export default function SignUpComponent() {

    const onClickMain =(e)=>{
        e.preventDefault();
        window.location.href="/main";
    }
    return (
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
                            <form action="">
                                <div className="sub-tit">
                                    <h4>기본정보</h4>
                                    <p>(<span>*</span>)표시는 필수입력항목입니다.</p>
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>이름<span>*</span></th>
                                            <td><input type="text" /></td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>회원아이디<span>*</span></th>
                                            <td><input type="text" /><button>아이디 중복체크</button></td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>비밀번호<span>*</span></th>
                                            <td>
                                                <input type="text" />
                                                <div className="warn">연속적인 숫자나 생일, 전화번호등 추측하기 쉬운 개인정보 및 아이디와 비슷한 전화번호 사용을 피하시기 바랍니다 <br />비밀번호는 특수기호를 포함한 3가지 이상을 혼합하여 입력하세요. </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>비밀번호재입력<span>*</span></th>
                                            <td>
                                                <input type="text" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>생년월일</th>
                                            <td className='birth'>
                                                <input type="text" /><span>년</span>
                                                <select name="" id="">
                                                    <option value="">선택</option>
                                                    <option value="">01</option>
                                                    <option value="">02</option>
                                                    <option value="">03</option>
                                                    <option value="">04</option>
                                                    <option value="">05</option>
                                                    <option value="">06</option>
                                                    <option value="">07</option>
                                                    <option value="">08</option>
                                                    <option value="">09</option>
                                                    <option value="">10</option>
                                                    <option value="">11</option>
                                                    <option value="">12</option>
                                                </select>
                                                <span>월</span>
                                                <select name="" id="">
                                                    <option value="">선택</option>
                                                    <option value="">01</option>
                                                    <option value="">02</option>
                                                    <option value="">03</option>
                                                    <option value="">04</option>
                                                    <option value="">05</option>
                                                    <option value="">06</option>
                                                    <option value="">07</option>
                                                    <option value="">08</option>
                                                    <option value="">09</option>
                                                    <option value="">10</option>
                                                    <option value="">11</option>
                                                    <option value="">12</option>
                                                    <option value="">13</option>
                                                    <option value="">14</option>
                                                    <option value="">15</option>
                                                    <option value="">16</option>
                                                    <option value="">17</option>
                                                    <option value="">18</option>
                                                    <option value="">19</option>
                                                    <option value="">20</option>
                                                    <option value="">21</option>
                                                    <option value="">22</option>
                                                    <option value="">23</option>
                                                    <option value="">24</option>
                                                    <option value="">25</option>
                                                    <option value="">26</option>
                                                    <option value="">27</option>
                                                    <option value="">28</option>
                                                    <option value="">29</option>
                                                    <option value="">30</option>
                                                    <option value="">31</option>
                                                </select>
                                                <span>일</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>핸드폰번호 <span>*</span></th>
                                            <td className='hp'>
                                                <select name="" id="">
                                                    <option value="">010</option>
                                                    <option value="">011</option>
                                                    <option value="">016</option>
                                                    <option value="">017</option>
                                                    <option value="">018</option>
                                                    <option value="">019</option>
                                                </select>
                                                <span>-</span>
                                                <input type="text" />
                                                <span>-</span>
                                                <input type="text" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>주소 </th>
                                            <td className='addr'>
                                                <input type="text" />
                                                <button>주소검색</button>
                                                <input type="text" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>이메일 <span>*</span></th>
                                            <td className='email'>
                                                <input type="text" />
                                                <span>@</span>
                                                <input type="text" />
                                                <select name="" id="">
                                                    <option value="">직접입력</option>
                                                    <option value="">naver.com</option>
                                                    <option value="">gmail.com</option>
                                                    <option value="">icloud.com</option>
                                                    <option value="">nate.com</option>
                                                    <option value="">hanmail.net</option>
                                                    <option value="">hotmail.com</option>
                                                    <option value="">yahoo.com</option>
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
                                                <th scope='row'>전체선택</th>
                                                <td><input type="radio" /></td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>이메일 수신</th>
                                                <td><label htmlFor=""><input type="radio" name='email' />수신</label><label htmlFor=""><input type="radio" name='email'/>수신안함</label></td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>문자수신(LMS, SMS 등)</th>
                                                <td><label htmlFor=""><input type="radio"  name='SMS'/>수신</label><label htmlFor=""><input type="radio"  name='SMS'/>수신안함</label></td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>DM 수신</th>
                                                <td><label htmlFor=""><input type="radio"  name='DM'/>수신</label><label htmlFor=""><input type="radio"  name='DM'/>수신안함</label></td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>모바일 쿠폰북 수신</th>
                                                <td><label htmlFor=""><input type="radio"  name='coupon'/>수신</label><label htmlFor=""><input type="radio"  name='coupon'/>수신안함</label></td>
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
    );
};

