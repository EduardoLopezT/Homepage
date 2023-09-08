import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/Project';
import Paragraph from '../../components/Paragraph';
import Layout from '../../components/layouts/article';
import styled from '@emotion/styled';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';

const SpanStyled = styled.span`
  vertical-align: middle;
  display: inline-flex;
  gap: 2px;
`;

const Project = () => {
  return (
    <Layout title="Encrypter Js">
      <Container maxW="container.md" p={5}>
        <Title>
          Encrypter <Badge>2023</Badge>
        </Title>
        <Paragraph>
          A web application created for the Oracle Next Education course to
          practice HTML, CSS, and JavaScript concepts. The application encrypts
          the text you enter, and you can also input encrypted text to decrypt
          it
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem alignItems="center">
            <Meta>Website</Meta>
            <Link
              href="https://eduardolopezt.github.io/Challenge-Front/"
              verticalAlign="middle"
            >
              https://eduardolopezt.github.io/Challenge-Front/
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
        <ProjectImage src="/images/encriptador.jpeg" />
      </Container>
    </Layout>
  );
};

export default Project;
