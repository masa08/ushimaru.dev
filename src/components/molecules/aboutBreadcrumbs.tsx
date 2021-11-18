import Link from 'next/link'
import { ABOUT_URL, TOP_URL } from '../../utils/constants'

// export interface MainHeaderProps {
//   title: string
// }

const AboutBreadcrumbs: React.FC = () => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link href={TOP_URL}>
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href={ABOUT_URL}>
            <a>ABOUT</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AboutBreadcrumbs
