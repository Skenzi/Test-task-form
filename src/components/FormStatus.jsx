import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStatus } from '../store/actions';

const FormStatus = ({ setStateStatus }) => {
  const dispatch = useDispatch();
  const [status, setCurrentStatus] = useState('');
  const onSubmit = (ev) => {
    ev.preventDefault();
    setStateStatus('unchanged');
    dispatch(setStatus(status));
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" className="form-element-md" value={status} onChange={(ev) => setCurrentStatus(ev.target.value)} />
      <button type="submit">{'>'}</button>
    </form>
  );
};

export default FormStatus;
