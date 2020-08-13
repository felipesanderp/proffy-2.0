import React, { ButtonHTMLAttributes } from 'react';
import { css } from "@emotion/core";
import { PulseLoader } from 'react-spinners';

import { Container } from './styles';

const override = css`
  margin-top: 8px;
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" disabled={loading} {...rest}>
    {loading 
      ? <PulseLoader size={10} css={override} margin={5} color={'#8257E5'} /> 
      : children
    }
  </Container>
);

export default Button;