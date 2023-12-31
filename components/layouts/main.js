import Head from 'next/head';
import Navbar from '../Navbar';
import { Box, Container, Text } from '@chakra-ui/react';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Eduardo Lopez</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>
      <Container maxW="container.lg" textAlign="center">
        <Text fontWeight="medium">Eduardo Lopez | 2023</Text>
      </Container>
    </Box>
  );
};

export default Main;
