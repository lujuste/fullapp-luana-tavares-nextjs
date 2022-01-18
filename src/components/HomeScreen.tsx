import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
  useBreakpointValue,
  HTMLChakraProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

import { useRouter } from 'next/router';

import Image from 'next/image';

import { ChevronDownIcon } from '@chakra-ui/icons';
import FloatWhatsapp from './FloatWhatsApp';
import { NextPage } from 'next';
import { HTMLMotionProps, motion } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionFlexProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;
type MotionHeadingProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

export const MotionFlex: NextPage<MotionFlexProps> = motion(Flex);

export default function HomeScreen() {
  const router = useRouter();

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
          <Reveal>
            <Heading
              mt={['8rem', '8rem', '0']}
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
          </Reveal>
          <Reveal>
            <Text
              color="white"
              fontSize={['14px', '15px', '20px']}
              fontWeight="400"
              fontFamily="Roboto"
              mb="2rem"
            >
              <span className="wave">👋</span> Bem vindo(a), conheça Luana
              Tavares,
            </Text>
          </Reveal>
          <Reveal>
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
          </Reveal>
          <Flex
            flexDir={['column', 'column', 'column', 'row']}
            mb={['-5rem', '-5rem', '0']}
            mt="3rem"
          >
            {' '}
            <Flex mx={['auto', 'auto', '0']}>
              <Reveal>
                <Button
                  fontWeight={['400', '400', '600']}
                  fontFamily="Roboto"
                  fontSize={['14px', '14px', '20px']}
                  height="50px"
                  type="button"
                  mb={['4rem', '3rem', 0]}
                  onClick={() => router.push('/#form-control')}
                  borderRadius="none"
                  bgColor="pink.300"
                  color="white"
                  _hover={{
                    background: 'white',
                    color: 'pink.500',
                    border: '1px solid #F05B91',
                  }}
                  _active={{
                    border: 'none',
                    outline: 'transparent',
                  }}
                  _focus={{
                    border: 'none',
                    outline: 'transparent',
                  }}
                >
                  Quero fazer parte da mudança
                </Button>
              </Reveal>
            </Flex>
            <Reveal>
              {!isMobile && (
                <Button
                  ml="2rem"
                  mt="0.5rem"
                  mb="2rem"
                  onClick={() => router.push('/#section-home')}
                  _hover={{
                    background: 'transparent',
                    color: 'white',
                  }}
                  _focus={{
                    background: 'transparent',
                    color: 'white',
                  }}
                  _active={{
                    border: 'none',
                    outline: 'transparent',
                  }}
                  bgColor="transparent"
                  fontWeight="400"
                  color="white"
                  fontSize="16px"
                >
                  Saiba mais <ChevronDownIcon boxSize="25px" />
                </Button>
              )}
            </Reveal>
          </Flex>
        </Flex>

        <Flex mt={['0', '0', '0', '7']} ml="8rem" flex="1">
          <Box transform="translateX(60px)">
            <Reveal>
              <Image
                src="/images/luana-tavares-perfil.png"
                width={590}
                height={740}
                quality={75}
                priority={true}
                objectFit="cover"
              />
            </Reveal>
          </Box>
        </Flex>

        <Flex position="fixed" zIndex={'99999'} right="0" top="89.5%">
          <Reveal>
            <NextLink
              href="https://api.whatsapp.com/send?phone=5511939430303&text=Ol%C3%A1%20Luana,%20quero%20participar%20da%20mudan%C3%A7a%20na%20pol%C3%ADtica!"
              passHref
            >
              <MotionFlex
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 0.9, opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeIn' }}
                position="fixed"
                cursor="pointer"
                right="0"
                top={['90vh']}
                zIndex="100000"
              >
                <FloatWhatsapp />
              </MotionFlex>
            </NextLink>
          </Reveal>
        </Flex>
      </Flex>
    </Flex>
  );
}
