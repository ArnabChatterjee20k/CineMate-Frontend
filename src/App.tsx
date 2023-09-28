import { AppShell, useMantineTheme, Box } from "@mantine/core";
import { Nav } from "./layouts/Nav";
import { BrowserRouter } from "react-router-dom";
import SideNav from "./layouts/SideNav";
import SideNavContextProvider from "./context/SideNavContext";
import UserRouter from "./components/routes/UserRouter";
import AuthContextProvider from "./context/AuthContext";

function App() {
  const theme = useMantineTheme();
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <SideNavContextProvider>
          <AppShell
            styles={{
              main: { backgroundColor: theme.colors.dark[6], width: "70%" },
            }}
            header={<Nav />}
            navbar={<SideNav />}
          >
            <Box sx={{ paddingBlock: "2rem" }}>
              <UserRouter />
            </Box>
          </AppShell>
        </SideNavContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
export default App;
