import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: var(--color-box-footer);
  width: 100%;
  height: 72px;
  color: var(--color-text-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 8px;

  .border {
    border-left: 2px solid var(--color-box-footer);
    height: 48px;
    border-radius: 8px;

    ${(props) =>
    props.isFocused &&
    css`
      border-left-color: var(--color-primary);
    `}
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    position: relative;
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 24px;
    color: var(--color-text-base);
      
    &::placeholder {
      color: var(--color-text-complement);
    }
  }

  svg {
    margin-right: 24px;
    flex-shrink: 0;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 24;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const Eye = styled.div``;
