import {
  createStyles,
  Header,
  Group,
  Burger,
  rem,
  Avatar,
  Box,
} from "@mantine/core";
import Logo from "../components/Logo";
import Search from "../components/Nav/Search";
import ActionLinks from "../components/Nav/ActionLinks";
import { useSideNavContext } from "../context/SideNavContext";
import { useAuthContext } from "../context/AuthContext";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    width: "100%",
  },

  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export function Nav() {
  const { opened, toggle } = useSideNavContext();
  const { user, signIn, signOut } = useAuthContext();
  const { classes } = useStyles();

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Logo color="white" />
        </Group>

        <Search />

        <Box sx={{ display: "flex" }}>
          <ActionLinks />
          <Avatar component="button" size="1.5em" radius="lg" sx={{cursor:"pointer"}} onClick={user ? signOut : signIn} src={user?.photoURL} />
        </Box>
      </div>
    </Header>
  );
}
