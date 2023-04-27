import React from 'react';
import { Route, RouteProps, redirect } from 'react-router-dom';

import { useAppSelector } from '../../store';

function PrivateRoute(props: RouteProps) {
  const user = useAppSelector((state) => state.userReducer.data);

  if (!user) redirect('/login');
  return <Route {...props} />;
}

export default PrivateRoute;
