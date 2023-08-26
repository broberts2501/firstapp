import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Card from './Card';
import { Routes, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import NotHomePage from './NotHomePage';
import Nav from './Nav';
import hoops from './assets/hoops.jpg'
import ReactPlayer from 'react-player/youtube';


function App() {
  return (
   
   
  <div className="App">
    
   
   <Nav />

    <Routes>
      <Route path='/NotHomePage' element ={<NotHomePage />} />
      <Route path='/about-me' element ={<AboutMe />} />
    </Routes>

    <Heading name="Super Man"/>
    
    <h1>Task: Add three Card elements</h1>
    
    <Card h2="First card's h2" />

    <Card h3="First card's h3" />

    <Card h2="Last card's h2" h3="First card's h3" />

    
    <img 
      height={200}
      src={hoops}
      alt='A picture of hoops'
      />

     <p></p> 
    <img
      height={200}
      src={require("./assets/hoops.jpg")}
      alt='Another hoop'
      />

    <p></p>
    <p></p>
    <p></p>

    <MyVideo />

  </div>
 
  );
}

const MyVideo = () => {
  return (
    <ReactPlayer light={true} className="vids" url="https://youtu.be/-jO3P2difnk?si=dnu3FEW2R-Aw6YmI">
          width='100%'
          height='100%'
    </ReactPlayer>
  );
};


export default App;
