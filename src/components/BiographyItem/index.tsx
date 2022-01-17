import { Flex, Box, Text, Heading, FlexProps } from '@chakra-ui/react';
import Image from 'next/image';

interface IParagraphProps extends FlexProps {
  paragraph: string;
  image: string;
}

export default function BiographyItem({
  paragraph,
  image,
  ...rest
}: IParagraphProps) {
  return (
    <Flex
      {...rest}
      mx="auto"
      justify="space-around"
      maxW="1400px"
      w="100%"
      h="auto"
      my={['0', '0', '3rem']}
    >
      <Image
        src={image}
        quality={55}
        objectFit="cover"
        width={531}
        height={369}
        priority={true}
      />
      <Text
        maxW="590px"
        h="auto"
        fontSize={['18', '18', '18']}
        fontFamily="Roboto"
        lineHeight={1.6}
        fontWeight="400"
        p={['5', '5', 0]}
        mt={['10', '10', '10']}
        color="white"
        textAlign={['center', 'center', 'center', 'left']}
        mx={['auto', 'auto', 'auto', '1rem']}
        mb={['3rem', '3rem', '0']}
      >
        {paragraph}
      </Text>
    </Flex>
  );
}
