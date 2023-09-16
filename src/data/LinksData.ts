import { IconVideoPlus, IconBell, TablerIconsProps } from "@tabler/icons-react";
import { FunctionComponent } from "react";

interface LinksDataInterface {
  link: string;
  Icon: FunctionComponent<TablerIconsProps>;
}

const LinksData: LinksDataInterface[] = [
  {
    link: "/notifications",
    Icon: IconBell,
  },
  {
    link: "/upload",
    Icon: IconVideoPlus,
  },

];

export default LinksData;
