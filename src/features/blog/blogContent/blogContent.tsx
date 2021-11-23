import dayjs from 'dayjs'
import { useRecoilValue } from 'recoil'
import { blogState } from '../../../states/blogState'
import { Blog } from '../../../types/blog'

interface BlogContentProps {
  blog: Blog
  createdAt: string
}

const BlogContent: React.FC<BlogContentProps> = ({ blog, createdAt }) => {
  return (
    <div>
      <h1 className='text-xl mb-1'>{blog.title}</h1>
      <p>{createdAt}</p>
      <div
        className='py-3'
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </div>
  )
}

export default BlogContent
