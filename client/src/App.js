// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './Pages/Home/Home';
import Listee from './Pages/Listee/listee';
import Hotelee from './Pages/Hotelee/Hotelee';
import Care from './Pages/Care/Care'
import Flight from './Pages/Flight/Flight'
import Folder from './Pages/Folder/Folder';
import Attractions from './Pages/Attractions/Attractions';







function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/'element={<Home />}></Route>
      <Route path='/hotels'element={<Listee />}></Route>
      <Route path='/hoteles/:id/Hotelee'element={<Hotelee />}></Route>
      <Route path='/hotels/:id/1635'element={<Folder />}></Route>
      <Route path='/hotels/:id/1635/care'element={<Care />}></Route>
      <Route path='/hotels/:id/1635/Attraction'element={<Attractions />}></Route>
      <Route path='/hotels/:id/1635/Flight'element={<Flight />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
