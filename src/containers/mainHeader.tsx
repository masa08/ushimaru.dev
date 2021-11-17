import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import MainHeader from '../components/common/mainHeader'
import { blogState } from '../states/blogState'

const MainHeaderContainer = () => {
  // const blog = useRecoilValue(blogState)
  return <MainHeader />
}

export default MainHeaderContainer
