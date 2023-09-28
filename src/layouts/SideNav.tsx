import { Drawer, Navbar } from "@mantine/core";
import ActionLinks from "../components/SideNav/ActionLinks";
import useIsMobile from "../hooks/useIsMobile";
import { useSideNavContext } from "../context/SideNavContext";
import { useLocation } from "react-router-dom";

export default function SideNav() {
  const isMobile = useIsMobile();
  const { opened, toggle } = useSideNavContext();
  const {pathname} = useLocation()
  const WIDTH = isMobile ? 75 : 25
  
  if (isMobile || pathname!=="/videos")
    return (
      <Drawer opened={opened} size={`${WIDTH}%`} onClose={toggle}>
        <ActionLinks />
      </Drawer>
    );
  else
    return (
      <Navbar p="xs" width={{ base: 200 }}>
        <Navbar.Section grow mt="md">
          <ActionLinks />
        </Navbar.Section>
      </Navbar>
    );
}
