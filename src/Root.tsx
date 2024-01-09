import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import UserPage from "./pages/user";
import ManagerPage from "./pages/manager";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/manager" element={<ManagerPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default Root;
