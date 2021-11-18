import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { blogListState } from '../../states/blogListState'

const BlogList = () => {
  const blogList = useRecoilValue(blogListState)

  return (
    <ul>
      {blogList.map((blog) => {
        return (
          <li key={blog.id} className='mb-5 py-2 border-b'>
            <div>
              <Link href={`/blog/${blog.id}`}>
                <a href=''>
                  <h2 className='text-xl mb-1'>{blog.title}</h2>
                </a>
              </Link>
              <div>{blog.description}</div>
              <div className='flex'>
                <p>{blog.createdAt}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default BlogList
