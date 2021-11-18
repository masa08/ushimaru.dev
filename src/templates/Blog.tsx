import Aside from '../components/common/aside'
import Container from '../components/common/container'
import Flex from '../components/common/flex'
import Main from '../components/common/main'
import BlogBreadCrumbsContainer from '../containers/molecules/blogBreadCrumbs'
import BlogContent from '../features/blog/blogContent'
import Profile from '../features/user/profile'

const BlogTemplate = () => {
  return (
    <Container>
      <Flex>
        <Aside>
          <Profile />
        </Aside>
        <Main>
          <BlogBreadCrumbsContainer />
          <BlogContent />
        </Main>
      </Flex>
    </Container>
  )
}

export default BlogTemplate
