import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Header, MainHeader } from './styles';

import logo from '../../assets/logo.svg';

import Button from '../Button';

const Layout: React.FC = () => {
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
              <Button fontSize={20} color="secondary">
                ESTUDANTES
              </Button>
            </Link>
            <Link to="/offeredClass">
              <Button fontSize={20} color="secondary">
                CLASSES
              </Button>
            </Link>
          </div>
        </MainHeader>
      </Header>
    </Container>
  );
};

export default Layout;
