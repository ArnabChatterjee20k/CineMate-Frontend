import { IconHome2, IconThumbUp, IconFolder } from "@tabler/icons-react";
import LinksDataInterface from "../interfaces/LinkDisplay.interface";

interface SideNavDataInterface extends LinksDataInterface {
  label: string;
}

const SideNavLinksData: SideNavDataInterface[] = [
  { label: "Home", link: "/", Icon: IconHome2 },
  { label: "Liked Videos", link: "/liked", Icon: IconThumbUp },
  { label: "Library", link: "/library", Icon: IconFolder },
];

export default SideNavLinksData