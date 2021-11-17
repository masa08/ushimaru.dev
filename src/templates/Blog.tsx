import Aside from '../components/common/aside'
import Container from '../components/common/container'
import Flex from '../components/common/flex'
import Main from '../components/common/main'
import MainHeaderContainer from '../containers/mainHeader'
import BlogContent from '../features/blog/BlogContent'
import Profile from '../features/user/Profile'

const BlogTemplate = () => {
  return (
    <Container>
      <Flex>
        <Aside>
          <Profile />
        </Aside>
        <Main>
          <MainHeaderContainer />
          <BlogContent />
        </Main>
      </Flex>
    </Container>
  )
}

export default BlogTemplate
