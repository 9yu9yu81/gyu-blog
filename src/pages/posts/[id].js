import Layout from "components/layout";
import { getAllPostIds, getPostData } from "lib/posts";
import Head from "next/head";
import Date from "components/date";
import utilStyles from "styles/utils.module.css";
import { MDXRemote } from "next-mdx-remote";
// import { useRouter } from "next/router";
import CodeBlock from "components/CodeBlock";

const Button = ({ children }) => {
  return (
    <button
      className="bg-black dark:bg-white text-lg text-teal-200 dark:text-teal-700 rounded-lg px-3 "
      onClick={() => alert(`thanks to ${children}`)}>
      {children}
    </button>
  );
};

const components = { Button, CodeBlock };

export default function Post({ postData }) {
  // const router = useRouter();

  // if (router.isfallback) {
  //   return <div>loading...</div>;
  // }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
        {postData.mdxSource && (
          <MDXRemote
            {...postData.mdxSource}
            components={components}></MDXRemote>
        )}
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
