import { Route, Routes } from "react-router-dom"
import Mainlayout from './layout/Mainlayout';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import {CreateProduct} from './pages/CreateProduct/CreateProduct';
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import EachCategory from './components/Card/EachCategory';
import SuccessRegistration from './pages/Login/SuccessRegistration';
import Profile from './pages/Profile/Profile';


function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Mainlayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/success-registration" element={<SuccessRegistration/>}/>
      <Route path="/create-product" element={<CreateProduct/>}/>
      <Route path="/product-detail/:datakey/:id" element={<ProductDetail/>}/>
      <Route path="/all/:datakey" element={<EachCategory/>}/>
      </Route> 
    </Routes>
   </>
  )
}

export default App
