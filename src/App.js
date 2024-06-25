import Footer from './customer/components/Footer/Footer';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Product from './customer/components/Product/Product';
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
