import { useRecoilValue } from 'recoil'
import { blogState } from '../../states/blogState'

const BlogContent = () => {
  const blog = useRecoilValue(blogState)

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </div>
  )
}

export default BlogContent
