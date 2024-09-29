import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './Landing';
import './App.css'
import MePolicy from "./Pages/MePolicy";
function App() {
  

  return (
    <div>
     <Router>
     <Routes>
     <Route path="/" element={<Landing/>} />
     <Route path="/mePolicy" element={<MePolicy/>} />
     </Routes>
     </Router>

    </div>
  )
}

export default App
