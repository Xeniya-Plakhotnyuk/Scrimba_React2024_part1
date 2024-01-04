
import airlogo from "../images/airbnb-logo.png";

function Navbar(){
    return(
        <div>
            <nav className = "navbar">
                
                    <img src ={airlogo} width = "50px" alt = "logo" className="logo" />
                                  
            </nav>
        </div>
    )
}

export default Navbar;