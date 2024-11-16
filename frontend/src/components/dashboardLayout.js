import * as React from "react";
import Box from "@mui/material/Box";

import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import Bermil from "./fuelLevel";
import MaintenanceReminder from "./maintenanceReminder";
import { LineChart } from "@mui/x-charts";
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent() {
return (
    <Box
        sx={(theme) => ({
            padding: theme.spacing(3, 0, -4, 0),
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor:
                theme.palette.mode === "light"
                    ? "#EEEEEE"
                    : theme.palette.background.default,
            height: "100vh",
            overflow: "hidden",
        })}
    >
        
            <div className="grid grid-col-1 grid-flow-rows gap-4 lg:grid-rows-2 lg:grid-flow-col ml-8 h-full overflow-auto">
                <Bermil />
                <MaintenanceReminder reminderDate="20-12-2024" />
            <div className="bg-slate-200 rounded-xl shadow-xl lg:ml-3">
                <h2 className="text-center font-sans font-bold mt-8 text-2xl">Fuel Consumption</h2>
                <LineChart
                    xAxis={[{ data: [1, 2, 3,4, 5, 8, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24] ,label: "hours"}]}
                    series={[
                        {
                            data: [30, 8.8, 8.5, 8.2, 8.1],label: "Fuel Consumption (litres)"
                        },
                    ]}
                    width={500}
                    height={300}
                />
            </div>
            </div>
            
        
    </Box>
);
}

DemoPageContent.propTypes = {};

function DashboardLayoutSidebarHidden() {
  const router = useDemoRouter("/fuelLevel");

  return (
    <AppProvider router={router} theme={demoTheme}>
      <DashboardLayout hideNavigation>
        <DemoPageContent />
      </DashboardLayout>
    </AppProvider>
  );
}

export default DashboardLayoutSidebarHidden;
