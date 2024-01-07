
import star from "../images/star.png";
// import katie from "./katie-zaferes.png";


function Card(props){
    return(
        <div className="card">
         <img src={`../images/${props.img}`} className="card--image" alt="main pic" />
        <div className="card--stats">
            <img src={star} alt="star" className="card--star"/>
            <span>{props.raiting}</span>
            <span className ="gray">({props.count}) • </span>
            <span className ="gray">{props.country}</span>
                    </div>
        <h2>{props.title}</h2>
        <p><span className = "bold">From $ {props.price}</span> / person</p>
        </div>
    )
}

export default Card;
