import Aside from '../common/aside'
import Container from '../common/container'
import Flex from '../common/flex'
import Main from '../common/main'
import BlogList from '../features/blog/BlogList'
import Profile from '../features/user/Profile'

const Top = () => {
  return (
    <Container>
      {/* TODO: main visual */}
      <Flex>
        <Main>
          <Profile />
        </Main>
        <Aside>
          <BlogList />
        </Aside>
      </Flex>
    </Container>
  )
}

export default Top
