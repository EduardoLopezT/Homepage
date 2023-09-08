import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/Section';
import { ProjectGridItem } from '../components/Grid-Item';
import { LuFolderHeart } from 'react-icons/lu';
const { projects } = require('../data/dataProjects');

const Projects = () => {
  return (
    <Container maxW="container.md" p={5}>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '7px' }}
      >
        <LuFolderHeart fontSize={25} />
        <Heading
          as="h3"
          fontSize={20}
          mb={4}
          variant="section-title"
          verticalAlign="middle"
          ml={2}
        >
          Projects
        </Heading>
      </div>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {projects.map(project => {
          return (
            <Section key={project.id}>
              <ProjectGridItem
                id={project.id}
                title={project.projectName}
                thumbnail={`/images/${project.projectImage}`}
              >
                {project.title}
              </ProjectGridItem>
            </Section>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
