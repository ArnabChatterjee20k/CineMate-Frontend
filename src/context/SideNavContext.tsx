import { useDisclosure } from "@mantine/hooks";
import { createContext, useContext} from "react";
import SideNavDisplay from "../interfaces/SideNavDisplay.interface";
import Prettify from "../interfaces/Prettify";
import ChildrenProp from "../interfaces/ChildrenProps";
const SideNavContext = createContext<SideNavDisplay | null>(null);
export const useSideNavContext = () =>
  useContext(SideNavContext) as Prettify<SideNavDisplay>;

export default function SideNavContextProvider({ children }: ChildrenProp) {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <SideNavContext.Provider value={{ opened, toggle }}>
      {children}
    </SideNavContext.Provider>
  );
}
