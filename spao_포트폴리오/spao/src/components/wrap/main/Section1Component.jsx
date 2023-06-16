import React from 'react';
import './scss/section1.scss';

export default function section1Component () {


    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide1"><img src="./img/main/section1_slide1.jpg" alt="" /></li>
                                <li className="slide slide2"><img src="./img/main/section1_slide2.jpg"  alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

