import styled, { css } from 'styled-components';

import { IPropsButton } from './index';

const activeButton = css<IPropsButton>`
  border: 2px solid ${props => props.theme[props.color].main};

  padding: 5px 8px;

  border-radius: 5px;
`;

export const ButtonComponent = styled.button<IPropsButton>`
  display: flex;
  align-items: center;

  color: ${props => props.theme.text.main};

  font-size: ${props => props.fontSize || '16'}px;

  background: transparent;

  text-transform: uppercase;

  padding-bottom: 2px;

  border-bottom: 2px solid ${props => props.theme[props.color].main};

  transition: all 200ms ease;

  ${props => props.isActive && activeButton};

  &:hover {
    cursor: pointer;

    opacity: 0.5;
    transform: scale(1.05);
  }
`;
