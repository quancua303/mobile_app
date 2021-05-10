import '../App.css';
import ad from '../image/ads.jpg';
import ad1 from '../image/ads2.png';
import Test from '../Test';
import { SliderData } from '../SliderData';
import Company from './Company';
import { useState } from 'react';
import Header from './Header';

function UnderHeader() {
    const [category, setCate] = useState('iphone');

    //console.log(category)
    return (
        <>
            <Header />
            <div class="header" className="container h-auto flex ">

                {/*<div class="left" className="p-2 m-2 w-3/12 bg-gray-300 rounded-lg">*/}
                {/*    <ul>*/}
                {/*        <li class="mobile"><i class="fas fa-mobile-alt"></i> Mobile</li>*/}
                {/*        <ul class="mobile-son">*/}
                {/*            <li><a onClick={() => setCate('iphone')} className="no-underline" href={`/listProduct/${category}`}>Apple</a></li>*/}
                {/*            <li><a onClick={() => setCate('samsung')} className="no-underline" href={`/listProduct/${category}`}>SamSung</a></li>*/}
                {/*            <li><a onClick={() => setCate('xiaomi')} className="no-underline" href={`/listProduct/${category}`}>Xiaomi</a></li>*/}
                {/*            <li><a onClick={() => setCate('asus')} className="no-underline" href={`/listProduct/${category}`}>Asus</a></li>*/}
                {/*        </ul>*/}
                        
                {/*    </ul>*/}
                {/*</div>*/}
                <div class="right" className="relative m-2 w-8/12">
                    <Test slides={SliderData} />


                </div>

                <div className="p-2 w-4/12">
                    <img className="rounded-lg" src={ad} alt="" />
                    <img className="rounded-lg mt-1" src={ad1} alt="" />
                </div>

                
            </div>
            <Company />
            
        </>
    );
}



export default UnderHeader;
