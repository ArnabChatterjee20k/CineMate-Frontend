import { Title,DefaultMantineColor } from '@mantine/core';

interface LogoProps{
    color:DefaultMantineColor
}

export default function Logo({color}:LogoProps) {
  return (
    <Title order={4} color={color}>CineMate</Title>
  )
}
