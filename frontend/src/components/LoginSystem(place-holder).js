// filename: src/components/LoginSystem.js  
  
import React, { useState } from 'react';  
  
const LoginSystem = () => {  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  
  const handleLogin = (event) => {  
    event.preventDefault();  
    // Implement login logic here  
    // For example, call an API endpoint with the username and password  
    console.log('Login attempt with:', username, password);  
  };  
  
  return (  
    <form onSubmit={handleLogin}>  
      <label>  
        Username:  
        <input  
          type="text"  
          value={username}  
          onChange={(e) => setUsername(e.target.value)}  
        />  
      </label>  
      <label>  
        Password:  
        <input  
          type="password"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
        />  
      </label>  
      <button type="submit">Login</button>  
    </form>  
  );  
};  
  
export default LoginSystem;  