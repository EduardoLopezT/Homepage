import Link from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        width={500}
        height={500}
        priority
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const ProjectGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <Link href={`/project/${id}`}>
        <LinkBox cursor="pointer">
          <div
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '1px 1px 3px gray'
            }}
          >
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              width={700}
              height={500}
              priority
            />
          </div>

          <Text mt={2} fontSize={20} fontWeight="medium">
            {title}
          </Text>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </Link>
    </Box>
  );
};

export const GridItemStyle = () => (
  <Global
    styles={`
  .grid-item-thumbnail{
    border-radius:12px;
  }
  `}
  />
);
