import React from 'react';
import { useAppSelector } from '../../store';
import { Route, RouteProps, redirect } from 'react-router-dom';

function PrivateRoute(props: RouteProps) {
  const user = useAppSelector((state) => state.userReducer.data);

  if (!user) redirect('/login');
  return <Route {...props} />;
}

export default PrivateRoute;
