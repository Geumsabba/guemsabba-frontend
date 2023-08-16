// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Replace with your root component

// Use createRoot from react-dom/client
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Start rendering your app
root.render(<App />);
