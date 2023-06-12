import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// import React from 'https://esm.sh/react@18.2.0';
// import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

console.log('react ', React);
console.log('ReactDOM ', ReactDOM);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
