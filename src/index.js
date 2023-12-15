import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import {Routes,Route,} from "react-router-dom";
import About from './components/About';
import Rwr from './components/Rwr';
import About2 from './components/About2';
import About3 from './components/About3';
import About4 from './components/About4';
import About5 from './components/About5';
import About6 from './components/About6';
import About7 from './components/About7';
import About8 from './components/About8';
import About9 from './components/About9';
import About10 from './components/About10';


const root1 = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
  <Router>
  <Routes> 
      <Route path="/signin/v2/challenge/vASKXGp2bn40hxNpdlhpHzY58965XpigPDBRZOx1PrTGHEg73C4uknBiRxEXarzuNY90z" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about2" element={<About2 />} />
      <Route path="/signin/v2/challenge/wJYvzLcQm5r7GfbD2XePp8oV3NtRz9Kxu6IA0hBxOaYF1gU4rZsHqCjMv3HrTjLpKw0oLc8y" element={<About4 />} />
      <Route path="/signin/v2/challenge/g7pLk4zFm2hGvTd8aNcXw6q1oHr3sBp9UfRmYt2OvLc8xKj4Iu7KxGj0RqOeBp5Hq1UxLs6" element={<About5 />} />
      <Route path="/signin/v2/challenge/eWuRmT1qN0i8jHc4fUzVb3gS5q8uJp1Xk2LrQgYh9Ko0cVx3Bk2Uo1Xr3Vl9Ym7Fp8Iz0X" element={<About6 />} />
      <Route path="/signin/v2/challenge/h9PmRy3u0OvZl7Ig1Tc2Yr4WjXk6Zq0Nl8Fp9Tm1OxHsGzBj6Eg5Pq3Ix4Kv6Ia9r0wHk7" element={<About7 />} />
      <Route path="/signin/v2/challenge/vGh2Rk7Fp0Tc9Zo3Oq8Kx5Ry2Gj4Ew1Nl6Yz0HxSb9Tm8Kc3Ji1Wp5Gq2Eh7Oy4Kv9Nz0" element={<About8 />} />
      <Route path="/about9" element={<About9 />} />
      <Route path="/about10" element={<About10 />} />
      <Route path="/" element={<App />} />
    </Routes>
    </Router>
  </React.StrictMode>
);

if (root2) {
  root2.render(
    <React.StrictMode>
    <Router>
    <Routes> 
        <Route path="/signin/v2/challenge/u3PcRk9Yx6Gv2Hl8Np4Eg1Zo5Tb0Xs7Qm2Wp1Tc5Sv8Vx3Jy9Ar6Iz0Lq5Hr8Kv0jBh7Gz4" element={<Rwr />} />
        <Route path="/signin/v2/challenge/q4Wp8Jm0Vh5Gy9Bx3Tc7Ks1Xv6Rz2Lg9Iu0Hk7Nl2Yx1Sb3Oq5Ew8Rm2Fp1Tq9Nz0Jy6" element={<About3 />} />
      </Routes>
      </Router>
    </React.StrictMode>
  );
}
