import './Slider.css';


export default function ImageSlider(props){
    return ( 
        <iframe 
            className="mediaPlayers"
            src={props.link} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    );
}
