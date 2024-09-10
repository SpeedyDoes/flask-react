import React, { useState } from 'react';
import '../styles/LoginForm.css';
import '../styles/SignupForm.css';

function LoginForm({ openSignup, modalContent }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('https://...', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password}) 
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-form">
      <h1>ACCEDI</h1>
      <div className="switch-buttons-container">
        <button className={modalContent === 'login' ? 'active' : ''} onClick={(e) => {e.preventDefault();}}>Accedi</button>
        <button className={modalContent === 'signup' ? 'active' : ''} onClick={(e) => {e.preventDefault(); openSignup();}}>Registrati</button>
      </div>
      <form onSubmit={login}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <a className='forgot-password' href="#">Password dimenticata?</a>
        <button className='submit-button' type="submit">Accedi</button>
      </form>
      <p>Non hai un account? <a href="#" onClick={(e) => {e.preventDefault(); openSignup();}}>Registrati</a></p>
    </div>
  );
}

export default LoginForm;