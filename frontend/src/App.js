import React, { useState, useEffect } from "react";
import LoadingPage from "./components/loadingPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrucksListing from "./pages/TrucksListing";
import TruckDashboard from "./pages/TruckDashboard";
import Layout from "./components/Layout";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
const FuelBarrel = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="trucklist" element={<TrucksListing />} />
              <Route path="trucklist/:truckid" element={<TruckDashboard />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default FuelBarrel;
