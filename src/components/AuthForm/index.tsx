import React from 'react';
import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';

import Login from './Login';
import Registration from './Registration';
import './AuthForm.scss';

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
