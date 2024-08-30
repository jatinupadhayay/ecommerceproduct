import React, { useState } from 'react';

function Register_Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log('Login submitted with:', emailOrPhone);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.logo}>PRICE PEEK.COM</h1>
        <input
          type="text"
          placeholder="What do you want to compare ?"
          style={styles.searchBar}
        />
        <div style={styles.helpLogin}>
          <span style={styles.help}>Help</span>
          <span style={styles.loginSignup}>Login / Signup</span>
        </div>
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Login or signup</h2>
        <p style={styles.subtitle}>We will send an SMS to verify</p>
        <input
          type="text"
          placeholder="Enter phone or email"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.continueButton}>
          Continue
        </button>
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
    backgroundColor: '#064472',
    padding: '10px',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    color: '#3dd9e3',
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
};

export default Register_Login;
