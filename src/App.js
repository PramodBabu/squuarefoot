import "./app.css";
import Interior from "./pages/Interior";
import Home from "./pages/Home/Home"
import Navbar from "./components/navbar";
import Promoter from "./pages/Promoters/Promoters"
import About from "./pages/about";
import Developer from "./pages/Developers";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app-main">
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Promoter />}/>
          {/* <Route exact path="/interior" element={<Interior />}/>
          <Route exact path="/promoters" element={<Promoter/>}/>
          <Route exact path="/developers" element={<Developer/>}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
