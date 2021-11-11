import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FormStatus from './FormStatus.jsx';

const Header = () => {
  const status = useSelector((state) => state.status);
  const [stateStatus, setStateStatus] = useState('unchanged');
  return (
    <div className="header">
      <h1 className="header-greetings-title">
        <span className="greetings-title_gray">Здравствуйте,</span>
        {' '}
        Человек №3596941
      </h1>
      <button
        type="button"
        className="button button-status"
        onClick={() => {
          const nextStateStatus = stateStatus === 'change' ? 'unchanged' : 'change';
          setStateStatus(nextStateStatus);
        }}
      >
        Сменить статус

      </button>
      <div className="header-status">
        {stateStatus === 'change' ? (
          <FormStatus setStateStatus={setStateStatus} />
        ) : status}
      </div>
    </div>
  );
};

export default Header;
