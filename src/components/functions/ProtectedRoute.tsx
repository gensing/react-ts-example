import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  redirectUrl: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const { isAuthenticated, redirectUrl = "/" } = props;
  return isAuthenticated ? <Route {...props} /> : <Redirect to={redirectUrl} />;
};

//https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4-a
