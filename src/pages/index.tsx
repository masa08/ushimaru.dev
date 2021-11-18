import { RecoilRoot } from 'recoil'
import { client } from '../libs/client'
import { blogListState } from '../states/blogListState'
// import TopTemplate from '../templates/top'

const initializeState =
  (blogList) =>
  ({ set }) => {
    set(blogListState, blogList)
  }

export default function Home({ blogList }) {
  return (
    <RecoilRoot initializeState={initializeState(blogList)}>
      <p>top test</p>
      {/* <TopTemplate /> */}
    </RecoilRoot>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blogList: data.contents,
    },
  }
}
