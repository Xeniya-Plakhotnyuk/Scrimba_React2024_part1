import "./App.css"
import Navbar from "./components/Navbar";
// import HeroPage from "./components/Hero";
import Card from "./components/Card";





function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HeroPage /> */}
           <Card
           img="katie-zaferes.png"
           raiting = '6.0'
           count = {6}
           country = "France"
           title = "Life Lessons with Katie Zaferes"
           price = {175}
            />
          </div>
  );
}

export default App;


