import { useRecoilValue } from 'recoil'
import BlogBreadcrumbs from '../../components/molecules/blogBreadcrumbs'
import { blogState } from '../../states/blogState'

const BlogBreadCrumbsContainer = () => {
  const blog = useRecoilValue(blogState)

  return <BlogBreadcrumbs id={blog.id} title={blog.title} />
}

export default BlogBreadCrumbsContainer
