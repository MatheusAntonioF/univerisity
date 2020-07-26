import styled from 'styled-components';

import { IPropsButton } from './index';

export const ButtonComponent = styled.button<IPropsButton>`
  display: flex;
  align-items: center;

  color: ${props => props.theme.text.main};

  font-size: ${props => props.fontSize}px;

  background: transparent;

  text-transform: uppercase;

  padding-bottom: 2px;

  border-bottom: 2px solid ${props => props.theme[props.color].main};

  transition: all 200ms ease;

  &:hover {
    cursor: pointer;

    opacity: 0.5;
    transform: scale(1.05);
  }
`;
