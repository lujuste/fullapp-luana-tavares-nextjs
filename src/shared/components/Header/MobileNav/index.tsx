import Link from 'next/link';

import { MotionVStack, MotionText } from '../../../styles/animation';

export default function MobileNav() {
  const container = {};

  const item = {};

  const menu = [
    {
      page: 'Legal Design',
      url: '/legaldesign',
    },
    {
      page: 'Consultoria',
      url: '/consultoria',
    },
    {
      page: 'Treinamentos',
      url: '/treinamentos',
    },
    {
      page: 'Cursos',
      url: '/cursos',
    },
    {
      page: 'Blog',
      url: '/blog',
    },
    {
      page: 'Contrato automático',
      url: '/',
    },
  ];

  return (
    <>
      <MotionVStack
        display="flex"
        flexDir="column"
        h="100vh"
        w="100%"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        mt="-5rem"
        spacing={'7'}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {menu.map(index => (
          <Link passHref href={index.url}>
            <MotionText
              key={index.url}
              initial="hidden"
              animate="visible"
              variants={item}
              color="white"
              fontWeight="bold"
              fontSize="24"
              whileTap={{ scale: 0.9, rotate: 0 }}
            >
              {index.page}
            </MotionText>
          </Link>
        ))}
      </MotionVStack>
    </>
  );
}
