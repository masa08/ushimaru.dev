import Aside from '../common/aside'
import Container from '../common/container'
import Flex from '../common/flex'
import Main from '../common/main'
import BlogContent from '../features/blog/BlogContent'
import BlogList from '../features/blog/BlogList'
import Profile from '../features/user/Profile'

const Blog = () => {
  return (
    <Container>
      {/* TODO: main visual */}
      <Flex>
        <Main>
          <BlogContent />
        </Main>
        <Aside>
          <BlogList />
        </Aside>
      </Flex>
    </Container>
  )
}

export default Blog
