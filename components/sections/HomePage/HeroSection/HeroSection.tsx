import React from 'react';
import { styled } from '../../../../stitches.config';
import { Heading, Container, Flex, Button, Section } from '../../../modules';

const HeroSection = () => {
  return (
    <>
      <Section size="3">
        <Container width="small" as="section">
          <Flex direction="column" align="center" gap="6">
            <Heading as="h1" size="4">
              EME Studio Boilerplate
            </Heading>
            <Button>Main</Button>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container width="large" background="true">
          <Heading>Hola</Heading>
        </Container>
      </Section>
    </>
  );
};

export default HeroSection;
