import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard } from '../component/Dashboard';
import { Landing } from '../component/Landing';

function App() {
  return(
    <div>
      <BrowserRouter>
      <Appbar></Appbar>
      <Routes>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/' element={<Landing></Landing>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  );
}


function Appbar(){
const navigate = useNavigate();
  return <div>

      <div style={{background:"black" ,color:'white'}}> 
      
      <button onClick={()=>{
       navigate("/dashboard")
      }}>DashBoard</button>

      <button onClick={()=>{
         navigate("/")
      }}>Landing</button>
    </div>
    </div>
}

export default App;
