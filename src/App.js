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
import Services from "./Pages/Services/Services";
import AdminRoute from "./PrivateAuth.js/AdminRoute";
import RequerAuth from "./PrivateAuth.js/RequerAuth";

function App() {
  return (
    <div className="bg-gray-800">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>

        <Route path='/order' element={<RequerAuth>
          <h1>this is order</h1>
        </RequerAuth>}></Route>
        {/* deshbord  start here */}

        <Route path="deshborad" element={<RequerAuth>
          <Deshboard></Deshboard>
        </RequerAuth>
        }>
          <Route index element={<Myorders></Myorders>}></Route>
          <Route path="deshborad/orders" element={<Myorders></Myorders>}></Route>
          <Route path="deshborad/createadmin" element={<Myorders></Myorders>}></Route>
          <Route path="deshborad/allClient" element={<Myorders></Myorders>}></Route>
          <Route path="deshborad/addproduct" element={<Myorders></Myorders>}></Route>
          <Route path="deshborad/revews" element={<Myorders></Myorders>}></Route>
          <Route path="deshborad/history" element={<Myorders></Myorders>}></Route>
        </Route>


        {<Route path="/blog" element={<Blog></Blog>}></Route>}

        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
        <Route path='/registation' element={<Registation></Registation>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

/* <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
        </Route>
        
        
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>
        
        
        
        
        */
