import Link from 'next/link'

// export interface MainHeaderProps {
//   title: string
// }

const MainHeader: React.FC = () => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link href={`/`}>
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </ul>
    </div>
  )
}

export default MainHeader
