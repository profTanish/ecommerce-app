import { ReactNode } from "react";
 
type ProtectedRouteType = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteType) => {
  return children;
};

export default ProtectedRoute;