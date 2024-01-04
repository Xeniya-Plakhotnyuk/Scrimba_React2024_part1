
import logo from "./react-icon-small.png"

function Navbar(){
    return(
        <div>
            <nav className = "navbar">
                <div className="logo_text">
                    <img src ={logo} width = "50px" alt = "logo" />
                    <h2>ReactFacts</h2>
                </div>
                <div className="title">
                    <p>React Course - Project1</p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;