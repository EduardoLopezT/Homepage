import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/Project';
import Paragraph from '../../components/Paragraph';
import Layout from '../../components/layouts/article';
import styled from '@emotion/styled';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { useSearchParams } from 'next/navigation';
import { findProjectById } from '../../data/dataProjects';
import { useEffect, useState } from 'react';
import NotFound from '../404';

const SpanStyled = styled.span`
  vertical-align: middle;
  display: inline-flex;
  gap: 2px;
`;

const Project = () => {
  const projectId = useSearchParams().get('id');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (projectId) {
      const data = findProjectById(parseInt(projectId));
      setData(data);
    }
  }, [projectId]);

  if (data) {
    const { projectName, year, description, website, projectImage } = data;
    return (
      <Layout title="Hola">
        <Container maxW="container.md" p={5}>
          <Title>
            {projectName} <Badge>{year}</Badge>
          </Title>
          <Paragraph>{description}</Paragraph>
          <List ml={4} my={4}>
            <ListItem alignItems="center">
              <Meta>Website</Meta>
              <Link href={website} verticalAlign="middle">
                {website}
                <ExternalLinkIcon mx={2} verticalAlign="center" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <SpanStyled>
                <IoLogoHtml5 fontSize={20} color="#F06529" />
                <IoLogoCss3 fontSize={20} color="#2965f1" />
                <IoLogoJavascript fontSize={20} color="#F0DB4F" />
              </SpanStyled>
            </ListItem>
          </List>
          <ProjectImage src={`/images/${projectImage}`} />
        </Container>
      </Layout>
    );
  } else {
    if (data === false) {
      return <NotFound />;
    }
    // Muestra NotFound solo cuando data no está disponible
  }
};

export default Project;
