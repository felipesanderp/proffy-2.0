import React, { useRef, useCallback, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web'; 
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, BackIcon, Background, Content, AnimationContainer } from './styles';

import { useSuccess } from '../../hooks/success';
import { useToast } from '../../hooks/toast'
import Input from '../../components/Input';
import Button from '../../components/Button';

interface ForgotPasswordData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const { addSuccess } = useSuccess();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail Obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        api.post('/forgot-password', data);
        
        addSuccess({
          title: 'Redefinição enviada!',
          description: 'Boa, agora é só checar o e-mail que foi enviado para você',
          subdescription: 'redefinir sua senha e aproveitar os estudos.',
          buttonText: 'Voltar ao login',
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na redefinição de senha',
          description: 'Ocorreu um erro ao fazer a redefinição, tente novamente',
        });
      } finally {
        setLoading(false);
      }
    }, 
    [addSuccess, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Link to="/">
            <BackIcon size={25} />
          </Link>

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Eita, esqueceu <br /> sua senha?</h1>
            <p>
              Não esquenta, vamos dar um jeito nisso.
            </p>

            <Input name="email" placeholder="Email"  />
            
            <Button type="submit" loading={loading}>Enviar</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
}

export default ForgotPassword;