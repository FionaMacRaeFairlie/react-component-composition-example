import React, { useState} from 'react';

const Reuseable = () => {
   const [username, setUsername] = useState('');

   const onSubmit = (username) => {
    console.log(username);
   }

  return (
    <div>
      <Form
        onSubmit={event => {
          onSubmit(username);
          event.preventDefault();
        }}
      >
        <InputField value={username} onChange={setUsername}>
          Your name:
        </InputField>
        <Button color="LightSteelBlue" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const Button = ({
  color = 'white',
  onClick,
  type = 'button',
  children,
}) => (
  <button
    style={{ backgroundColor: color }}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

const InputField = ({ value, onChange, children }) => (
  <label>
    {children}
    <input
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}

    />
  </label>
);

export default Reuseable;
