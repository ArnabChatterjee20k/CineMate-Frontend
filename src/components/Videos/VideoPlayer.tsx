import { Box, createStyles } from "@mantine/core";
import React from "react";
import ReactHlsPlayer from "react-hls-player";
const useStyle = createStyles((theme) => ({
  player: {
    width: "60%",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));
export default function VideoPlayer() {
  const { classes } = useStyle();
  const playerRef = React.useRef(null);
  return (
    <Box className={classes.player}>
      <ReactHlsPlayer
        width="100%"
        playerRef={playerRef}
        controls={true}
        src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8
            "
      />
    </Box>
  );
}
