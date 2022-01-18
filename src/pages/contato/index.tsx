import { ChatIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Input } from '../../shared/components/Form/Input';
import Image from 'next/image';
import Header from '../../shared/components/Header';
import { toast } from 'react-toastify';
import Footer from '../../shared/Footer';
import luanaFoto from '../../../public/images/luana-foto.jpg';
import { useState } from 'react';

export default function Contact() {
  function toastSucess() {
    toast.success('Sucesso! Obrigado pelo contato.', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
  const [loading, setLoading] = useState(false);
  const simulatorRequest = () => {
    setLoading(true);
    setTimeout(() => {
      toastSucess();
      setLoading(false);
    }, 1000);
  };
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    xl: false,
    lg: false,
  });
  return (
    <>
      <Header />

      <Flex
        maxW="1440px"
        pt={['4rem', '4rem', '8rem']}
        h={['100%', '100%', '100%', '100%', '100%']}
        mb={['5rem', '5rem', '2rem']}
        mx="auto"
        align="center"
        justify="center"
        flexDir={['column', 'column', 'row']}
        px={['2.5rem']}
      >
        <Flex
          bgImage="url('/images/luana-foto.jpg')"
          bgRepeat="no-repeat"
          bgPosition={['-60px', '-60px', '0']}
          bgSize={['cover', 'cover', 'cover', 'cover']}
          mr="auto"
          borderRadius="15px"
          boxShadow="2xl"
          h={['400px', '400px', '400px', '600px']}
          w="100%"
          maxW={['700px']}
          flexDir="column"
          mt={['5rem', '5rem', '0']}
        >
          <Heading
            fontFamily="Raleway"
            fontSize={['28px', '28px', '32px', '42px']}
            maxW={['250px', '250px', '390px']}
            fontWeight="700"
            px="2rem"
            color="white"
            mt={['2.4rem', '2.4rem', '5rem']}
          >
            Quer ajudar a modernizar o Brasil?
          </Heading>
          <NextLink
            href="https://api.whatsapp.com/send?phone=5511939430303&text=Ol%C3%A1%20Luana,%20quero%20participar%20da%20mudan%C3%A7a%20na%20pol%C3%ADtica!"
            passHref
          >
            <Button
              mt="3rem"
              mx="2rem"
              w={['160px', '160px', '200px']}
              h={['45px', '45px', '60px', '60px']}
              fontFamily="Raleway"
              fontSize={['14px', '14px', '16px']}
              bgColor="#690da6"
              color="white"
              borderRadius="0"
              boxShadow="2xl"
              _hover={{
                background: 'white',
                color: '#690da6',
                border: '1px solid #690da6',
              }}
              _focus={{
                border: 'none',
                outline: 'transparent',
              }}
              _active={{
                border: 'none',
                outline: 'transparent',
              }}
            >
              <Icon fontSize="0.85rem" mr="6px" as={ChatIcon} /> Fale comigo!
            </Button>
          </NextLink>
        </Flex>
        <Flex
          mt={['4rem', '4rem', '0']}
          mx="auto"
          px={['1rem', '1rem', '4rem']}
          flex="1"
          ml="auto"
          flexDir="column"
          w="100%"
        >
          <Heading
            mt={['0', '0', '1.5rem']}
            fontSize={['32px', '32px', '48px']}
            fontWeight="bold"
            mx="auto"
          >
            Inscreva-se
          </Heading>
          <Input
            mt={['1.5rem', '1.5rem', '4rem']}
            h="60px"
            label="Seu nome"
            name="name"
          />
          <Input mt="1rem" h="60px" label="Seu email" name="email" />
          <Input mt="1rem" h="60px" label="Seu WhatsApp" name="whatsapp" />
          <Input mt="1rem" h="60px" label="Seu Estado" name="state" />
          <Button
            bgColor="purple.900"
            color="white"
            w="200px"
            h="60px"
            ml={isMobile ? '' : 'auto'}
            mx={isMobile ? 'auto' : ''}
            mt={['10', '10', '4rem']}
            borderRadius="0"
            type="submit"
            boxShadow="2xl"
            _hover={{
              background: 'white',
              color: '#690da6',
              border: '1px solid #690da6',
            }}
            _focus={{
              border: 'none',
              outline: 'transparent',
            }}
            _active={{
              border: 'none',
              outline: 'transparent',
            }}
            onClick={() => simulatorRequest()}
          >
            {loading ? <Spinner /> : 'Enviar'}
          </Button>
        </Flex>
      </Flex>

      <Footer />
    </>
  );
}
