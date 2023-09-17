import { createStyles, Header, Group, Burger, rem } from "@mantine/core";
import Logo from "../components/Logo";
import Search from "../components/Nav/Search";
import ActionLinks from "../components/Nav/ActionLinks";
import { useSideNavContext } from "../context/SideNavContext";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    opacity: 0.7,
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
  const {opened,toggle} = useSideNavContext()
  const { classes } = useStyles();

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Logo color="white" />
        </Group>

        <Search />

        <ActionLinks />
      </div>
    </Header>
  );
}
