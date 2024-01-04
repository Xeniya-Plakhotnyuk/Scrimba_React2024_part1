import heropage from "../images/photo-grid.png";

function HeroPage(){
    return(
        <div className = "grid">
            <img src={heropage}  alt="people" class="grid_image"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default HeroPage;