import Link from 'next/link'

export interface BlogBreadcrumbsProps {
  id: string
  title: string
}

const BlogBreadcrumbs: React.FC<BlogBreadcrumbsProps> = ({ id, title }) => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link href={`/`}>
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href={`/blog/${id}`}>
            <a>{title}</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BlogBreadcrumbs
