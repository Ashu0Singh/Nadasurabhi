import Sitar from "../../../images/HeroSection/SitarOpti.png"
import "./HeroSection.css"

export default function HeroSection(){
    return(
        <div className="heroSec">
            <div className="heroSec-leftText">
                <h1 className="heroSec-leftText--title">
                    Nadasurabhi provides financial support to musicians
                </h1>
                <button className="heroSec-leftText--button">Become a Member →</button>
                <p className="heroSec-leftText--desc">
                    Nadasurabhi Cultural Association located in Koramangala, Bangalore
                    is in the forefront of promoting Classical Carnatic Music. Nadasurabhi 
                    conducts the highest  quality music concerts every month and a week
                    long Annual Festival in November, free of charge to all rasikas. 
                    Our other events include a youth festival, Thyagaraja and Purandaradasa 
                    Aradhana, and music competitions for children.
                </p>
            </div>
            {window.innerWidth>900 && <div className="heroSec-rightImg">
                <div className="heroSec-rightImg--cyanBack"></div>
                <img src={Sitar} className="heroSec-rightImg--sitar" alt="Sitar"></img>
            </div>}
        </div>
    )
}