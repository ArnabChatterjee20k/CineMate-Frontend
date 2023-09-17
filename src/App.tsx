import { AppShell, useMantineTheme, Box } from "@mantine/core";
import { Nav } from "./layouts/Nav";
import { BrowserRouter } from "react-router-dom";
import SideNav from "./layouts/SideNav";
import SideNavContextProvider from "./context/SideNavContext";
import Home from "./pages/Home";

function App() {
  const theme = useMantineTheme();
  return (
    <BrowserRouter>
      <SideNavContextProvider>
        <AppShell
          styles={{
            main: { backgroundColor: theme.colors.dark[6],width:"70%" },
          }}
          header={<Nav />}
          navbar={<SideNav />}
        >
          <Box sx={{padding:"2rem"}}>
            <Home />
          </Box>
        </AppShell>
      </SideNavContextProvider>
    </BrowserRouter>
  );
}
export default App;
