import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FlashSales from './components/FlashSales';
import PopularSearch from './components/PopularSearch';
import ProductShowcase from './components/ProductShowcase';
import NewArrivals from './components/NewArrivals';
import Carousel from './components/Carousel';
import RegisterLogin from './RegisterLogin'; // Import RegisterLogin component
import CreateAccount from './components/createaccount';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define different routes for your pages */}
          <Route path="/" element={
            <main>
              <section className="banner">
                <Carousel />
              </section>
              <FlashSales />
              <PopularSearch />
              <ProductShowcase />
              <NewArrivals />
            </main>
          } />
          
          {/* Define route for Register/Login page */}
          <Route path="/RegisterLogin" element={<RegisterLogin />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
