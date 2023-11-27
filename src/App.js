import logo from './logo.svg';
import app from './App.css';
import todoperson from './Pictures/todoperson.png';
import darkbluecirc from './Pictures/darkbluecirc.png';
import lightbluecirc from './Pictures/lightbluecirc.png';
import { BrowserRouter, Routes, Router } from 'react-router-dom';
import Home from './Pages/Home';
import signUp from './Pages/signUp';
import login from './Pages/login';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path="/app" element={<App />} />
            <Route path="/signUp" element={<signUp />} />
            <Route path="/login" element={<login />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      <img className="relative z-40 h-24" src={darkbluecirc}/>
      <img className="absolute top-0 left-0 z-10" src={lightbluecirc}/>
        <div>
          <div className="mt-20">
            <img src={todoperson}/>
          </div>
            <div>
              <h1 className="text-2xl font-bold p-5">
                 Get things done with TODO
              </h1>
              <p className= "text-xl p-8 font-family"> Lorem ipsum dolor sit amet, consectetur<br></br>
                  adipiscing elit. Nunc vulputate libero<br></br>
                  let velit interdum, ac aliquet odio mattis.
              </p>
              <button className="bottom-0 w-80 text-white rounded-lg font-semibold hover:bg-sky-700 text-xl bg-cyan-400 p-5">Get Started</button>
            </div>
        </div>
    </div>
  );
}

export default App;
