import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  List,
  ListItem,
  Link
} from '@chakra-ui/react';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/Bio';
import Layout from '../components/layouts/article';
import { IoLogoLinkedin, IoLogoGithub, IoMail, IoBody } from 'react-icons/io5';
import { FcBusinessContact, FcLike } from 'react-icons/fc';
import { FaTimeline } from 'react-icons/fa6';

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md" p={5}>
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IoBody fontSize={25} />
            <Heading as="h3" variant="section-title" ml={2}>
              About me
            </Heading>
          </div>
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
            <Link href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My Portfolio
              </Button>
            </Link>
          </Box>
        </Section>
        <Section delay={0.2}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaTimeline fontSize={25} />
            <Heading as="h3" variant="section-title" ml={2}>
              Bio
            </Heading>
          </div>
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FcLike fontSize={25} />
            <Heading as="h3" variant="section-title" ml={2}>
              What i like
            </Heading>
          </div>
          <Paragraph>
            Programming, Music, Videogames, Budgies, Anime and Series
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FcBusinessContact fontSize={25} />
            <Heading as="h3" variant="section-title" ml={2}>
              Social
            </Heading>
          </div>
          <List>
            <ListItem>
              <Link href="https://github.com/EduardoLopezT" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<IoLogoGithub />}
                >
                  &lt;EduardoLopezT&frasl;&gt;
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/eduardolopezt/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<IoLogoLinkedin />}
                >
                  EduardoLopezT
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:eduardo.lopez20732@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<IoMail />}
                >
                  eduardo.lopez20732@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
