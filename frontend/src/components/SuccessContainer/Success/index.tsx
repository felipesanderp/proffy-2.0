import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import successIcon from '../../../assets/images/icons/success-check-icon.svg';

import { SuccessMessage, useSuccess } from '../../../hooks/success';

import { Container, Message, Button } from './styles';

interface SuccessProps {
  message: SuccessMessage;
  style: object;
}

const SuccessPage: React.FC<SuccessProps> = ({ message, style }) => {
  const { removeSuccess } = useSuccess();

  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeSuccess(message.id);

      history.push('/');
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeSuccess, message.id, history]);

  return (
    <Container style={style}>
       <Message>
        <img src={successIcon} alt="Sucesso"/>
          <h1>{message.title}</h1>
        <p>
          {message.description}
        </p>
        <span>
          {message.subdescription}
        </span>

      <Button type="button" onClick={() => removeSuccess(message.id)} >
        <Link to='/' >
          {message.buttonText}
        </Link>
      </Button>
      </Message>

    </Container>
  );
}

export default SuccessPage;