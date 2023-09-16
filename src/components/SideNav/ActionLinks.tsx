import SideNavLinksData from "../../data/SideNavLinksData";
import { Group, NavLink } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

export default function ActionLinks() {
  const { pathname } = useLocation();
  
  return (
    <Group spacing={18}>
      {SideNavLinksData.map(({ Icon, label, link }) => {
        return (
          <NavLink
            color="gray"
            component={Link}
            to={link}
            label={label}
            icon={<Icon color="white" stroke={1.5} />}
            active={pathname === link}
          />
        );
      })}
    </Group>
  );
}
