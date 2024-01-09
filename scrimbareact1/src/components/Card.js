
import star from "../images/star.png";
import data from "./data";


const Card = () => {

return(
<div className="card" 
key={data.id}
>
{data.map(data => (
    
<div className = "card">
<h2>{data.title}</h2>
<img src={data.coverImg} alt="card" className="card--image" />
{/* <p>{data.description}</p> */}

<div className="card--stats">
                <img src={star} className="card--star" alt="star" />
                <span>{data.stats.raiting}</span>
                <span className="gray">({data.stats.reviewCount}) • </span>
                <span className="gray">{data.location}</span>
            </div>
<p> <span className="bold">${data.price} </span>/ per hour</p>

<p>{data.openSpots} spots left</p>

</div>

)

) }

</div>

)}

   export default Card;