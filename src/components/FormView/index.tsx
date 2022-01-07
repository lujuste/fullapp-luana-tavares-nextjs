import { Flex, Heading, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { Input } from '../../shared/components/Form/Input';
import luanaFoto from '../../../public/images/luana-foto.jpg';

export default function FormView() {
  return (
    <Flex
      bgColor="#F5F5F5"
      maxW="1440px"
      h="600px"
      mb="2rem"
      mx="auto"
      justify="center"
      px="1.5rem"
    >
      <Flex
        bgImage="url('/images/luana-foto.jpg')"
        bgRepeat="no-repeat"
        bgSize="contain"
        position="relative"
        mr="auto"
        borderRadius="15px"
        boxShadow="2xl"
        h="600px"
        w="100%"
        maxW="700px"
        flexDir="column"
      >
        <Heading
          fontFamily="Raleway"
          fontSize="48px"
          maxW="450px"
          fontWeight="700"
          px="2rem"
          color="white"
          mt="5rem"
        >
          Quer ajudar a modernizar o Brasil?
        </Heading>
        <Button
          mt="3rem"
          mx="2rem"
          w="200px"
          h="60px"
          fontFamily="Roboto"
          bgColor="#690da6"
          color="white"
          borderRadius="0"
          boxShadow="2xl"
        >
          Assinar petições
        </Button>
      </Flex>
      <Flex px="4rem" flex="1" ml="auto" flexDir="column">
        <Heading mt="1.5rem" fontSize="48px" fontWeight="bold" mx="auto">
          Inscreva-se
        </Heading>
        <Input mt="4rem" h="60px" label="Seu nome" name="name" />
        <Input mt="1rem" h="60px" label="Seu email" name="email" />
        <Input mt="1rem" h="60px" label="Seu WhatsApp" name="whatsapp" />
        <Input mt="1rem" h="60px" label="Seu Estado" name="state" />
        <Button
          bgColor="purple.900"
          color="white"
          w="200px"
          h="60px"
          ml="auto"
          mt="4rem"
          borderRadius="0"
          type="submit"
          boxShadow="2xl"
        >
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
}
