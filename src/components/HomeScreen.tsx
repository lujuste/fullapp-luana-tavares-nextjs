import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

import Image from 'next/image';

import { ChevronDownIcon } from '@chakra-ui/icons';
import FloatWhatsapp from './FloatWhatsApp';

export default function HomeScreen() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  });

  return (
    <Flex
      bgImage="url('/images/luana-tavares.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      flexDir="column"
      w="100%"
      h={['100%', '100%', '100%', '105vh']}
      mx="auto"
      justify="center"
      overflowX="hidden"
      flexWrap={'wrap'}
      boxShadow="2xl"
      className={'mask'}
    >
      <Flex
        align="center"
        justify="space-between"
        mx="auto"
        overflowX="hidden"
        maxW="1400px"
        flexWrap={'wrap'}
        h="auto"
        px="2.5rem"
        flexDir={['column', 'column', 'column', 'column', 'row']}
      >
        <Flex
          mx={['0', '0', '2rem']}
          flexDir="column"
          justify="center"
          maxW={['300px', '300px', '400px', '500px', '700px']}
          h="100%"
        >
          <Heading
            mt={['10rem', '10rem', '0']}
            fontSize={['32px', '32px', '38px', '46px', '72px']}
            fontFamily="Raleway"
            fontWeight="400"
            color="white"
            mb="2rem"
            textAlign={['center', 'center', 'left']}
          >
            Não podemos{' '}
            <Text
              fontWeight="600"
              px="1rem"
              w={['300px', '300px', '330px', '400px', '590px']}
              bgColor="pink.300"
            >
              desistir do brasil
            </Text>
          </Heading>
          <Text
            color="white"
            fontSize={['16px', '16px', '20px']}
            fontWeight="400"
            fontFamily="Roboto"
            mb="2rem"
          >
            <span className="wave">👋</span> Bem vindo(a), conheça Luana
            Tavares,
          </Text>
          <Text
            color="white"
            fontSize={['16px', '16px', '20px']}
            fontWeight="300"
            fontFamily="Roboto"
            textAlign={['center', 'center', 'left']}
            maxW="550px"
          >
            Luana Tavares é especialista em Políticas Públicas e Ativista para
            modernização do Estado, Administradora, publicitária e
            desenvolvedora de lideranças.
          </Text>
          <Flex
            flexDir={['column', 'column', 'column', 'row']}
            mb={['-5rem', '-5rem', '0']}
            mt="3rem"
          >
            {' '}
            <Flex mx={['auto', 'auto', '0']}>
              <Button
                fontWeight={['400', '400', '600']}
                fontFamily="Roboto"
                fontSize={['14px', '14px', '20px']}
                height="50px"
                borderRadius="none"
                bgColor="pink.300"
                color="white"
              >
                Quero fazer parte da mudança
              </Button>
            </Flex>
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

        <Flex mt={['0', '0', '0', '7']} ml="8rem" flex="1">
          <Box transform="translateX(60px)">
            <Image
              src="/images/luana-tavares-perfil.png"
              width={590}
              height={740}
              quality={75}
              priority={true}
              objectFit="cover"
            />
          </Box>
        </Flex>

        <Flex position="fixed" zIndex={'99999'} right="0" top="89.5%">
          <FloatWhatsapp />
        </Flex>
      </Flex>
    </Flex>
  );
}
