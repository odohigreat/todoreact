import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/signUp';
import Login from './Pages/login';
import DashBoard from './Pages/DashBoard';
import NewNote from './Pages/NewTask';
import NewTask from './Pages/NewTask';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/new" element={<NewTask />} />
          </Routes>
        </BrowserRouter>
      </div>
     
    </div>
  );
}

export default App;
