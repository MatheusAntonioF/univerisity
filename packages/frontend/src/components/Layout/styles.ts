import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 250px;

  background: ${props => props.theme.primary.light};
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  height: 100%;

  padding: 50px;

  margin: 0 auto;

  div.logo-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 231px;
      height: 145px;
    }

    span {
      font-size: 28px;
      color: ${props => props.theme.text.main};
    }
  }

  div.button-group {
    display: flex;
    align-items: flex-start;

    height: 100%;

    > a + a {
      margin-left: 25px;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 50px 10px;

  background: ${props => props.theme.primary.dark};

  max-width: 1200px;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`;
