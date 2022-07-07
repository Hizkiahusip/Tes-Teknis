import './App.css';

import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  return (
    <div className="container">
            <div className="row title">
                <div className="col-md-12 text-center my-2">
                    <h2>Shopping Cart</h2>
                </div>
            </div>
            <div className="container">
              <div className="row my-3 justify-content-around">
                  <div className="card col-md-7">                                       
                    <ProductList />                    
                  </div>
                  <div className="col-md-4">                    
                    <Cart />
                  </div>
                                   
              </div>

            </div>

        </div>
  );
}

export default App;
