import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Finance from './components/Finance/Finance';
import Marketing from './components/Marketing/Marketing';
import Personnel from './components/Personnel/Personnel';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
      <Sidebar/>
    <Routes>
      <Route exact path="/" element={<Marketing/>} />
      <Route exact path="/finance" element={<Finance/>}/>
      <Route exact path="/personnel" element={<Personnel/>} />
    </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
