import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/Section';
import { WorkGridItem } from '../components/Grid-Item';
import thumbEncriptador from '../public/images/encriptador.jpeg';

const Works = () => {
  return (
    <Container maxW="container.md" p={5}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="encriptador"
            title="Encriptador Js"
            thumbnail={thumbEncriptador}
          >
            Challenge from Oracle+Alura Front End Formation
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="encriptador2"
            title="Encriptador Js"
            thumbnail={thumbEncriptador}
          >
            Challenge from Oracle+Alura Front End Formation
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="encriptador3"
            title="Encriptador Js"
            thumbnail={thumbEncriptador}
          >
            Challenge from Oracle+Alura Front End Formation
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
