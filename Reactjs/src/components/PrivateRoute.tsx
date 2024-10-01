import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const nav = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated) {
      nav("/login"); 
    }
  }, [isAuthenticated, nav]); 

  if (!isAuthenticated) {
    return null; 
  }

  return <>{children}</>;
};

export default ProtectedRoute;
