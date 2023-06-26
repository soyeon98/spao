import React from 'react';
import $ from 'jquery';

export default function GoUpDownComponent(){

    const [footerTop,setFooterTop] = React.useState(0);

    React.useEffect(()=>{
     
        let gotopBtn = $('.gotop-btn');
        let goDownBtn = $('.godown-btn');
        let footer = 0;

        footer= $('#footer').offset().top;

        setFooterTop($('#footer').offset().top);

        gotopBtn.on({
            click(e){
                e.preventDefault();
                $('html,body').stop().animate({scrollTop:0},300);
            }
        })

        goDownBtn.on({
            click(e){
                e.preventDefault();
                $('html,body').stop().animate({scrollTop:$('#footer').offset().top},300);
                console.log(footer);
                console.log($('#footer').offset().top);
              
            }
        })

    },[footerTop]);

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