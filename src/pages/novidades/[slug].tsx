import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
} from '@chakra-ui/react';
import timerIcon from '../../../public/images/time.svg';
import eyeIcon from '../../../public/images/eye.svg';
import Header from '../../shared/components/Header';
import Footer from '../../shared/Footer';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';

interface Post {
  first_publication_date?: string;
  data: {
    title: string;
    subtitle: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const humanWordsPerMinute = 200;
  const titleWords = post?.data.title.split(' ').length;

  const totalWords = post?.data.content.reduce((acc, content) => {
    const headingWords = content.heading
      ? content.heading.split(' ').length
      : 0;
    const bodyWords = RichText.asText(content.body).split(' ').length;
    // eslint-disable-next-line no-param-reassign
    acc += headingWords + bodyWords;
    return acc;
  }, 0);

  const timeToRead = Math.ceil((titleWords + totalWords) / humanWordsPerMinute);

  console.log('tempo de leitura', timeToRead);

  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Header />
        <Flex
          w="100%"
          maxW="1400px"
          h="100vh"
          color="pink.500"
          align="center"
          justify={'center'}
          alignSelf={'center'}
          mx="auto"
        >
          <Spinner />
        </Flex>
        <Footer />
      </>
    );
  }

  console.log(post);
  return (
    <>
      <Head>
        <title> {`${post.data.title} - Luana Tavares`} </title>
      </Head>
      <Header />
      <Flex
        flexDir="column"
        maxW="1400"
        w="100%"
        h="100%"
        mx="auto"
        align="center"
        py="7rem"
      >
        <Flex maxW="1010px" w="100%" h="463px">
          <Image
            src={post.data.banner.url}
            width={1010}
            height={463}
            objectFit="cover"
            quality={75}
          />
        </Flex>

        <Heading
          fontFamily="Raleway"
          maxW="1010px"
          textAlign={'left'}
          mt="2rem"
        >
          {post?.data.title ? post.data.title : <Spinner color="pink.900" />}
        </Heading>

        <Flex
          px="1rem"
          w="100%"
          maxW="1010px"
          py="2rem"
          justify="space-between"
        >
          <Flex mr="auto" align="center">
            <Icon fontSize="1.2rem" as={timerIcon} />
            <Text mx="2"> {post?.first_publication_date} </Text>
            <Divider
              mx="1rem"
              height="1rem"
              borderColor="black"
              border="1px"
              orientation="vertical"
            ></Divider>
            <Icon fontSize="1.2rem" as={eyeIcon} />
            <Text ml="2"> {`${timeToRead} min de leitura`} </Text>
          </Flex>
          <Flex align="center">
            <Avatar
              mx="3"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Text color="purple.900">Luana Tavares</Text>
          </Flex>
        </Flex>

        <Text
          fontSize="1.125rem"
          lineHeight={1.8}
          textAlign="justify"
          maxW="1010px"
          h="100%"
        >
          {post.data.content.map(content => {
            return (
              <Flex flexDir="column" mx="auto" h="100%" w="100%" maxW="1010px">
                <Heading
                  my="5"
                  textAlign={'left'}
                  fontSize="1.5rem"
                  color="black"
                  fontFamily={'Roboto'}
                >
                  {content.heading}
                </Heading>
                <Flex
                  my="2"
                  w="100%"
                  maxW="1010px"
                  h="100%"
                  fontSize="1.125rem"
                  lineHeight={1.8}
                  flexDir="column"
                  mx="auto"
                  dangerouslySetInnerHTML={{
                    __html: RichText.asHtml(content.body),
                  }}
                />
              </Flex>
            );
          })}
        </Text>
      </Flex>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.Predicates.at('document.type', 'publications'),
  ]);

  const paths = posts.results.map(post => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });
  return {
    paths: [],
    fallback: true,
  };
};

//@ts-ignore
export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  //@ts-ignore
  const response = await prismic.getByUID('publications', String(slug), {});

  const post = {
    uid: response.uid,
    first_publication_date: format(
      new Date(response.first_publication_date),
      'dd MMM yyyy',
      {
        locale: ptBR,
      }
    ),
    data: {
      title: response.data.title,
      subtitle: response.data.subtitle,
      banner: {
        url: response.data.banner.url,
      },
      content: response.data.content.map((content: any) => {
        return {
          heading: content.heading,
          body: [...content.body],
        };
      }),
    },
  };

  return {
    props: {
      post,
    },
    revalidate: 60 * 60,
  };
};
