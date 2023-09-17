import { useDisclosure } from "@mantine/hooks";
import { createContext, useContext, ReactNode } from "react";
import SideNavDisplay from "../interfaces/SideNavDisplay.interface";
import Prettify from "../interfaces/Prettify";

const SideNavContext = createContext<SideNavDisplay | null>(null);
export const useSideNavContext = () =>
  useContext(SideNavContext) as Prettify<SideNavDisplay>;

interface Props {
  children: ReactNode;
}

export default function SideNavContextProvider({ children }: Props) {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <SideNavContext.Provider value={{ opened, toggle }}>
      {children}
    </SideNavContext.Provider>
  );
}
