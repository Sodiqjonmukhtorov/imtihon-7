import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { CategoryList } from "./pages/category-list";
import { CategoryProduct } from "./pages/category-product";
import { CreateProduct } from "./pages/create-product";
import { Accaunt } from "./pages/accaunt";
import { Card } from "./pages/card";
import { CreateCategory } from "./pages/CreateCategory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="category-product/:id" element={<CategoryProduct />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="accaunt" element={<Accaunt />} />
          <Route path="card" element={<Card />} />
          <Route path="create-category" element={<CreateCategory />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
