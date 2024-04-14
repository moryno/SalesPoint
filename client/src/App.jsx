import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./app.scss";
import { AppLayout } from "_core";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "_redux/store/store";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <AppLayout />
            <Footer />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    );
  };

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
