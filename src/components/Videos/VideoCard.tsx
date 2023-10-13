import {
  Avatar,
  Card,
  Text,
  Image,
  Flex,
  useMantineTheme,
} from "@mantine/core";
import VideoCardProps from "../../interfaces/VideoCard.interface";
import useIsMobile from "../../hooks/useIsMobile";
import { Link } from "react-router-dom";

const width = 300;
export default function VideoCard({
  id,
  title,
  author,
  thumbnail,
  timestamp,
  views,
  videoURL,
  profilepicURL,
}: VideoCardProps) {
  const isMobile = useIsMobile();
  const theme = useMantineTheme();
  return (
    <Card
      component={Link}
      to={`/videos/${id}`}
      padding="xs"
      radius="md"
      withBorder
      sx={{
        cursor: "pointer",
        maxWidth: isMobile ? "100%" : width,
        "&:hover": {
          backgroundColor: theme.colors.dark[4],
          boxShadow: theme.shadows.sm,
        },
      }}
    >
      <Card.Section>
        <Image mx="auto" src={thumbnail} alt="Random image" width="100%" />
      </Card.Section>

      <Flex align="flex-start" mt="md" gap={15}>
        <AuthorAvatar author={author} profilepicURL={profilepicURL} />
        <Flex align="flex-start" direction="column" sx={{ width: width - 60 }}>
          <Text weight={500} truncate sx={{ width: "90%" }}>
            {title}
          </Text>
          <Flex justify="start" gap={8}>
            <Text color="dimmed">{views} Views</Text>
            <Text color="dimmed">|</Text>
            <Text color="dimmed">{timestamp}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

function AuthorAvatar({
  profilepicURL,
  author,
}: {
  profilepicURL: string | null;
  author: string;
}) {
  if (profilepicURL) return <Avatar src={profilepicURL} radius="lg" />;
  return (
    <Avatar radius="lg" color="cyan">
      {author[0]}
    </Avatar>
  );
}
