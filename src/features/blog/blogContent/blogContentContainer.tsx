import dayjs from 'dayjs'
import { useRecoilValue } from 'recoil'
import { blogState } from '../../../states/blogState'
import BlogContent from './blogContent'

const BlogContentContainer = () => {
  const blog = useRecoilValue(blogState)
  const createdAt = dayjs(new Date(blog.createdAt)).format('YYYY.MM.DD')

  return <BlogContent blog={blog} createdAt={createdAt} />
}

export default BlogContentContainer
