import React, { StrictMode } from 'react'; // Import StrictMode
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Ensure this points to the correct file
import './index.css'; // Import your CSS file

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
