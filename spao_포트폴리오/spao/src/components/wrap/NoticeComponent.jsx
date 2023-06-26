import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NoticeComponent  ()  {

    //item.content.split('\n').map(line=>{return(<span>{line}<br/></span>)}) 줄바꿔서 출력 내용

    const [state, setState] = React.useState({
        notice: []
    });

    function reset(){
        window.scrollTo(0,0);
    }

    React.useEffect(()=>{
        reset();
    },[]);


    React.useEffect(() => {
        axios({
            url: './data/notice/notice.json',
            method: 'get'
        })
            .then((res) => {
                if (res.status === 200) {
                    
                    setState({
                        ...state,
                        notice: res.data.notice
                    });
                    console.log(res.data.notice);
                }
            })
            .catch((err) => {
                console.log(`AXIOS 실패 ${err}`);
            })

    }, []);

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
                            {
                                state.notice.map((item,i)=>{
                                    return(
                                        <tr style={{"background-color":i<3?"#f7f7f7":"#fff","display":item.no===0||item.no===16?"none":"flex"}}>
                                            <td>{item.idx}</td>
                                            <td style={{"font-weight":i<2?"500":"400"}}><Link to={`/noticeView?listNum=${item.no}`}>{item.subject}</Link></td>
                                            <td style={{"color":i<2?"#1a1a1a":"#707070"}}>{item.date}</td>
                                            <td style={{"color":i<2?"#1a1a1a":"#707070"}}>{item.view}</td>
                                        </tr>
                                    );
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

