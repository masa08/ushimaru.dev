import Link from 'next/link'

// export interface MainHeaderProps {
//   title: string
// }

const TopBreadcrumbs: React.FC = () => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link href={`/`}>
            <a>HOME</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default TopBreadcrumbs
