import {
  Flex,
  Heading,
  Grid,
  GridItem,
  Box,
  Text,
  Button,
  useBreakpointValue,
  SlideFade,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';

import CardDigital from './CardDigital';
import CardInstitucional from './CardInstitucional';
import CardRebuild from './CardRebuild';
import CardPoupaTempo from './CardPoupaTempo';
import ButtonCards from './ButtonCards';
import CardMobile from './CardMobile';
import ConsultancyIcon from './CardDigital/IconDigital';
import IconTrainning from './CardInstitucional/IconInstitucional';
import IconCourses from './CardRebuild/IconCardRebuild';
import IconContract from './CardPoupaTempo/IconPoupaTempo';

export default function ModernServices() {
  const [shouldShowActions, setShouldShowActions] = useState(false);

  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > 40;

      setShouldShowActions(isScrollingUp);
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
  });

  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <Flex
      as="main"
      flexDir="column"
      mx="auto"
      py={['0', '0', '5rem']}
      maxW={1400}
      mt={['-5rem', '1rem', '0']}
      justify="center"
      alignItems="center"
      alignSelf="center"
      h="100%"
    >
      {!isWideVersion ? (
        <>
          <Flex
            textAlign="center"
            mx="auto"
            maxW="380px"
            w="100%"
            justify="center"
            flexDir="column"
            mt={['-0.5rem', '0']}
          >
            <Heading mb="3rem" fontFamily="Raleway">
              Modernização dos
              <Text color="white" bgColor="purple.900" as="span">
                Serviços Públicos
              </Text>
            </Heading>
            <Flex flexDir="column">
              <CardMobile
                image="digital-transformation"
                title="digital"
                description="Transformamos seus documentos. Fazemos com que ele seja simples, claro e fácil entender."
              >
                <ConsultancyIcon />
              </CardMobile>

              <ButtonCards callToAction="Quero meu contrato" />
            </Flex>{' '}
            <Flex mt="3rem" flexDir="column">
              <CardMobile
                image="treinamento-mobile"
                title="Treinamento"
                description="Treinamos o seu time para que ele crie documentos amigáveis."
              >
                <IconTrainning />
              </CardMobile>

              <ButtonCards callToAction="Quero meu contrato" />
            </Flex>
            <Flex mt="3rem" flexDir="column">
              <CardMobile
                image="cursos-mobile"
                title="Cursos"
                description="Ensinamos você a criar seu documento em Legal Design do zero."
              >
                <IconCourses />
              </CardMobile>

              <ButtonCards callToAction="Quero meu contrato" />
            </Flex>
            <Flex mb="3rem" mt="3rem" flexDir="column">
              <CardMobile
                image="contratoautomatico-mobile"
                title="UXDOC"
                description="Automatizamos a criação do seu documento em Legal Design através da nossa plataforma."
              >
                <IconContract />
              </CardMobile>

              <ButtonCards callToAction="Quero meu contrato" />
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          {shouldShowActions && (
            <>
              <Heading
                mb="3rem"
                mt={['-2rem', '-2rem', '0rem', '2rem']}
                textAlign="center"
                fontFamily="Raleway"
                fontSize={['30px', '30px', '38px', '42px', '48px']}
                maxW={['700px', '700px', '700px', '800px']}
              >
                Modernização dos
                <Text color="white" bgColor="purple.900">
                  Serviços Públicos
                </Text>
                <Text
                  mt="3rem"
                  fontFamily="Roboto"
                  fontSize="32px"
                  fontWeight="light"
                  mx="auto"
                >
                  {' '}
                  ⚠️ O que isso significa?
                </Text>
              </Heading>
            </>
          )}

          <Flex
            flex="1"
            maxW="1400px"
            mx="auto"
            justify="center"
            align="center"
          >
            <Grid
              mt="2rem"
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
                'repeat(3, 1fr)',
                'repeat(4, 1fr)',
              ]}
              w="100%"
              mx="auto"
              maxW={1200}
              justifyContent="center"
              alignItems="center"
              alignSelf="center"
              flexWrap="wrap"
              gap={-100}
            >
              <GridItem mb="2rem">
                <CardDigital
                  title="Consultoria"
                  description="Transformamos seus documentos. Fazemos com que ele seja simples, claro e fácil entender."
                />
                <Flex>
                  <ButtonCards callToAction="Quero que a Bits faça meu documento" />
                </Flex>
              </GridItem>

              <GridItem mb="2rem">
                <CardInstitucional
                  title="Treinamento"
                  description="Treinamos o seu time para que ele crie documentos amigáveis."
                />
                <Flex>
                  <ButtonCards callToAction="Quero que a Bits treine meu time" />
                </Flex>
              </GridItem>

              <GridItem mb="2rem">
                <CardRebuild
                  title="Cursos"
                  description="Ensinamos você a criar seu documento em Legal Design do zero."
                />
                <Flex>
                  <ButtonCards callToAction="Quero me inscrever" />
                </Flex>
              </GridItem>

              <GridItem mb="2rem">
                <CardPoupaTempo
                  title="UXDOC"
                  description="Automatizamos a criação do seu documento em Legal Design através da nossa plataforma."
                />
                <Flex>
                  <ButtonCards callToAction="Começar agora" />
                </Flex>
              </GridItem>
            </Grid>
          </Flex>
        </>
      )}
    </Flex>
  );
}
