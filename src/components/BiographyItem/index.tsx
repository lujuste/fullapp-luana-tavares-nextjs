import { Flex, Box, Text, Heading, FlexProps } from '@chakra-ui/react';

interface IParagraphProps extends FlexProps {
  paragraph: string;
}

export default function BiographyItem({ paragraph, ...rest }: IParagraphProps) {
  return (
    <Flex
      {...rest}
      mx="auto"
      justify="space-around"
      maxW="1400px"
      w="100%"
      h="auto"
      my="3rem"
    >
      <Box mx="1rem" bgColor="white" w="531px" h="369px"></Box>
      <Text
        maxW="590px"
        h="auto"
        fontSize="18"
        fontFamily="Roboto"
        fontWeight="400"
        color="white"
        textAlign="left"
        mx="1rem"
      >
        {paragraph}
      </Text>
    </Flex>
  );
}
