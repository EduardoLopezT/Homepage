import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/Section';
import { ProjectGridItem } from '../components/Grid-Item';
import thumbEncriptador from '../public/images/encriptador.jpeg';

const Projects = () => {
  return (
    <Container maxW="container.md" p={5}>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="encrypter"
            title="Encriptador Js"
            thumbnail={thumbEncriptador}
          >
            Challenge from Oracle+Alura Front End Formation
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="encriptador2"
            title="Encriptador Js"
            thumbnail={thumbEncriptador}
          >
            Challenge from Oracle+Alura Front End Formation
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="encriptador3"
            title="Encriptador Js"
            thumbnail={thumbEncriptador}
          >
            Challenge from Oracle+Alura Front End Formation
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
