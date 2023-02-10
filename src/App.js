import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import FilterComponent from './components/FilterComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import Cartpage from './pages/Cartpage';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import PageNotFound from './pages/PageNotFound';
import ProductDetail from './pages/ProductDetail';
import ProductListing from './pages/ProductListing';
import WishList from './pages/WishList';

function App() {
  const userDetail = useSelector((state) => state.userDetail);

  if (!userDetail) {
    return <Loginpage />;
  } else {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
