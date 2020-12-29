import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <aside class="sidebar">
        <h3>Shopping Categories</h3>
        <button class="sidebar-close-button" onclick="closeMenu()"> x </button>
        <ul>
            <li>
                <a href="index.html">Pants</a>
            </li>
            <li>
                <a href="index.html">Shirts</a>
            </li>
        </ul>
    </aside>
    <main class="main">  
        <div class="content">
            <ul class="products">    
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product">
                        <div class="product-name">
                            <a href="product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">60$</div>
                        <div class="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product">
                        <div class="product-name">
                            <a href="product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">60$</div>
                        <div class="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product">
                        <div class="product-name">
                            <a href="product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">60$</div>
                        <div class="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product">
                        <div class="product-name">
                            <a href="product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">60$</div>
                        <div class="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product">
                        <div class="product-name">
                            <a href="product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">60$</div>
                        <div class="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product">
                        <div class="product-name">
                            <a href="product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">60$</div>
                        <div class="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product">
                        <div class="product-name">
                            <a href="product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">60$</div>
                        <div class="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product">
                        <div class="product-name">
                            <a href="product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">60$</div>
                        <div class="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>

            </ul>

        </div>
    </main>
    <footer class="footer">All right reserved.</footer>
    </div>
  );
}

export default App;
