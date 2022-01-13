import {
  Flex,
  Icon,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
  Text,
} from '@chakra-ui/react';

import headerLogo from '../../../../public/images/luanaLogo3.svg';

import { MotionButton, MotionFlex } from '../../styles/animation';

import Link from 'next/link';

import { useState, useEffect } from 'react';
import NavigationItem from './NavigationItem';

import { HamburgerIcon } from '@chakra-ui/icons';

import { useSidebarDrawer } from '../../../contexts/SidebarDrawer';
import MobileNav from './MobileNav';

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    xl: true,
  });

  const { isOpen, onOpen, onClose } = useSidebarDrawer();
  const [shouldShowActions, setShouldShowActions] = useState<boolean>(false);
  const [lastYPos, setLastYPos] = useState<number>(0);
  const [color, setColor] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > 30;
      const isScrollingEffetive = yPos > 50;

      setShouldShowActions(isScrollingUp);
      setColor(isScrollingEffetive);
    }
    window.addEventListener('scroll', handleScroll, false);

    return () => {
      const yPos = window.scrollY;
      const isScrollingBack = yPos < 30;
      window.removeEventListener('scroll', handleScroll, false);

      if (isScrollingBack) {
        setShouldShowActions(false);
        setColor(false);
      }
    };
  }, [lastYPos]);

  return (
    <>
      {shouldShowActions ? (
        <>
          <Flex
            zIndex="20"
            as="header"
            w="100%"
            blur="500px"
            boxShadow={color ? '2xl' : ''}
            bgColor={'purple.900'}
            backdrop-filter="blur(10px)"
            opacity={'1'}
            position={isOpen ? 'unset' : 'fixed'}
            h="10vh"
            transition={'0.3s linear'}
          >
            <Flex
              w="100%"
              maxW={1400}
              transition="bgColor ease 2000ms"
              alignItems="center"
              h="10vh"
              mx="auto"
              px="6"
              align="center"
            >
              <Flex align="center" mt="1.3rem" cursor="pointer">
                <Link href="/" passHref>
                  <Icon as={headerLogo} ml="0.2rem" fontSize="7rem" />
                </Link>
              </Flex>

              {isWideVersion ? (
                <>
                  <Flex
                    ml="7rem"
                    as="nav"
                    maxW="500px"
                    flex="1"
                    justify="space-between"
                  >
                    <NavigationItem label="Novidades" href="/novidades" />
                    <NavigationItem label="Petições" href="/peticoes" />
                    <NavigationItem
                      label="Curso"
                      href="https://luanatavaressp.com.br/"
                    />
                    <NavigationItem label="Contato" href="/contato" />
                  </Flex>

                  <Flex align="center" ml="auto" maxW="400px">
                    <MotionButton
                      ml="2rem"
                      mr="1rem"
                      borderRadius="0"
                      color="white"
                      w="100%"
                      boxShadow="2xl"
                      h="50"
                      bgColor="pink.300"
                      whileTap={{ scale: 1.04 }}
                      whileHover={{ scale: 1.04 }}
                      _focus={{ border: 'none' }}
                      _hover={{
                        bgColor: '#fff',
                        color: 'pink.500',
                        border: '1px solid #CC3366',
                        boxShadow: 'dark-lg',
                      }}
                    >
                      Quero participar da mudança!
                    </MotionButton>
                  </Flex>
                </>
              ) : (
                <>
                  <Flex zIndex="20" ml="auto" justify="center" align="center">
                    {!isOpen ? (
                      <>
                        <HamburgerIcon
                          ml={['0rem', '2rem']}
                          color="pink.500"
                          onClick={onOpen}
                          boxSize="30px"
                        />
                      </>
                    ) : null}
                  </Flex>

                  <Drawer
                    size="sm"
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                  >
                    <DrawerOverlay>
                      <DrawerContent bg="purple.900">
                        <DrawerCloseButton
                          color="white"
                          fontSize="1.25rem"
                          mt="6"
                          zIndex="20"
                          _active={{ border: 'none' }}
                        />
                        <DrawerHeader mt="7"></DrawerHeader>
                        <DrawerBody>
                          <MobileNav />
                        </DrawerBody>
                      </DrawerContent>
                    </DrawerOverlay>
                  </Drawer>
                </>
              )}
            </Flex>
          </Flex>
        </>
      ) : (
        <Flex
          zIndex="20"
          as="header"
          w="100%"
          filter={'brightness(1)'}
          bgColor="purple.900"
          opacity={'0.98'}
          position={isOpen ? 'unset' : 'fixed'}
          h="10vh"
          boxShadow={'none'}
          transition={'background-color ease 2000ms '}
        >
          <Flex
            w="100%"
            maxW={1400}
            transition="bgColor ease 2000ms"
            alignItems="center"
            h="10vh"
            mx="auto"
            px="6"
            align="center"
          >
            <Flex align="center" mt="1.3rem" cursor="pointer">
              <Link href="/" passHref>
                <Icon as={headerLogo} ml="0.2rem" fontSize="7rem" />
              </Link>
            </Flex>

            {isWideVersion ? (
              <>
                <Flex
                  ml="7rem"
                  as="nav"
                  maxW="500px"
                  flex="1"
                  justify="space-between"
                >
                  <NavigationItem label="Novidades" href="/novidades" />
                  <NavigationItem label="Petições" href="/peticoes" />
                  <NavigationItem
                    label="Curso"
                    href="https://luanatavaressp.com.br/"
                  />
                  <NavigationItem label="Contato" href="/contato" />
                </Flex>

                <Flex align="center" ml="auto" maxW="700px">
                  <MotionButton
                    ml="2rem"
                    mr="1rem"
                    color="white"
                    borderRadius="none"
                    w="100%"
                    boxShadow="2xl"
                    h="50"
                    bgColor="pink.300"
                    whileTap={{ scale: 1.04 }}
                    whileHover={{ scale: 1.04 }}
                    _focus={{ border: 'none' }}
                    _hover={{
                      bgColor: '#fff',
                      color: 'pink.500',
                      border: '1px solid #CC3366',
                    }}
                  >
                    Quero participar da mudança!
                  </MotionButton>
                </Flex>
              </>
            ) : (
              <>
                <Flex zIndex="200000" ml="auto" justify="center" align="center">
                  {!isOpen ? (
                    <>
                      <HamburgerIcon
                        ml={['0rem', '2rem']}
                        color="pink.500"
                        onClick={onOpen}
                        boxSize="34px"
                      />
                    </>
                  ) : null}
                </Flex>

                <Drawer
                  size="sm"
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                >
                  <DrawerOverlay>
                    <DrawerContent bg="purple.900">
                      <DrawerCloseButton
                        color="white"
                        fontSize="1.25rem"
                        mt="6"
                        zIndex="500000"
                        _focus={{
                          border: 'none',
                        }}
                        _active={{
                          border: 'none',
                        }}
                      />
                      <DrawerHeader mt="7"></DrawerHeader>
                      <DrawerBody>
                        <MobileNav />
                      </DrawerBody>
                    </DrawerContent>
                  </DrawerOverlay>
                </Drawer>
              </>
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
}
