import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
function Header() {
  return (
    <header>
      <h1>KK Bellew</h1>
      <nav>
        <a href= "/about" >About Me</a>
        <a href= "/portfolio">Portfolio</a>
        <a href= "/contact"> Contact</a>
      </nav>
    </header>
  );
}
export default Header;