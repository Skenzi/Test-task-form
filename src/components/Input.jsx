import React from 'react';

const Input = (props) => {
  const {
    name, classInput, type, onChange,
  } = props;
  return <input type={type} name={name} className={classInput} onChange={onChange} />;
};

export default Input;
