import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navber from "./Navber";
import LogIn from "./Pages/Autintication/LogIn";
import Registation from "./Pages/Autintication/Registation";
import Blog from "./Pages/Blog/Blog";
import Deshboard from "./Pages/Deshboard/Deshboard";
import Myorders from "./Pages/Deshboard/Myorders";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Orders from "./Pages/Orders/Orders";
import Services from "./Pages/Services/Services";
import RequerAuth from "./PrivateAuth.js/RequerAuth";
import Myorder from "../src/Pages/Deshboard/Myorder"
import Myrevew from "./Pages/Deshboard/Myrevew";
import NewProduct from "./Pages/Deshboard/NewProduct";
import Myportfolio from "./Pages/Myportfolio";
import Allclient from "./Pages/Deshboard/Allclient";

function App() {
  return (
    <div className="bg-gray-800">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/payment' element={<h1>This is payment </h1>}></Route>

        <Route path='/order' element={<RequerAuth>
          <Orders></Orders>
        </RequerAuth>}></Route>
        {/* deshbord  start here */}

        <Route path="deshborad" element={<RequerAuth>
          <Deshboard>My profile  </Deshboard>
        </RequerAuth>
        }>
          <Route index element={<Myorders></Myorders>}></Route>
          <Route path="deshborad/orders" element={<Myorder></Myorder>}></Route>
          <Route path="deshborad/createadmin" element={<Myorders></Myorders>}></Route>
          <Route path="deshborad/allClient" element={<Allclient></Allclient>}></Route>
          <Route path="deshborad/addproduct" element={<NewProduct></NewProduct>}></Route>
          <Route path="deshborad/revews" element={<Myrevew></Myrevew>}></Route>
          <Route path="deshborad/history" element={<Myorder></Myorder>}></Route>
        </Route>


        {<Route path="/blog" element={<Blog></Blog>}></Route>}
        {<Route path="/myportfolio" element={<Myportfolio></Myportfolio>}></Route>}

        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
        <Route path='/registation' element={<Registation></Registation>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

