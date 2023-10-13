import { Box, createStyles } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import ReactHlsPlayer from "@gumlet/react-hls-player";

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
  const playerRef = useRef(null);
  const player = useRef(null);
  const [levels, setLevels] = useState([]);

  const onChangeBitrate = (event) => {
    if (player.current) {
      // currentLevel expect to receive an index of the levels array
      
      // playerRef.current.loadLevel(event.target.value)
      playerRef.current.loadLevel = event.target.value
    }
  };

  useEffect(() => {
    console.log("playtin");
    const handlePlay = () => {
      if (!levels.length) {
        setLevels(playerRef.current?.streamController.levels);
      }
    };
    console.log(levels);

    player.current.addEventListener("play", handlePlay);

    return () => {
      player.current.removeEventListener("play", handlePlay);
    };
  }, [levels.length]);

  return (
    <Box className={classes.player}>
      <select onChange={onChangeBitrate}>
        {levels.map((level, id) => (
          <option key={id} value={id}>
            {level.bitrate}
          </option>
        ))}
      </select>
      <ReactHlsPlayer
        playerRef={player}
        autoplay={levels.length}
        style={{ borderRadius: 5 }}
        hlsConfig={{
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          lowLatencyMode: true,
        }}
        width="100%"
        controls={true}
        getHLSRef={(hlsObj) => {
          playerRef.current = hlsObj;
        }}
        src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
      />
    </Box>
  );
}
