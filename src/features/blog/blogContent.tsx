import dayjs from 'dayjs'
import { useRecoilValue } from 'recoil'
import { blogState } from '../../states/blogState'

const BlogContent = () => {
  const blog = useRecoilValue(blogState)
  const createdAt = dayjs(new Date(blog.createdAt)).format('YYYY.MM.DD')

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
