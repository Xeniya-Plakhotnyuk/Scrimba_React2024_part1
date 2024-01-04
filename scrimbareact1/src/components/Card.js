import katy from "../images/katie-zaferes.png";
import star from "../images/star.png";


function Card(){
    return(
        <div className="card">
        <img src={katy} width="200px" alt="main card" className ="card--image" />
        <div className="card--stats">
            <img src={star} alt="star" className="card--star"/>
            <span>5.0</span>
            <span className ="gray">(6) • </span>
            <span className ="gray">USA</span>
                    </div>
        <h2>Life lessons</h2>
        <p><span className = "bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;
