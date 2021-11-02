import React, { useState } from 'react';
 
const Specialized = () => {
  const onSubmit = username => console.log(username);
 
  return <UsernameForm onSubmit={onSubmit} />;
};
 
const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
 
  return (
    <form
      onSubmit={event => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <label>
        Your name:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>
 
      <button type="submit">Send</button>
    </form>
  );
};
 
export default Specialized ;