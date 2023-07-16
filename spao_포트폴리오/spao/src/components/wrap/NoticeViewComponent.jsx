import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';

export default function NoticeViewComponent  ()  {

    const [param,setParam] = useSearchParams();
    const listNum = param.get('listNum');

    const [state,setState] = React.useState({
        notice:{},
        next:{},
        prev:{}
    });
    const {notice,next,prev} =state;

    React.useEffect(()=>{
        let formData = new FormData();
        formData.append('idx',listNum);
        axios({
            url:'./data/notice/notice.json',
            method:'get'
        })
        .then((res)=>{
            if(res.status===200){
                
                let result = res.data.notice.filter((item)=>item.no===Number(listNum));
                let resultPrev = res.data.notice.filter((item)=>item.no===Number(listNum)-1);
                let resultNext = res.data.notice.filter((item)=>item.no===Number(listNum)+1);
                console.log(result[0]);
                if(result[0].content!==""){
                    result[0].content=result[0].content.split('\n').map(line=>{return(<span>{line}<br/></span>)});
                }
                setState({
                    ...state,
                    notice:result[0],
                    next:resultNext[0],
                    prev:resultPrev[0]
                })
                // console.log(result[0]);
            }
        })
        .catch((err)=>{
            console.log('AXIOS 실패'+ err);
        })
    },[listNum]);

    const onClickList=(e)=>{
        e.preventDefault();
        window.location.href="/#/notice";
    }

    // const onClickPrev =(e)=>{
    //     e.preventDefault();
    //     window.location.href=`/!#/noticeView?ListNum=${Number(listNum)-1}`;
    //     setState({
    //         ...state,
    //         notice:prev
    //     })
    // }
    // const onClickNext =(e)=>{
    //     e.preventDefault();
    //     window.location.href=`/!#/noticeView?ListNum=${Number(listNum)+1}`;
    //     setState({
    //         ...state,
    //         notice:next
    //     })
    // }

    return(
        <div id='noticeView'>
            <div className="container">
                <div className="gap">
                    <div className="link-box">
                        <ul>
                            <li><Link to="/main">홈</Link></li>
                            <li>게시판</li>
                            <li>공지사항</li>
                        </ul>
                    </div>           
                    <div className="title">
                        <h1>공지사항</h1>
                    </div>
                    <div className="content">
                        <div className="sub-title">
                            <h3>{notice.subject}</h3>
                            <ul>
                                <li>작성일<span>{notice.date}</span></li>
                                <i>|</i>
                                <li>조회수<span>{notice.view}</span></li>
                            </ul>
                        </div>
                        <div className="content-box">
                            <p>{notice.content} </p>
                            <img src={`./img/main/${notice.contentimg}`} alt="" />
                        </div>
                        <div className="btn">
                            <button onClick={onClickList}>목록</button>
                        </div>
                        <div className="list">
                            <ul>
                                <li style={{"display":`${notice.no===15?"none":"flex"}`}}>
                                    <span>이전글</span>
                                    <i>|</i>
                                    <Link to={`/noticeView?listNum=${notice.no-1}`}>{prev.subject}</Link>
                                </li>
                                <li style={{"display":notice.no===1?"none":"flex","border-top":notice.no===15?"1px solid #e5e5e5":"0"}}>
                                    <span>다음글</span>
                                    <i>|</i>
                                    <Link to={`/noticeView?listNum=${notice.no+1}`}>{next.subject}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
