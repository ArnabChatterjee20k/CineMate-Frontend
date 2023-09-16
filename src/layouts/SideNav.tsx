import { Drawer, Navbar } from "@mantine/core";
import ActionLinks from "../components/SideNav/ActionLinks";
import { useDisclosure } from "@mantine/hooks";
import useIsMobile from "../hooks/useIsMobile";

export default function SideNav() {
  const isMobile = useIsMobile();
  const [opened, { close }] = useDisclosure(true);

  if (isMobile)
    return (
      <Drawer opened={opened} size="75%" onClose={close}>
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
