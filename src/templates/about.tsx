import Aside from '../components/common/aside'
import Container from '../components/common/container'
import Flex from '../components/common/flex'
import Main from '../components/common/main'
import AboutContent from '../components/organisms/aboutContent'
import AboutBreadCrumbsContainer from '../containers/molecules/aboutBreadCrumbs'
import Profile from '../features/user/profile'

const AboutTemplate = () => {
  return (
    <Container>
      <Flex>
        <Aside>
          <Profile />
        </Aside>
        <Main>
          <AboutBreadCrumbsContainer />
          <AboutContent />
        </Main>
      </Flex>
    </Container>
  )
}

export default AboutTemplate
