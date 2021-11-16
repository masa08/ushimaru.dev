import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { client } from '../../libs/client';
import { blogState } from '../../states/blogState';
import Blog from '../../templates/Blog';

export default function BlogId({ blog }) {
  const setBlog = useSetRecoilState(blogState);

  // TODO: 修正
  useEffect(() => {
    setBlog(blog);
  }, [blog]);

  return <Blog />;
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
