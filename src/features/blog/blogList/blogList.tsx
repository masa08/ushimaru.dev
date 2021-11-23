import Link from 'next/link'
import dayjs from 'dayjs'
import { BLOG_URL } from '../../../utils/constants'
import { Blog } from '../../../types/blog'

interface BlogList {
  blogList: Blog[]
}

const BlogList: React.FC<BlogList> = ({ blogList }) => {
  return (
    <ul>
      {blogList.map((blog) => {
        const createdAt = dayjs(new Date(blog.createdAt)).format('YYYY.MM.DD')

        return (
          <li key={blog.id} className='mb-5 pb-2 border-b'>
            <div>
              <Link href={`${BLOG_URL}/${blog.id}`}>
                <a href=''>
                  <h2 className='text-xl mb-1'>{blog.title}</h2>
                </a>
              </Link>
              <div className='mb-1'>{blog.description}</div>
              <div className='flex'>
                <p>{createdAt}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default BlogList
