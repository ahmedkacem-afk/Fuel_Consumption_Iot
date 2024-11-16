import React, { useState, useEffect } from "react";
import LoadingPage from "./components/loadingPage";
import DashboardLayoutSidebarHidden from "./components/dashboardLayout";

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
        <DashboardLayoutSidebarHidden/>
      )}
     
    </div>
  );
};

export default FuelBarrel;
