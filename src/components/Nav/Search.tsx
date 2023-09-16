import { useState } from "react";
import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function Search() {
  const [value, setValue] = useState("");

  return (
    <Autocomplete
      sx={(theme) => ({
        [theme.fn.smallerThan("xs")]: {
          display: "none",
        },
        width:"40%"
      })}
      icon={<IconSearch size="1rem" stroke={1.5} />}
      placeholder="search..."
      value={value}
      onChange={setValue}
      data={[]}
    />
  );
}
