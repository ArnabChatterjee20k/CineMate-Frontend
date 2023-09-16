import React from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function useIsMobile():Boolean {
  return useMediaQuery("(max-width: 35.9375em)");
}
