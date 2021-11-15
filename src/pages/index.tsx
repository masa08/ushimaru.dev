import Link from 'next/link';
import { client } from '../libs/client';
import Top from '../templates/Top';

export default function Home({ blog }) {
  console.log(blog);
  return <Top />;
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
