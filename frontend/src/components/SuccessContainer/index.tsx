import React from 'react';
import { useTransition } from 'react-spring';

import Success from './Success';
import { SuccessMessage } from '../../hooks/success';
import { Container } from './styles';

interface SuccessContainerProps {
  messages: SuccessMessage[];
}

const SuccessContainer: React.FC<SuccessContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Success key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default SuccessContainer;