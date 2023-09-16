import { AppShell, useMantineTheme, Box } from "@mantine/core";
import { Nav } from "./layouts/Nav";
import { BrowserRouter } from "react-router-dom";
function App() {
  const theme = useMantineTheme();
  return (
    <BrowserRouter>
      <AppShell
        styles={{ main: { padding: 0 } }}
        header={<Nav />}
      >
        <Box
          sx={{
            margin: 0,
            padding: 0,
            backgroundColor: theme.colors.dark[8],
            minHeight: "100vh",
            width: "100%",
          }}
        ></Box>
      </AppShell>
    </BrowserRouter>
  );
}
export default App;
