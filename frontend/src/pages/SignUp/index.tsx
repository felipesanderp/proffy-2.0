import React, { useRef, useCallback, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import * as Yup from 'yup';
import { Form } from '@unform/web'; 
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, BackIcon, Background, Content, AnimationContainer, EyeVisible } from './styles';

import { useSuccess } from '../../hooks/success';
import { useToast } from '../../hooks/toast'
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignUpData {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const { addSuccess } = useSuccess();

  const handleToggleVisibility = useCallback(() => {
    setVisibility(!visibility);
  }, [visibility]);

  const handleSubmit = useCallback(
    async (data: SignUpData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          lastname: Yup.string().required('Sobrenome Obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail Obrigatório'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        api.post('/users', data);
        
        addSuccess({
          title: 'Cadastro concluído',
          description: 'Agora você faz parte da plataforma da Proffy.',
          subdescription: 'Tenha uma ótima experiência.',
          buttonText: 'Fazer login',
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer o cadastro, tente novamente',
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
            <h1>Cadastro</h1>
            <p>
              Preencha os dados abaixo <br />
              para começar.
            </p>

            <Input name="name" placeholder="Nome"  />
            <Input name="lastname" placeholder="Sobrenome"  />
            <Input name="email" placeholder="Email"  />
            <Input
              name="password"
              type={visibility ? 'text' : 'password'}
              placeholder="Senha"
              toggleVisibility={handleToggleVisibility}
              icon={visibility ? EyeVisible : AiOutlineEye}
            />
            
            <Button type="submit" loading={loading}>Concluir Cadastro</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
}

export default SignUp;