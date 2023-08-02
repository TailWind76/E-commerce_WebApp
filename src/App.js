import './components/css/style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'; // Импортируем Provider из react-redux
import store from './components/store';
import Header from './components/header';
import Homepage from './components/homepage';
import Footer from './components/footer';
import AboutPage from './components/AboutPage';
import ProductListings from './components/ProductListings';
import ProductPage from './components/ProductPage';
import Basket from './components/ShoppingBaskets';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/E-commerce_WebApp' element={<Homepage />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Products' element={<ProductListings />} />
            <Route path='/Product/:id' element={<ProductPage />} />
            <Route path='/Basket' element={<Basket />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
