import { Outlet } from "react-router-dom";
 import Logo from "../../components/Logo";
 
 const AuthLayout = () => {
   return (
     <div className="min-h-screen grid grid-cols-[48rem] content-center justify-center gap-12">
       <Logo />
       <Outlet />
     </div>
   );
 };
 
 export default AuthLayout;