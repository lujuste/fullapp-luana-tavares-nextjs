import { Flex, Heading, Text, Grid, GridItem, Box } from '@chakra-ui/react';
import BiographyItem from '../BiographyItem';
import Reveal from 'react-reveal/Reveal';

export default function WhoIsLuana() {
  return (
    <>
      <Reveal>
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
          <Reveal>
            <Heading
              mt={['0', '0', '2rem']}
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
          </Reveal>

          <BiographyItem
            image="/images/fotoluana2.jpg"
            flexDir={['column', 'column', 'column', 'row']}
            paragraph="Luana Tavares tem 35 anos e começou a trabalhar com 13. Seu primeiro emprego foi como montadora de sacolas de papelão em uma fábrica, 8 horas por dia em pé. Ainda assim, nunca deixou de acreditar, sabia que com trabalho duro e educação conseguiria melhorar a sua vida e a da sua família. Aos 17 anos passou a estudar Publicidade e Propaganda. Com a ajuda de uma chefe, que lhe ofereceu moradia, durante 3 anos, conseguiu arcar com as despesas do curso. Depois disso, foi recepcionista do andar onde os sócios Jorge Paulo Lemann, Marcel Telles e Carlos Alberto Sicupira mantinham suas ONGs e seus family offices. E foi a partir deste momento que sua trajetória mudou completamente."
          />
          <BiographyItem
            image="/images/fotoluana1.jpg"
            flexDir={['column', 'column', 'column', 'row-reverse']}
            paragraph="Luana se dedica há mais de 15 anos ao setor de impacto social no Brasil, atuando em várias organizações sem fins lucrativos com foco no fortalecimento da democracia e modernização do estado.  Dirigiu por 8 anos uma das organizações mais relevantes neste campo, o CLP - Centro de Liderança Pública que, desde a sua criação 2008, desenvolveu mais de 8.000 líderes públicos em todo o Brasil e está informando e engajando a sociedade na defesa de uma agenda estrutural de impacto nacional junto ao Congresso. 
          
         "
          />

          <BiographyItem
            image="/images/fotoLuana3.jpg"
            flexDir={['column', 'column', 'column', 'row']}
            paragraph="É também palestrante e professora de Liderança Pública, além de conselheira do Vetor Brasil, Poder do Voto, organizações sociais de impacto focadas em aumentar a capacidade do estado por meio de melhoria na gestão de pessoas em governos e fortalecimento da participação cívica. Em 2021, passou a ser associada do Lola Brasil e Livres, dois movimentos que trabalham para levar conteúdo e diálogo de qualidade sobre o liberalismo no Brasil. É também integrante da Rede de Líderes da Fundação Lemann e faz parte da turma de 2021 do RenovaBR e da RAPS. Luana é licenciada em Publicidade, com MBA - Master in Business Administração (Fundação Getúlio Vargas - FGVSP), e possui duas especializações, uma em gestão pública e outra em desenvolvimento de lideranças, na Harvard Kennedy School e Oxford University.  Durante a pandemia da COVID-19 passou 12 meses no Reino Unido para concluir um Mestrado em Políticas Públicas (MPP) na Blavatnik School of Government, escola de governo da Oxford University."
          />
        </Flex>
      </Reveal>
    </>
  );
}
