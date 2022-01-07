import { Flex, Text, Button } from '@chakra-ui/react';
import { ReactElement } from 'react';
import SpinButton from '../SpinButton';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import SpinButtonWhite from '../SpinButtonWhite';

interface CardMobileProps {
  title: string;
  description: string;
  image: string;
  children: ReactElement;
}

export default function CardMobile({
  title,
  description,
  image,
  children,
  ...rest
}: CardMobileProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Flex
          mx="auto"
          borderRadius="10px"
          w="100%"
          maxW="270px"
          h="290px"
          bgImage={`/images/${image}.png`}
          bgSize="cover"
          bgRepeat="no-repeat"
          justify="center"
          align="center"
          flexDir="column-reverse"
          boxShadow="2xl"
        >
          <Button
            mt="-1.5rem"
            w="auto"
            h="auto"
            bgColor="transparent"
            _hover={{ bgColor: 'transparent' }}
            border="none"
            _focus={{
              background: 'transparent',
              borderColor: 'none',
              border: 'none',
            }}
            onClick={handleClick}
            _active={{
              background: 'transparent',
              borderColor: 'none',
              border: 'none',
            }}
          >
            <SpinButton />
          </Button>
          <Text
            mt="1rem"
            mb="4rem"
            color="white"
            fontSize="16px"
            fontFamily="Raleway"
            fontWeight="700"
          >
            {title}
          </Text>
          <Flex mt="4rem"> {children}</Flex>
        </Flex>
        <Flex
          mx="auto"
          borderRadius="10px"
          w="100%"
          maxW="270px"
          h="290px"
          bgColor="pink.900"
          justify="center"
          align="center"
          flexDir="column-reverse"
          px="2rem"
          boxShadow="2xl"
        >
          <Button
            _hover={{ bgColor: 'transparent' }}
            position="absolute"
            bottom="7"
            onClick={handleClick}
            _active={{
              background: 'transparent',
              borderColor: 'none',
              border: 'none',
            }}
            _focus={{
              background: 'transparent',
              borderColor: 'none',
              border: 'none',
            }}
          >
            <SpinButtonWhite />
          </Button>
          <Text
            color="white"
            fontSize="16px"
            fontFamily="Roboto"
            fontWeight="400"
          >
            {description}
          </Text>
        </Flex>
      </ReactCardFlip>
    </>
  );
}
