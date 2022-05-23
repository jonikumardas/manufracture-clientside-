import { Route, Routes } from "react-router-dom";
import Navber from "./Navber";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/logIn' element={<p>this is login </p>}></Route>
        <Route path='/registation' element={<p>ragistation</p>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
