import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Shop from './pages/Shop';
import CartDrawer from './components/CartDrawer';

const Home = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-[#1a2332] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-6 font-['Roboto_Slab']">
          Empowering Innovation Additively
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Premium 3D printing services in Bangalore with FDM, SLA, SLS & DMLS technologies.
          3000+ prints delivered across 20+ countries.
        </p>
        <a 
          href="/shop"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Shop Now
        </a>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {['FDM 3D Printing', 'SLA 3D Printing', 'SLS 3D Printing'].map((service, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <p className="text-gray-600">High-quality 3D printing for prototyping and production</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-[#1a2332] text-white sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <a href="/" className="text-xl font-bold font-['Roboto_Slab']">3D Printzkart</a>
                <div className="flex items-center gap-6">
                  <a href="/" className="hover:text-blue-400 transition">Home</a>
                  <a href="/shop" className="hover:text-blue-400 transition">Shop</a>
                  <a href="/services" className="hover:text-blue-400 transition">Services</a>
                  <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
                </div>
              </div>
            </div>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          
          <CartDrawer />
          
          <footer className="bg-[#1a2332] text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p>&copy; 2025 3D Printzkart. All rights reserved.</p>
              <p className="text-gray-400 mt-2">Bangalore, Karnataka, India</p>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
