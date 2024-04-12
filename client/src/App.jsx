import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./app.scss";
import { AppLayout } from "_core";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <AppLayout />
        <Footer />
      </QueryClientProvider>
    );
  };

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
