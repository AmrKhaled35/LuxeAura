import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductProvider from './Contexts/ProductContext';
import {SideBarProvider} from './Contexts/SideBarContext';
import  ChartProvider from './Contexts/ChartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SideBarProvider>
    <ChartProvider>
      <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </ProductProvider>
    </ChartProvider>
  </SideBarProvider>
    
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
