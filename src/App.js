import './App.css';
import Heading from './heading';
import Menu from './menubar';
import Slide from './slides';
import Service from './topService';
function App() {
  return (
    <div className="App">
      <div className="title">
        <Heading name ={"Mercy Hospital"} place = {"Poreyahat"}/>
        <Menu/>
      </div>
      <Slide></Slide>
      <Service></Service>
      <rssapp-carousel id="mkPXF3LX6jUTsy6z"></rssapp-carousel>
    </div>
  );
}

export default App;
