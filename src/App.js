import './App.css';
import NavScroll from './NavScroll';
import Listarticles from './components/articles/Listarticles';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Listcategories from './components/categories/Listcategories';
import Listscategories from './components/scategories/Listscategories';
import Cart from './components/articles/Cart';
import StripePayment from './components/articles/StripePayment';
import CheckoutSuccess from './components/articles/CheckoutSuccess';
import PdfCart from './components/articles/PdfCart';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AfficheArticleTable from './admin/components/articles/AfficheArticleTable';
import { ToastContainer } from 'react-toastify';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <NavScroll/>
        <Routes>
          <Route path='/' element={<Listarticles/>}/>
          <Route path='/categories' element={<Listcategories/>}/>
          <Route path='/scategories' element={<Listscategories/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/pay/:total' element={<StripePayment/>}/>
          <Route path='/ckeckout' element={<CheckoutSuccess/>}/>
          <Route path="/pdfcart" element={<PdfCart/>}/>
          <Route path="/affichart" element={<ProductsAppAdmin/>}/>


        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
