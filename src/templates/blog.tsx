import Aside from '../components/common/aside'
import Container from '../components/common/container'
import Flex from '../components/common/flex'
import Main from '../components/common/main'
import BlogBreadCrumbsContainer from '../containers/molecules/blogBreadCrumbs'
import BlogContentContainer from '../features/blog/blogContent/blogContentContainer'
import Profile from '../features/user/profile/profile'

const BlogTemplate = () => {
  return (
    <Container>
      <Flex>
        <Aside>
          <Profile />
        </Aside>
        <Main>
          <BlogBreadCrumbsContainer />
          <BlogContentContainer />
        </Main>
      </Flex>
    </Container>
  )
}

export default BlogTemplate
