import * as React from 'react';
import Box from '@mui/material/Box';

import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import Bermil from './fuelLevel';
import MaintenanceReminder from "./maintenanceReminder";

const demoTheme = createTheme({
 
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
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
            minHeight: '54rem',
            padding: theme.spacing(3,0),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: theme.palette.mode === 'light' ? '#EEEEEE' : theme.palette.background.default,
        })}
    >
        <div className='flex flex-col ml-8'>
            <Bermil/>
            <MaintenanceReminder reminderDate="20-12-2024"/>
        </div>
        
    </Box>
);
}

DemoPageContent.propTypes = {

};

function DashboardLayoutSidebarHidden() {
  

  const router = useDemoRouter('/fuelLevel');

  

  return (
    <AppProvider router={router} theme={demoTheme}>
      <DashboardLayout hideNavigation>
        <DemoPageContent/>
      </DashboardLayout>
    </AppProvider>
  );
}


export default DashboardLayoutSidebarHidden;
