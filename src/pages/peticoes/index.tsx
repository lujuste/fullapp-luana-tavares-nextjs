import { Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import Header from '../../shared/components/Header';
import Footer from '../../shared/Footer';
import NextLink from 'next/link';
import { TimeIcon } from '@chakra-ui/icons';

export default function Petitions() {
  return (
    <>
      <Header />
      <Flex flexDir="column" w="100%" h="100%" maxW="1400" mx="auto" mb="2rem">
        <Flex
          mx="auto"
          flexDir="column"
          w="100%"
          maxW="1400"
          h="100%"
          px={['1rem', '1rem', '0']}
          mb="2rem"
        >
          <Heading
            bgColor="purple.900"
            color="white"
            px="8"
            py="2"
            maxH="60px"
            mx="auto"
            mt={['11rem', '11rem', '10rem']}
            fontFamily="Raleway"
            boxShadow="2xl"
            mb="2rem"
            fontSize={['24px', '24px', '36px']}
          >
            Petições
          </Heading>

          <NextLink href="/peticoes/devastacao-mata-atlantica">
            <Flex
              align="center"
              my="1.5rem"
              mx="auto"
              flexDir="column"
              maxW={['300px', '300px', '800px']}
            >
              <Text
                maxW="1000px"
                fontWeight={'bold'}
                fontSize={['1.2rem', '1.2rem', '2rem']}
                fontFamily={'Raleway'}
                mx="auto"
                textAlign="left"
                _hover={{ color: 'pink.500' }}
                cursor="pointer"
              >
                Assine para ajudar a salvar o meio ambiente e acabar com os
                desmatamentos na amazônia
              </Text>
              <Text
                fontSize={['14px', '14px', '16px']}
                align="center"
                mt="0.5rem"
                mr="auto"
              >
                <Icon mt="-0.3rem" mr="0.2rem" align="center" as={TimeIcon} /> 2
                de jan de 2022
              </Text>
            </Flex>
          </NextLink>

          <NextLink href="/peticoes/devastacao-mata-atlantica">
            <Flex
              align="center"
              my="1.5rem"
              mx="auto"
              flexDir="column"
              maxW={['300px', '300px', '800px']}
            >
              <Text
                maxW="1000px"
                fontWeight={'bold'}
                fontSize={['1.2rem', '1.2rem', '2rem']}
                fontFamily={'Raleway'}
                mx="auto"
                textAlign="left"
                _hover={{ color: 'pink.500' }}
                cursor="pointer"
              >
                Assine para ajudar a salvar o meio ambiente e acabar com os
                desmatamentos na amazônia
              </Text>
              <Text
                fontSize={['14px', '14px', '16px']}
                align="center"
                mt="0.5rem"
                mr="auto"
              >
                <Icon mt="-0.3rem" mr="0.2rem" align="center" as={TimeIcon} /> 2
                de jan de 2022
              </Text>
            </Flex>
          </NextLink>
          <NextLink href="/peticoes/devastacao-mata-atlantica">
            <Flex
              align="center"
              my="1.5rem"
              mx="auto"
              flexDir="column"
              maxW={['300px', '300px', '800px']}
            >
              <Text
                maxW="1000px"
                fontWeight={'bold'}
                fontSize={['1.2rem', '1.2rem', '2rem']}
                fontFamily={'Raleway'}
                mx="auto"
                textAlign="left"
                _hover={{ color: 'pink.500' }}
                cursor="pointer"
              >
                Assine para ajudar a salvar o meio ambiente e acabar com os
                desmatamentos na amazônia
              </Text>
              <Text
                fontSize={['14px', '14px', '16px']}
                align="center"
                mt="0.5rem"
                mr="auto"
              >
                <Icon mt="-0.3rem" mr="0.2rem" align="center" as={TimeIcon} /> 2
                de jan de 2022
              </Text>
            </Flex>
          </NextLink>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
