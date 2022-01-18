import type { GetStaticPaths, NextPage } from 'next';
import FormView from '../components/FormView';
import HomeScreen from '../components/HomeScreen';

import News from '../components/News';
import WhoIsLuana from '../components/WhoIsLuana';
import Header from '../shared/components/Header';
import Footer from '../shared/Footer';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';
import { useState } from 'react';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import ModernServices from '../components/ModernServices';
import { RichText } from 'prismic-dom';
import Head from 'next/head';

interface Post {
  uid?: string;
  first_publication_date?: string;
  data: {
    title: string;
    subtitle: string;
    author: string;
    readTime?: number;
    banner: {
      url: string;
    };
    content?: {
      heading?: string;
      body?: {
        text?: string;
      }[];
    }[];
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

const Home = ({ postsPagination }: HomeProps): JSX.Element => {
  function getReadTime(item: Post): number {
    const totalWords = item.data.content.reduce((total, contentItem) => {
      //@ts-ignore
      total += contentItem.heading.split(' ').length;

      const words = contentItem.body.map(i => i.text.split(' ').length);
      words.map(word => (total += word));
      return total;
    }, 0);

    return Math.ceil(totalWords / 200);
  }

  const formattedPost = postsPagination.results.map(post => {
    const readTime = getReadTime(post);
    return {
      ...post,
      first_publication_date: format(
        new Date(post.first_publication_date),
        'dd MMM yyyy',
        { locale: ptBR }
      ),
      data: {
        ...post.data,
        readTime,
      },
    };
  });

  const newPosts = postsPagination.results.map((post: Post) => {
    const readTime = getReadTime(post);

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
        banner: {
          url: post.data.banner.url,
        },
        readTime,
        content: post.data.content.map((content: any) => {
          return {
            heading: content.heading,
            body: [...content.body],
          };
        }),
      },
    };
  });

  console.log(newPosts, 'testando2');

  return (
    <>
      <Head>
        <title>Luana Tavares - Não podemos desistir do brasil </title>
        <meta
          name="description"
          content="Luana Tavares é especialista em Políticas Públicas e Ativista para modernização do Estado, Administradora, publicitária e desenvolvedora de lideranças."
        />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Rede de Mulheres Brasileiras Líderes pela Política"
          key="ogtitle"
        />
        +{' '}
        <meta
          property="og:description"
          content="Luana Tavares é especialista em Políticas Públicas e Ativista para modernização do Estado, Administradora, publicitária e desenvolvedora de lideranças."
          key="ogdesc"
        />
        <meta
          property="og:url"
          content={'https://www.luanatavaressp.com.br'}
          key="ogurl"
        />
        <meta
          property="og:site_name"
          content="Luana Tavares é especialista em Políticas Públicas e Ativista para modernização do Estado, Administradora, publicitária e desenvolvedora de lideranças."
          key="ogsitename"
        />
      </Head>
      <Header />
      <HomeScreen />
      <News posts={newPosts} />
      <WhoIsLuana />
      <ModernServices />
      <FormView />
      <Footer />
    </>
  );
};

export default Home;

//@ts-ignore
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  //@ts-ignore
  const postsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'publications')],
    {
      pageSize: 3,
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
        content: post.data.content.map(content => {
          return {
            heading: content.heading,
            body: [...content.body],
          };
        }),
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
    revalidate: 60 * 60,
  };
};
