import Link from 'next/link';
import React from 'react';
import { styled } from '../../../stitches.config';
import { Container, Section, Flex } from '../../modules';

const StyledSection = styled(Section, {
  backgroundColor: '$secondary8',
});

const StyledImage = styled('img', {
  width: '100px',
});

const Header = () => {
  return (
    <StyledSection as="header" size="1">
      <Container width="large" gutterY="false">
        <Flex direction="row" justify="between" align="center">
          <StyledImage src="https://emestudio.dev/wp-content/uploads/2021/10/eme_isotipo_600x600_azul.jpeg" />
          <Flex gap="6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </Flex>
        </Flex>
      </Container>
    </StyledSection>
  );
};

export default Header;
