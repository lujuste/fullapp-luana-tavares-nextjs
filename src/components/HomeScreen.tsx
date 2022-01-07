import { Flex, Heading, Text, Button, Box } from '@chakra-ui/react';
import Image from 'next/image';

import { ChevronDownIcon } from '@chakra-ui/icons';

export default function HomeScreen() {
  return (
    <Flex
      bgImage="url('/images/luana-tavares.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      flexDir="column"
      w="100%"
      h="105vh"
      mx="auto"
      justify="center"
      overflowX="hidden"
      boxShadow="2xl"
      className={'mask'}
    >
      <Flex
        align="center"
        justify="space-between"
        mx="auto"
        maxW="1400px"
        h="auto"
        px="2.5rem"
      >
        <Flex
          mx="2rem"
          flexDir="column"
          justify="space-between"
          maxW="700px"
          h="420px"
        >
          <Heading
            fontSize="72px"
            fontFamily="Raleway"
            fontWeight="400"
            color="white"
          >
            Não podemos{' '}
            <Text fontWeight="600" px="1rem" w="590px" bgColor="pink.300">
              desistir do brasil
            </Text>
          </Heading>
          <Text
            color="white"
            fontSize="20px"
            fontWeight="400"
            fontFamily="Roboto"
          >
            👋 Bem vindo(a), conheça Luana Tavares,
          </Text>
          <Text
            color="white"
            fontSize="20px"
            fontWeight="400"
            fontFamily="Roboto"
            maxW="550px"
          >
            Luana Tavares é especialista em Políticas Públicas e Ativista para
            modernização do Estado, Administradora, publicitária e
            desenvolvedora de lideranças.
          </Text>
          <Flex>
            {' '}
            <Button
              fontWeight="600"
              fontFamily="Roboto"
              height="50px"
              borderRadius="none"
              bgColor="pink.300"
              color="white"
            >
              Quero fazer parte da mudança
            </Button>
            <Button
              ml="2rem"
              mt="0.5rem"
              bgColor="transparent"
              fontWeight="400"
              color="white"
              fontSize="16px"
            >
              Saiba mais <ChevronDownIcon boxSize="25px" />
            </Button>
          </Flex>
        </Flex>
        <Flex mt="2rem" ml="3rem" flex="1">
          <Box transform="translateX(60px)">
            <Image
              src="/images/luana-tavares-perfil.png"
              width={590}
              height={740}
              quality={100}
              priority={true}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
