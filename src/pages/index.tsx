import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { client } from '../libs/client'
import { blogListState } from '../states/blogListState'
import TopTemplate from '../templates/top'

export default function Home({ blog }) {
  const setBlogList = useSetRecoilState(blogListState)

  // TODO: 修正
  useEffect(() => {
    setBlogList(blog)
  }, [blog])

  return <TopTemplate />
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
