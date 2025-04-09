import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useUser } from "@/features/authentication/useUser";
import FullPageSpinner from "./FullPageSpinner";

const AppLayout = () => {
  const { isLoading } = useUser();

  if (isLoading) return <FullPageSpinner />;

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