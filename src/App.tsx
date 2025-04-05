import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import StorePage from "./pages/StorePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import AuthLayout from "./features/authentication/AuthLayout";
import SignupForm from "./features/authentication/forms/SignupForm.tsx";
import LoginForm from "./features/authentication/forms/LoginForm";
import ProductDetails from "./features/products/ProductDetails.tsx";
import Cart from "./features/cart/Cart.tsx";
import CreateNewOrder from "./features/order/CreateNewOrder.tsx";
import Order from "./features/order/Order.tsx";
import Account from "./features/customer/Account.tsx";
import AccountGeneral from "./features/customer/AccountGeneral.tsx";
import AccountPassword from "./features/customer/AccountGeneral.tsx";

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
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Homepage />} />
            <Route path="store" element={<StorePage />} />
            <Route
              path="store/:category/:productId"
              element={<ProductDetails />}
            />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />

            <Route
              path="order/new"
              element={
                <ProtectedRoute>
                  <CreateNewOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="order/:orderId"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route
              path="account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="general" />} />
              <Route path="general" element={<AccountGeneral />} />
              <Route path="password" element={<AccountPassword />} />
            </Route>
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App
