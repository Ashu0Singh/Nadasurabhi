import React from "react";
import Nadasurabhi from '../../images/NavBar/logo.png'
import './NavBar.css'

export default function NavBar(){
    const [style, setStyle] = React.useState({});
    const [onScreen, setOnScreen] = React.useState(false);
    const [btnImg , setbtnImg] = React.useState("https://img.icons8.com/material-rounded/384/000000/menu--v1.png");
    function reAppear(){
        if(!onScreen){
            setStyle({transform: 'translate(0%)'});
            setOnScreen(preVal => !preVal);
            setbtnImg("https://img.icons8.com/ios-glyphs/480/000000/delete-sign.png");
        }
        else{
            setStyle({transform: 'translate(100%)'});
            setOnScreen(preVal => !preVal);
            setbtnImg("https://img.icons8.com/material-rounded/384/000000/menu--v1.png");
        }
    }
    return (
        <div className='navBar'>
            <div className='navBar-logoBox'>
                <img className='navBar-logoBox-img' src={Nadasurabhi} alt='KugeGemu Logo'/>
            </div>
            <div className='navBar-pageRef' style={style}>
                <div className='navBar-pageRef-title'>
                    <div className='navBar-pageRef-title-links click'>Home</div>
                    <div className='navBar-pageRef-title-links click'>Concerts</div>
                    <div className='navBar-pageRef-title-links click'>Articles</div>
                    <div className='navBar-pageRef-title-links click'>Contact Us</div>
                    <div className='navBar-pageRef-title-links click'>Donate</div>
                </div>
                
                <button className='navBar-buttons-Login clickable' type='button'>Login</button>
            </div>
            <button className="navBar-toggle" onClick={reAppear}>
                <img width="25px" src={btnImg} alt="Menu"></img>
            </button>
        </div>
    );

}
