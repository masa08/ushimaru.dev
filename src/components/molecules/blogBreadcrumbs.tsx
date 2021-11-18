import Link from 'next/link'
import { BLOG_URL, TOP_URL } from '../../utils/constants'

export interface BlogBreadcrumbsProps {
  id: string
  title: string
}

const BlogBreadcrumbs: React.FC<BlogBreadcrumbsProps> = ({ id, title }) => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link href={TOP_URL}>
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href={`${BLOG_URL}/${id}`}>
            <a>{title}</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BlogBreadcrumbs
