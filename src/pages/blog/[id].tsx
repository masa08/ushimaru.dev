import { RecoilRoot } from 'recoil'
import { client } from '../../libs/client'
import { blogState } from '../../states/blogState'
// import BlogTemplate from '../../templates/blog'

const initializeState =
  (blog) =>
  ({ set }) => {
    set(blogState, blog)
  }

export default function BlogId({ blog }) {
  return (
    <RecoilRoot initializeState={initializeState(blog)}>
      {/* <BlogTemplate /> */}
      <p>blog test</p>
    </RecoilRoot>
  )
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}
