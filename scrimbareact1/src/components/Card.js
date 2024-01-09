
import star from "../images/star.png";
import data from "./data";


const Card = () => {

return(
<div>
{data.map(data => (
<div className = "card">
<h2>{data.title}</h2>
<img src={data.coverImg} alt="card" />
{/* <p>{data.description}</p> */}
<p>${data.price} / per hour</p>
<p> <img src = {star} alt="star"/> {data.stats.raiting} {data.stats.reviewCount}</p>
<p>{data.location}</p>
<p>{data.openSpots} spots left</p>

</div>

)

) }

</div>

)


}

   export default Card;