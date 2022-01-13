import {
  Flex,
  Grid,
  GridItem,
  Text,
  Button,
  List,
  ListItem,
  Heading,
  useBreakpointValue,
  Divider,
  Image,
  Spinner,
  Icon,
} from '@chakra-ui/react';
import IconCall from './icons/IconCall';
import IconMail from './icons/IconMain';
import { Input } from '../components/Form/Input';
import LocationIcon from './icons/LocationIcon';
import IconInstagram from './icons/IconInstagram';
import IconFacebook from './icons/IconFacebook';
import IconLinkedin from './icons/IconLinkedin';

import headerLogo from '../../../public/images/luanaLogo3.svg';

import { toast } from 'react-toastify';

import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { FieldError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useState } from 'react';

interface InputProps {
  email?: string;
  errors?: FieldError;
}

interface IDataProps {
  contact: {
    email: string;
  };
}

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  function toastSucess() {
    toast.success('Sucesso! Obrigado pelo contato.', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  function tostFailure() {
    toast.error('Este email já está cadastrado!', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  const formSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório.').email('Email inválido.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<InputProps> = async data => {};

  console.log(errors);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    xl: true,
  });

  return (
    <>
      <Flex
        as="footer"
        w="100%"
        h={['100%', '100%', '100%', '296px']}
        bgColor="purple.900"
        mt={['2rem', '2rem', '0rem']}
        mx="auto"
        justify="center"
        align="center"
        alignItems="center"
      >
        {isWideVersion ? (
          <>
            <Flex
              maxW={1400}
              h="100%"
              w="100%"
              mx="auto"
              alignItems="center"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Grid
                mx="2rem"
                h="80%"
                py="2rem"
                templateColumns="repeat(4, 1fr)"
                gap={20}
              >
                <Flex justify="space-around" flexDir="column">
                  <Flex mt="-2rem" ml="-1.5rem">
                    <Icon as={headerLogo} fontSize="10rem" />
                  </Flex>
                  <Flex
                    mt="-7.5rem"
                    maxW="100px"
                    w="100%"
                    justify="space-between"
                  >
                    <IconInstagram />
                    <IconFacebook />
                    <IconLinkedin />
                  </Flex>
                </Flex>

                <Flex
                  justify={['center', 'center', 'space-around']}
                  flexDir="column"
                >
                  <List color="white">
                    <ListItem fontFamily="Raleway" fontWeight="700" mb="1rem">
                      Navegação
                    </ListItem>

                    <ListItem mb="1rem">Novidades</ListItem>
                    <ListItem mb="1rem">Petições</ListItem>
                  </List>
                </Flex>
                <GridItem mt="1.5rem">
                  <List color="white">
                    <ListItem mb="1rem" fontFamily="Raleway" fontWeight="700">
                      Outros
                    </ListItem>
                    <ListItem mb="1rem">Curso</ListItem>
                    <ListItem mb="1rem">Contato</ListItem>
                  </List>
                </GridItem>
                <GridItem>
                  <Flex
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}
                    method="post"
                    flexDir="column"
                    mt="1rem"
                  >
                    <Text
                      as="h4"
                      fontSize="16px"
                      fontFamily="Raleway"
                      fontWeight="700"
                      color="white"
                      mb="1rem"
                    >
                      {' '}
                      Inscreva-se em nossa newsletter{' '}
                    </Text>
                    <Input
                      mb="0.5rem"
                      id="email"
                      name="email"
                      type="email"
                      borderRadius="0"
                      label="Seu email"
                      {...register('email')}
                      error={errors.email}
                    />

                    <Button
                      mb="1rem"
                      border="solid 1px #fff"
                      color="purple.900"
                      h="45px"
                      borderRadius="0"
                      bgColor="white"
                      _hover={{ bgColor: 'purple.900', color: 'white' }}
                      type="submit"
                    >
                      {loading ? <Spinner /> : 'Enviar'}
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>

              <Flex
                justify="center"
                alignItems="center"
                align="center"
                mx="auto"
              >
                <Text fontSize="14px" color="#ffffff">
                  Copyright © 2022 Luana Tavares - All rights reserved.
                </Text>
              </Flex>
            </Flex>
          </>
        ) : (
          <Flex
            maxW={780}
            px="2rem"
            h="100%"
            w="100%"
            my="2rem"
            mx="auto"
            flexDir={['column']}
          >
            <Flex mt="1.5rem" justify="space-around">
              <Flex flexDir="column">
                <Heading
                  mb="0.5rem"
                  fontFamily="Raleway"
                  color="white"
                  fontSize="16px"
                >
                  Navegação
                </Heading>
                <Divider
                  color="white"
                  size="10px"
                  mb="0.5rem"
                  orientation="horizontal"
                />
                <List color="white">
                  <ListItem mt="1rem">Novidades</ListItem>
                  <ListItem mt="1rem">Cursos</ListItem>
                </List>
              </Flex>
              <Flex flexDir="column">
                <Heading
                  mb="0.5rem"
                  fontFamily="Raleway"
                  color="white"
                  fontSize="16px"
                >
                  Outros
                </Heading>
                <Divider
                  color="white"
                  size="10px"
                  mb="0.5rem"
                  orientation="horizontal"
                />
                <List color="white">
                  <ListItem mt="1rem">Petições</ListItem>
                  <ListItem>Contato</ListItem>
                </List>
              </Flex>
            </Flex>
            <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir="column">
              <Heading
                mt="3.5rem"
                fontFamily="Raleway"
                color="white"
                fontSize="16px"
                mb="1rem"
              >
                Inscreva-se em nossa newsletter
              </Heading>
              <Input
                mb="0.5rem"
                id="email"
                name="email"
                type="email"
                label="Seu email"
                h="60px"
                {...register('email')}
                error={errors.email}
              />
              <Button
                h="60px"
                mb="3rem"
                border="1px solid #fff"
                bgColor="pink.500"
                color="white"
                _hover={{ bgColor: 'transparent', border: '1px solid #FFF' }}
                type="submit"
              >
                {loading ? <Spinner /> : 'Enviar'}
              </Button>
            </Flex>
            <Flex
              mx="auto"
              maxW="100px"
              w="100%"
              justifyContent="space-between"
            >
              <IconInstagram />
              <IconFacebook />
              <IconLinkedin />
            </Flex>
            <Flex mt={['2rem']} maxW="340px" w="100%" color="white" mx="auto">
              <Text
                mb={['2rem', '2rem', '0']}
                fontSize="12px"
                mx="auto"
                textAlign="center"
              >
                Copyright © 2022 Luana Tavares - All rights reserved.
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
}
