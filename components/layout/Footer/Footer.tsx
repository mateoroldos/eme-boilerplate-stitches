import React from 'react';
import { Container, Section, Flex, Box, Text } from '../../modules';

const Footer = () => {
  return (
    <Section as="footer" size="1">
      <Container width="small">
        <Flex direction="row" justify="between" align="center">
          <Box>
            <Text>Hola</Text>
          </Box>
          <Box>
            <Text>Mundo</Text>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default Footer;
