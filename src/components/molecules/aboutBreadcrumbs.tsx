import Link from 'next/link'

// export interface MainHeaderProps {
//   title: string
// }

const AboutBreadcrumbs: React.FC = () => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link href={`/`}>
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href={`/about`}>
            <a>ABOUT</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AboutBreadcrumbs
