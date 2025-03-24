import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import StorePage from "./pages/StorePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
 
 const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       staleTime: 0,
     },
   },
 });

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={false} />
 
       <BrowserRouter>
         <Routes>
           <Route
             element={
               <ProtectedRoute>
                 <AppLayout />
               </ProtectedRoute>
             }
           >
             <Route index element={<Navigate replace to="home" />} />
             <Route path="home" element={<Homepage />} />
             <Route path="store" element={<StorePage />} />
             <Route path="about" element={<About />} />
           </Route>

           <Route path="login" element={<Login />} />
           <Route path="*" element={<PageNotFound />} />
         </Routes>
       </BrowserRouter>
     </QueryClientProvider>
  );
}

export default App
