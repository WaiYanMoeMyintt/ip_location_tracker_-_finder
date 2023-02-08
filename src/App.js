import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Tracker from "./components/Tracker.jsx";
import Finder from "./components/Finder.jsx";
import Track from './components/Track.jsx';
const App = () => {
  return (
      <>
          <BrowserRouter>
               <Routes>
                    <Route index element = {<Navbar />}/>
                    <Route path = "/ip/tracker" element = {<Navbar />} />
                    <Route path = "/ip/finder" element = {<Finder />} />
               </Routes>
          </BrowserRouter>
      </>
  )
}

export default App