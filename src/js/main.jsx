import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'
import Home from './components/Home';

const reactRender = ReactDOM.createRoot(document.getElementById('root'))
export let counter = 0;

setInterval(() => {
 
  const digito1 = counter % 10;
  const digito2 = Math.floor(counter / 10) % 10;
  const digito3 = Math.floor(counter / 100) % 10;
  const digito4 = Math.floor(counter / 1000) % 10;
  
  console.log(digito4, digito3, digito2, digito1);
  
  reactRender.render(
    <React.StrictMode>
      <Home 
        counter={counter}
        digito1={digito1}
        digito2={digito2}
        digito3={digito3}
        digito4={digito4}
      />
    </React.StrictMode>
  )
  counter++;
}, 1000);