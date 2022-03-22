import React from 'react';
import { styled } from '../../stitches.config';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const StyledMain = styled('main', {
  minHeight: '80vh',
  backgroundColor: '$canvas',
});

const Layout = (props) => {
  return (
    <div>
      <Header />
      <StyledMain>{props.children}</StyledMain>
      <Footer />
    </div>
  );
};

export default Layout;
