import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useUser } from "@/features/authentication/useUser";
import Spinner from "./Spinner";

const AppLayout = () => {
  const { isLoading } = useUser();

  if (isLoading)
    return (
      <div className="h-screen bg-lightGray flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <Header />
      <main>
        <div className="max-w-container mx-auto">
          <Outlet />
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;