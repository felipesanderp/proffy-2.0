import styled, { keyframes } from 'styled-components';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

import signInBackground from '../../assets/images/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  overflow: hidden;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 650px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-align: left;

  animation: ${appearFromRight} 1s;

  form {
    width: 352px;
    margin-top: 100px;

  h1 {
    color: var(--color-text-title);
    font-size: 3.6rem;
    margin-bottom: 46px;
  }

  .remember-forgot {
      display: flex;
      align-items: center;

      > input {
        width: 24px;
        height: 24px;
        border-radius: 8px;
        margin-top: 24px;
        border: 1px solid var(--color-line-in-white);
        background-color: var(--color-box-footer);
        cursor: pointer;
      }

      > span {
        font-size: 1.4rem;
        color: var(--color-text-complement);
        margin-left: 16px;
        display: flex;
        align-self: flex-end;
      }

      > a {
        text-decoration: none;
        font-size: 1.4rem;
        color: var(--color-text-complement);

        display: flex;
        align-self: flex-end;
        margin-left: 72px;
        transition: all 0.2s;

        &:hover {
          text-decoration: underline;
          color: var(--color-text-base);
        }
      }
    }
  }
`;


export const FormFooter = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 50px;

  .signup {
    display: flex;
    flex-direction: column;
    margin-right: 130px; 

    p {
      font-size: 1.6rem;
      color: var(--color-text-base);
    }

    a {
      color: var(--color-primary);
      font-weight: 600;
      transition: color 0.2s;

      &:hover {
      color: var(--color-primary-darker);
      }
   }
  }

  .info {
    display: flex;
    align-items: center;

    > span {
      color: var(--color-text-complement);
      font-size: 1.2rem;
    }

    > img {
      width: 14px;
      height: 14px;
      margin-left: 8px;
    }
  }
`;

export const EyeVisible = styled(AiOutlineEyeInvisible)`
  fill: var(--color-primary);
`;
