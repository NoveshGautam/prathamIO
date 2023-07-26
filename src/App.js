
import React, { useState, useRef } from 'react';
import './App.css';
import { styles } from './styles';

function App() {
  
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');


  const inputRef = useRef();

 
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Task added successfully!');
  };
  

  const onChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <div style={styles.Container}>
      <h2 style={styles.Header}>TODO</h2>
      <div style={styles.LabelContainer}>
        <label style={styles.Label} htmlFor="new-todo">
          What needs to be done?
        </label>
      </div>
      <div style={styles.FormContainer}>
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add</button>
        </form>
      </div>
      {message && (
        <div style={styles.ErrorMessage}>
          <h4 style={{ color: 'red' }}>{message}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
