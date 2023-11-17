import '../App.css';
import img1 from "../assets/weather-1.png";
import img2 from "../assets/weather-2.png";
import img3 from "../assets/weather-3.png";
import img4 from "../assets/weather-4.png";


function Card(props) {
console.log(props)
    return (
        <div>
            
            <div className="clipContainer">
                <div className="imgContainer">
                    <img src={props.img} className="img"></img>
                    <p>{props.title}</p>
                    <p>
                        {props.subtitle}
                    </p>

                    
                </div>
                

            </div>

        </div>
    );
}

export default Card;
