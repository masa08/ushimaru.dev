import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { blogListState } from '../../states/blogListState'

const BlogList = () => {
  const blogList = useRecoilValue(blogListState)

  return (
    <ul>
      {blogList.map((blog) => {
        return (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default BlogList
