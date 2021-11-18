import Link from 'next/link'
import { TOP_URL } from '../../utils/constants'

// export interface MainHeaderProps {
//   title: string
// }

const TopBreadcrumbs: React.FC = () => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link href={TOP_URL}>
            <a>HOME</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default TopBreadcrumbs
