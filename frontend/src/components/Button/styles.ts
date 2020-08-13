import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 40px;

  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 0;
  outline: 0;
  color: var(--color-button-text);
  background: var(--color-secundary);

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background: var(--color-secundary-dark);
  }

  &:disabled {
    background: var(--color-button-disable);
    cursor: initial;
    color: var(--color-text-complement);
  }
`;
