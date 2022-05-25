import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navber from "./Navber";
import LogIn from "./Pages/Autintication/LogIn";
import Registation from "./Pages/Autintication/Registation";
import Deshboard from "./Pages/Deshboard/Deshboard";
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

        <Route path="/deshborad" element={<RequerAuth>
          <Deshboard></Deshboard>
        </RequerAuth>

        }>
        </Route>



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
        </Route> */
