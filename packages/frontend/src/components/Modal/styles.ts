import styled from 'styled-components';

import { IProps } from './index';

export const ModalComponent = styled.div<IProps>`
  display: flex;

  width: 400px;

  border-radius: 20px;

  background: orange;
`;

export const DivBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 100%;
  min-height: 100%;
  min-width: 100%;
  background: rgba(167, 167, 167, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
