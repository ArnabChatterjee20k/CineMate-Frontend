import { Grid } from "@mantine/core";
import VideoCard from "../components/Videos/VideoCard";
import DummyVideoData from "../data/DummyVideoData";
import useIsMobile from "../hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <Grid gutter="lg" sx={{ rowGap: 20 }}>
      {DummyVideoData.map((video) => (
        <Grid.Col span={isMobile ? 12 : 3}>
          <VideoCard {...video} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
