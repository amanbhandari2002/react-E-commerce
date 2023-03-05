import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route ,Outlet} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Product from './components/product/Product';
import Products from './components/Products/Products';
function App() {


  return (
    
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<Products/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Route>
      </Routes>
    
    
    </BrowserRouter>

  );
}

export default App;
