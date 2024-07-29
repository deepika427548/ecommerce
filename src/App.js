import { Footer } from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import AddNewProducts from "./admin/pages/AddNewProducts";

function App() {
  return (
<Router>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>} />
  <Route path="/products" element={<Products/>} />
  <Route path="/product/:id" element={<ProductDetails/>}/>
  <Route path="/admin/products/Add" element={<AddNewProducts/>}/>
</Routes>
     <Footer/>
</Router>
     
  
  );
}

export default App;
