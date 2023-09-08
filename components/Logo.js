import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: full;
  line-height: 20px;
  padding: 10px;
  &:hover img {
    transform: scale(1.2);
  }
`;

const Logo = () => {
  const codeImg = `/images/code-icon${useColorModeValue(
    '-light',
    '-dark'
  )}.png`;
  return (
    <Link href="/">
      <LogoBox>
        <Image src={codeImg} width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontWeight="bold"
          ml={1}
          fontSize={25}
        >
          Eduardo Lopez
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
