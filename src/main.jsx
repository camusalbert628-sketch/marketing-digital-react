import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './slides-26-40-fixes.css'
import './hover-all-slides.css'

// Global error logger to display errors in the browser for debugging
window.addEventListener('error', (event) => {
  const errorDiv = document.createElement('div');
  errorDiv.style.position = 'fixed';
  errorDiv.style.bottom = '10px';
  errorDiv.style.left = '10px';
  errorDiv.style.backgroundColor = '#ef4444';
  errorDiv.style.color = 'white';
  errorDiv.style.padding = '10px';
  errorDiv.style.borderRadius = '5px';
  errorDiv.style.zIndex = '999999';
  errorDiv.style.fontSize = '12px';
  errorDiv.style.maxWidth = '90vw';
  errorDiv.style.wordBreak = 'break-all';
  errorDiv.innerText = `Runtime Error: ${event.message} at ${event.filename}:${event.lineno}:${event.colno}`;
  document.body.appendChild(errorDiv);
});

window.addEventListener('unhandledrejection', (event) => {
  const errorDiv = document.createElement('div');
  errorDiv.style.position = 'fixed';
  errorDiv.style.bottom = '10px';
  errorDiv.style.left = '10px';
  errorDiv.style.backgroundColor = '#ef4444';
  errorDiv.style.color = 'white';
  errorDiv.style.padding = '10px';
  errorDiv.style.borderRadius = '5px';
  errorDiv.style.zIndex = '999999';
  errorDiv.style.fontSize = '12px';
  errorDiv.style.maxWidth = '90vw';
  errorDiv.style.wordBreak = 'break-all';
  errorDiv.innerText = `Unhandled Promise Rejection: ${event.reason}`;
  document.body.appendChild(errorDiv);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

