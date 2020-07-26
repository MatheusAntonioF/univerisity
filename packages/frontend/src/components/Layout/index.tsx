import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, MainHeader, Wrapper } from './styles';

import logo from '../../assets/logo.svg';

import Button from '../Button';

const Layout: React.FC = ({ children }) => {
  const [, choosenPath] = window.location.pathname.split('/');

  return (
    <Container>
      <Header>
        <MainHeader>
          <div className="logo-group">
            <img src={logo} alt="Logo Icon" />
            <span>UNIVERSIDADE</span>
          </div>

          <div className="button-group">
            <Link to="/students">
              <Button
                fontSize={20}
                isActive={choosenPath === 'students'}
                color="secondary"
              >
                ESTUDANTES
              </Button>
            </Link>
            <Link to="/offeredClass">
              <Button
                fontSize={20}
                isActive={choosenPath === 'offeredClass'}
                color="secondary"
              >
                CLASSES
              </Button>
            </Link>
          </div>
        </MainHeader>
      </Header>
      <Wrapper className="teste">{children}</Wrapper>
    </Container>
  );
};

export default Layout;
