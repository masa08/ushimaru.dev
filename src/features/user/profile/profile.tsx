import Link from 'next/link'
import { ABOUT_URL } from '../../../utils/constants'

const Profile = () => {
  return (
    <div id='profile' className='justify-center'>
      <div className='avatar w-full'>
        <div className='mb-4 w-9/12 h-9/12 mask mask-decagon mx-auto'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='https://avatars.githubusercontent.com/u/19849423?v=4' alt='profileImage' />
        </div>
      </div>
      <div className='info'>
        <ul>
          <li className='my-3'>
            <p>Masataka Ushijima</p>
            <p>I am a software engineer in Japan🇯🇵</p>
          </li>
          <li>
            <div className='badge badge-primary'>React</div>
            <div className='badge badge-accent'>TypeScript</div>
            <div className='badge badge-secondary'>Nextjs</div>
            <div className='badge badge-ghost'>etc..</div>
          </li>
          <li>
            <p className='border-t my-3'></p>
          </li>
          <li>
            <Link href={ABOUT_URL}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <p>RSS</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
