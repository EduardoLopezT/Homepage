import Link from 'next/link';
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/Bio';
import Layout from '../components/layouts/article';

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md" p={5}>
        <Box
          borderRadius="lg"
          p={3}
          align="center"
          mb={6}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a full-stack developer based in Mexico!
        </Box>
        <Box display={{ md: 'flex', lg: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Eduardo Lopez
            </Heading>
            <p>Mechatronic Engineer / Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.900"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              maxHeight="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/pfp.jpg"
              width={200}
              height={200}
              alt="Profile Picture"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            Hello! I&apos;m a passionate 23 year old developer from Mexico,
            driven by an insatiable thirst for knowledge and a strong commitment
            to excellence in development. My journey in the programming world
            revolves around the desire to learn and conquer challenges.
          </Paragraph>
          <Paragraph>
            Always on the lookout for opportunities to grow and collaborate on
            meaningful projects, my enthusiasm for technology and a
            solution-oriented mindset enable me to confidently and creatively
            tackle new situations. Excited to participate in challenging
            projects that facilitate both learning and maximum contribution.
          </Paragraph>
          <Paragraph>
            For someone with passion, energy, and a determined development
            focus, I&apos;m prepared to join your team and create something
            great together!
          </Paragraph>
          <Box align="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </Link>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Guanajuato, Mexico.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Graduated as Software Developer (Focused on Java) at Cecyte
            Guanajuato with outstanding grades.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Bachelor&apos;s degree in Mechatronic Engineering specialized in
            Industry 4.0 at Tecnologico Nacional de Mexico en Celaya.
          </BioSection>
          <BioSection>
            <BioYear>2023 Jan-Jul</BioYear>
            Automation Intern at Deacero Aceria-Laminacion Celaya.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ♥
          </Heading>
          <Paragraph>
            Programming, Music, Videogames, Birds, Anime and Series
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
