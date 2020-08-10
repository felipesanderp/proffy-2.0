import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 44px;

  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 0;
  outline: 0;
  color: var(--color-text-complement);
  background: var(--color-button-disable);
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-secundary-dark);
    color: #fff;
    cursor: pointer;
    outline: 0;
  }
`;
