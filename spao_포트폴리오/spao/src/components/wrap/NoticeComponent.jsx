import React from 'react';
import { Link } from 'react-router-dom';

export default function NoticeComponent  ()  {
    return (
        <div id='notice'>
            <div className="container">
                <div className="gap">
                    <div className="link-box">
                        <ul>
                            <li><Link to="/'main">HOME</Link></li>
                            <li>공지사항</li>
                        </ul>
                    </div>
                    <div className="title">
                        <h1>공지사항</h1>
                    </div>
                    <div className="content">
                        <table>
                            <tr>
                                <td>공지</td>
                                <td><a href="!#">[혜택안내] 동영상 리뷰 추가 혜택 오픈 안내 (2022.04.01~)</a></td>
                                <td>2022-04-05</td>
                                <td>2298</td>
                            </tr>
                            <tr>
                                <td>공지</td>
                                <td>[혜택안내] 동영상 리뷰 추가 혜택 오픈 안내 (2022.04.01~)</td>
                                <td>2022-04-05</td>
                                <td>2298</td>
                            </tr>
                            <tr>
                                <td>공지</td>
                                <td>[혜택안내] 동영상 리뷰 추가 혜택 오픈 안내 (2022.04.01~)</td>
                                <td>2022-04-05</td>
                                <td>2298</td>
                            </tr>
                            <tr>
                                <td>공지</td>
                                <td>[혜택안내] 동영상 리뷰 추가 혜택 오픈 안내 (2022.04.01~)</td>
                                <td>2022-04-05</td>
                                <td>2298</td>
                            </tr>
                            <tr>
                                <td>공지</td>
                                <td>[혜택안내] 동영상 리뷰 추가 혜택 오픈 안내 (2022.04.01~)</td>
                                <td>2022-04-05</td>
                                <td>2298</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

