import Aside from '../components/common/aside'
import Container from '../components/common/container'
import Flex from '../components/common/flex'
import Main from '../components/common/main'
import MainHeaderContainer from '../containers/mainHeader'
import BlogList from '../features/blog/BlogList'
import Profile from '../features/user/Profile'

const Top = () => {
  return (
    <Container>
      <Flex>
        <Aside>
          <Profile />
        </Aside>
        <Main>
          <MainHeaderContainer />
          <BlogList />
        </Main>
      </Flex>
    </Container>
  )
}

export default Top
