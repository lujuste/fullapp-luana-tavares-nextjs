import { Flex, Heading, Text, Grid, GridItem, Box } from '@chakra-ui/react';
import BiographyItem from '../BiographyItem';

export default function WhoIsLuana() {
  return (
    <Flex
      mx="auto"
      textAlign="center"
      justify="center"
      w="100%"
      h="100%"
      bgColor="purple.900"
      flexDir="column"
      py="5rem"
    >
      <Heading
        mt={['0', '0', '4rem']}
        fontSize={['28px', '28px', '32px', '48px']}
        color="white"
        fontWeight="400"
        fontFamily="Raleway"
        mb="4rem"
      >
        Conheça{' '}
        <Text as="span" px="1rem" fontWeight="600" bgColor="pink.300">
          Luana Tavares
        </Text>
      </Heading>

      <BiographyItem
        image="/images/fotoLuana1.jpg"
        flexDir={['column', 'column', 'column', 'row']}
        paragraph="Luana Tavares tem 35 anos e começou a trabalhar com 13. Seu primeiro
          emprego foi como montadora de sacolas de papelão em uma fábrica, 8
          horas por dia em pé. Ainda assim, nunca deixou de acreditar, sabia que
          com trabalho duro e educação conseguiria melhorar a sua vida e a da
          sua família. Aos 17 anos passou a estudar Publicidade e Propaganda.
          Com a ajuda de uma chefe, que lhe ofereceu moradia, durante 3 anos,
          conseguiu arcar com as despesas do curso. Depois disso, foi
          recepcionista do andar onde os sócios Jorge Paulo Lemann, Marcel
          Telles e Carlos Alberto Sicupira mantinham suas ONGs e seus family
          offices. E foi a partir deste momento que sua trajetória mudou
          completamente."
      />
      <BiographyItem
        image="/images/fotoLuana2.jpg"
        flexDir={['column', 'column', 'column', 'row-reverse']}
        paragraph="Luana Tavares tem 35 anos e começou a trabalhar com 13. Seu primeiro
          emprego foi como montadora de sacolas de papelão em uma fábrica, 8
          horas por dia em pé. Ainda assim, nunca deixou de acreditar, sabia que
          com trabalho duro e educação conseguiria melhorar a sua vida e a da
          sua família. Aos 17 anos passou a estudar Publicidade e Propaganda.
          Com a ajuda de uma chefe, que lhe ofereceu moradia, durante 3 anos,
          conseguiu arcar com as despesas do curso. Depois disso, foi
          recepcionista do andar onde os sócios Jorge Paulo Lemann, Marcel
          Telles e Carlos Alberto Sicupira mantinham suas ONGs e seus family
          offices. E foi a partir deste momento que sua trajetória mudou
          
         "
      />

      <BiographyItem
        image="/images/fotoLuana3.jpg"
        flexDir={['column', 'column', 'column', 'row']}
        paragraph="Luana Tavares tem 35 anos e começou a trabalhar com 13. Seu primeiro
          emprego foi como montadora de sacolas de papelão em uma fábrica, 8
          horas por dia em pé. Ainda assim, nunca deixou de acreditar, sabia que
          com trabalho duro e educação conseguiria melhorar a sua vida e a da
          sua família. Aos 17 anos passou a estudar Publicidade e Propaganda.
          Com a ajuda de uma chefe, que lhe ofereceu moradia, durante 3 anos,
          conseguiu arcar com as despesas do curso. Depois disso, foi
          recepcionista do andar onde os sócios Jorge Paulo Lemann, Marcel
          Telles e Carlos Alberto Sicupira mantinham suas ONGs e seus family
          offices. E foi a partir deste momento que sua trajetória mudou
          completamente."
      />
    </Flex>
  );
}
