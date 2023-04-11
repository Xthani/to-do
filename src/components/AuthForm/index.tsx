import React from 'react';

import Login from './Login';
import './AuthForm.scss';
import Registration from './Registration';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isActive = searchParams.get('form') === 'registration';

  return (
    <div className={cn('forms', { active: isActive })}>
      <Login />
      <Registration />
    </div>
  );
}

export default AuthForm;
