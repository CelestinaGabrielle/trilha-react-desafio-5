import { getGlobalData } from '../../utils/global-data';
import { getPostBySlug } from '../../utils/mdx-utils';
import Head from 'next/head';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({ post, globalData }) {
  if (!post) {
    console.error('Post não encontrado');
    return <div>Post não encontrado</div>;
  }

  console.log('Post carregado:', post);

  return (
    <Layout>
      <SEO
        title={`${post.title} - ${globalData.name}`} // Usando `title` da tabela
        description={post.description} // Usando `description` da tabela
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {post.title} 
          </h1>
          {post.description && ( // Usando `description` da tabela
            <p className="text-xl mb-4">{post.description}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">
            {post.body} 
          </article>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  console.log('ID recebido no getServerSideProps:', params.id); // Verifique se o ID está sendo recebido
  const globalData = getGlobalData();
  const post = await getPostBySlug(params.id);

  console.log('Post retornado pelo getPostBySlug:', post);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      globalData,
      post,
    },
  };
};
