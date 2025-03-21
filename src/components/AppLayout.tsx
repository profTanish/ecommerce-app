import { Outlet } from "react-router-dom";
 import Footer from "./Footer";
 import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="max-w-container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;