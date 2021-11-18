import Aside from '../components/common/aside'
import Container from '../components/common/container'
import Flex from '../components/common/flex'
import Main from '../components/common/main'
import TopBreadCrumbsContainer from '../containers/molecules/topBreadCrumbs'
import BlogList from '../features/blog/blogList'
import Profile from '../features/user/profile'

const TopTemplate = () => {
  return (
    <Container>
      <Flex>
        <Aside>
          <Profile />
        </Aside>
        <Main>
          <TopBreadCrumbsContainer />
          <BlogList />
        </Main>
      </Flex>
    </Container>
  )
}

export default TopTemplate
