

import Login from './Components/Login';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';
import ViewProduct from './Components/ViewProduct';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import RequireGlobal from './Components/RequireGlobal';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
 

  return (

    <Router>
    <Routes>
    <Route path='/'>
    <Route index element={<Login />}/>
    <Route path='register' element={<Registration/>}/>
    
    <Route path='dashboard' element={<RequireGlobal/>}>
    {/* <Route path='dashboard' element={<Shared />} > */}
    <Route index element={<Dashboard />}/>
    <Route path='addproduct' element={<AddProduct/>}/>
    <Route path='viewproduct' element={<ViewProduct/>}/>
    <Route path='updateproduct/:productid/:productname/:productprice/:quantity/:category' element={<UpdateProduct/>}/>
    {/* </Route>   */}
    </Route>
    </Route>
  
    </Routes>  
    </Router>
  );
}

export default App;
