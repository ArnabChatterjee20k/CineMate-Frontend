import { Group, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";
import LinksData from "../../data/LinksData";
import { IconSearch } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  link: {
    "&:hover": {
      stroke: theme.colors.gray[6],
    },
  },
  search: {
    display:"none",
    [theme.fn.smallerThan("xs")]: {
      display: "block",
    },
  },
}));

export default function ActionLinks() {
  const { classes } = useStyles();
  return (
    <Group sx={{ marginInline: 15 }}>
      <Link to="/search">
        <IconSearch
          color="white"
          className={`${classes.link} ${classes.search}`}
        />
      </Link>
      {LinksData.map(({ link, Icon }) => (
        <Link to={link}>
          <Icon
            size="2rem"
            stroke={1.5}
            color="white"
            className={classes.link}
          />
        </Link>
      ))}
    </Group>
  );
}
