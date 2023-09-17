import { Drawer, Navbar } from "@mantine/core";
import ActionLinks from "../components/SideNav/ActionLinks";
import useIsMobile from "../hooks/useIsMobile";
import { useSideNavContext } from "../context/SideNavContext";

export default function SideNav() {
  const isMobile = useIsMobile();
  const { opened, toggle } = useSideNavContext();

  if (isMobile)
    return (
      <Drawer opened={opened} size="75%" onClose={toggle}>
        <ActionLinks />
      </Drawer>
    );
  else
    return (
      <Navbar fixed p="xs" width={{ base: 200 }}>
        <Navbar.Section grow mt="md">
          <ActionLinks />
        </Navbar.Section>
      </Navbar>
    );
}
