import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegisterLogin() {
  const [email, setEmail] = useState('');
  const [password,setpassword]=useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the email exists
      const response1 = await axios.get(`http://localhost:8080/api/users/check?email=${email}`);

      const response2 = await axios.get(`http://localhost:8080/api/users/check2?password=${password}`);


      if (response1.status === 200) {
        if(response2.status === 200){
        // If email exists, redirect to home page
        navigate('/components/Home');}else if(response2.status===404){
          setErrorMessage('password is wrong')
        }

      } else if (response1.status === 404){
        setErrorMessage('Email & password not  found.');
        navigate('/createaccount');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // If email doesn't exist, redirect to signup
        navigate('/createaccount');
      } else {
        setErrorMessage('wrong email and password.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.logo}>PRICE PEEK</h1>
        <input
          type="text"
          placeholder="What do you want to Search & compare?"
          style={styles.searchBar}
        />
        <div style={styles.helpLogin}>
          <span style={styles.help}>Help</span>
          <span style={styles.loginSignup}>Login / Signup</span>
        </div>
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Login or Signup</h2>
        <p style={styles.subtitle}>We will send an SMS to verify</p>
       
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
         <input
          type="text"
          placeholder="Enter Passwords"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.continueButton}>Continue</button>
        <li><Link to="/createaccount">Sign Up</Link></li>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <p style={styles.orText}>Or continue with social account</p>
        <button type="button" style={styles.googleButton}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            style={styles.googleLogo}
          />
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: '10px',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    color: '#000000',
  },
  searchBar: {
    padding: '8px',
    width: '50%',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  helpLogin: {
    display: 'flex',
    alignItems: 'center',
  },
  help: {
    marginRight: '15px',
  },
  loginSignup: {
    borderLeft: '1px solid white',
    paddingLeft: '15px',
  },
  form: {
    backgroundColor: '#FAF5F0',
    margin: '50px auto',
    padding: '40px',
    width: '300px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#888',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  continueButton: {
    backgroundColor: '#FFA500',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '20px',
  },
  orText: {
    marginBottom: '10px',
    color: '#888',
  },
  googleButton: {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
    width: '100%',
  },
  googleLogo: {
    width: '20px',
    height: '20px',
  },
  errorMessage: {
    color: 'red',
    marginBottom: '20px',
  },
};

export default RegisterLogin;
