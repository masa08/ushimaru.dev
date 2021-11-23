import { useRecoilValue } from 'recoil'
import { blogListState } from '../../../states/blogListState'
import BlogList from './blogList'

const BlogListContainer = () => {
  const blogList = useRecoilValue(blogListState)

  return <BlogList blogList={blogList} />
}

export default BlogListContainer
