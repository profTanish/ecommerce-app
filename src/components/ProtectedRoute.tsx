import { useUser } from "@/features/authentication/useUser";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

type ProtectedRouteType = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteType) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="h-screen bg-lightGray flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
};

export default ProtectedRoute;