import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { useUser } from "./useUser";
import { useEffect } from "react";
import Spinner from "@/components/Spinner";
import Header from "@/components/Header";

const AuthLayout = () => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (isAuthenticated && !isLoading) navigate("/home");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <div className="h-screen bg-lightGray flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="min-h-screen grid grid-cols-[48rem] content-center justify-center gap-12">
      <Header />
      <Logo />
      <Outlet />
    </div>
  );
};

export default AuthLayout;