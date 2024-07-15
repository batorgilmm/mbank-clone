import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import App from './App';
import { Header, Retail } from './components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/retail' element={<Retail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
