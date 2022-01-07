import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import Header from '../../shared/components/Header';
import Footer from '../../shared/Footer';
import eyeIcon from '../../../public/images/eye.svg';
import timerIcon from '../../../public/images/time.svg';
import arrowIcon from '../../../public/images/arrow.svg';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import { useState } from 'react';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import NextLink from 'next/link';
import Image from 'next/image';

interface Post {
  uid?: string;
  first_publication_date?: string;
  data: {
    title: string;
    subtitle: string;
    author: string;
    banner: {
      url: string;
    };
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function News({ postsPagination }: HomeProps): JSX.Element {
  const formattedPost = postsPagination.results.map(post => {
    return {
      ...post,
      first_publication_date: format(
        new Date(post.first_publication_date),
        'dd MMM yyyy',
        { locale: ptBR }
      ),
    };
  });

  const [posts, setPosts] = useState<Post[]>(formattedPost);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNextPage(): Promise<void> {
    if (currentPage !== 1 && nextPage === null) {
      return;
    }

    const postsResults = await fetch(`${nextPage}`).then(response =>
      response.json()
    );
    setNextPage(postsResults.next_page);
    setCurrentPage(postsResults.page);

    const newPosts = postsResults.results.map(post => {
      return {
        uid: post.uid,
        first_publication_date: format(
          new Date(post.first_publication_date),
          'dd MMM yyyy',
          {
            locale: ptBR,
          }
        ),
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author,
          banner: post.data.banner,
        },
      };
    });

    setPosts([...posts, ...newPosts]);
  }

  return (
    <>
      <Header />
      <Flex
        py="20"
        px="2"
        flexDir="column"
        w="100%"
        mx="auto"
        maxW={1400}
        h="100%"
      >
        <Heading
          bgColor="purple.900"
          color="white"
          px="8"
          py="2"
          mx="auto"
          mt="5rem"
          fontFamily="Raleway"
          boxShadow="2xl"
          mb="4rem"
        >
          Blog
        </Heading>
        <Grid mx="auto" mb="2rem" gap={20} templateColumns={'repeat(2, 1fr)'}>
          {posts.map(post => (
            <NextLink href={`/novidades/${post.uid}`} key={post.uid} passHref>
              <GridItem>
                <Flex
                  flexDir="column"
                  bgColor="#C4C4C4"
                  w="100%"
                  maxW="443px"
                  h="441px"
                  boxShadow="2xl"
                >
                  <Image
                    src={post.data.banner.url}
                    width={443}
                    height={441}
                    layout="responsive"
                    objectFit="cover"
                  />
                  <Box
                    px="5"
                    w="100%"
                    h="167px"
                    justifyContent="flex-end"
                    bgColor="white"
                  >
                    <Heading
                      mt="1rem"
                      fontSize="22px"
                      fontFamily="Roboto"
                      textAlign="left"
                    >
                      {post.data.title}
                    </Heading>

                    <Flex mb="1rem" alignSelf="initial">
                      <Flex mt="2rem" align="center">
                        <Icon as={timerIcon} fontSize="1.2rem" />
                        <Text ml="2"> {post.first_publication_date} </Text>
                        <Divider ml="1rem" orientation="vertical" />
                      </Flex>

                      <Flex
                        ml="0.8rem"
                        color="black"
                        borderColor="black"
                        mt="2rem"
                        align="center"
                      >
                        <Icon as={eyeIcon} fontSize="1.2rem" />
                        <Text ml="2">5 min de leitura</Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  mt="1rem"
                  bgColor="white"
                  width="100%"
                  boxShadow="xl"
                  h="80px"
                  justify="space-between"
                  align="center"
                  px="1rem"
                >
                  <Flex align="center">
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                    <Text ml="5" color="purple.500">
                      {' '}
                      Luana Tavares{' '}
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Text ml="auto" color="purple.500" fontWeight="700">
                      Ler artigo
                    </Text>
                    <Icon mt="2" ml="1rem" fontSize="1.3rem" as={arrowIcon} />
                  </Flex>
                </Flex>
              </GridItem>
            </NextLink>
          ))}
        </Grid>
        <Flex mt="2rem" mx="auto" align="center">
          <Button
            color="purple.900"
            backgroundColor="transparent"
            mt="1rem"
            border="1px solid #690DA6"
            mb="1.5rem"
            w="100%"
            px="5"
            borderRadius="0"
            h="60px"
            onClick={handleNextPage}
          >
            {' '}
            Ver mais postagens{' '}
          </Button>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
//@ts-ignore
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  //@ts-ignore
  const postsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'publications')],
    {
      pageSize: 2,
      orderings: '[document.first_publication_date desc]',
    }
  );

  const posts = postsResponse.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
        banner: {
          url: post.data.banner.url,
        },
      },
    };
  });

  console.log(JSON.stringify(posts), null, 2);

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: posts,
  };

  console.log(JSON.stringify(postsResponse.results), null, 2);

  return {
    props: {
      postsPagination,
    },
  };
};
