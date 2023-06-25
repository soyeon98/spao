import React from 'react';
import $, { easing } from 'jquery';

export default function GoUpDownComponent(){

    React.useEffect(()=>{
     
        let gotopBtn = $('.gotop-btn');
        let goDownBtn = $('.godown-btn');
        let footer = 0;
       
        footer = $('#footer').offset().top;

        gotopBtn.on({
            click(e){
                e.preventDefault();
                $('html,body').stop().animate({scrollTop:0},300);
            }
        })

        goDownBtn.on({
            click(e){
                e.preventDefault();
                $('html,body').stop().animate({scrollTop:footer},300);
            }
        })

    },[]);

    return(
        <div id='upDown'>
            <div id="goTop">
                <a href="!#" className='gotop-btn'>
                    <img src="./img/main/q_r_top.png" alt="" />
                </a>
            </div>
            <div id="goDown">
                <a href="!#" className='godown-btn'>
                    <img src="./img/main/q_r_bt.png" alt="" />
                </a>
            </div>
        </div>
    )

}