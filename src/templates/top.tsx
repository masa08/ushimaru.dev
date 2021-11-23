import Aside from '../components/common/aside'
import Container from '../components/common/container'
import Flex from '../components/common/flex'
import Main from '../components/common/main'
import TopBreadCrumbsContainer from '../containers/molecules/topBreadCrumbs'
import BlogListContainer from '../features/blog/blogList/blogListContainer'
import Profile from '../features/user/profile/profile'

const TopTemplate = () => {
  return (
    <Container>
      <Flex>
        <Aside>
          <Profile />
        </Aside>
        <Main>
          <TopBreadCrumbsContainer />
          <BlogListContainer />
        </Main>
      </Flex>
    </Container>
  )
}

export default TopTemplate
