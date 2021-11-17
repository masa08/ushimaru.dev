import Aside from '../components/common/aside'
import Container from '../components/common/container'
import Flex from '../components/common/flex'
import Main from '../components/common/main'
import MainHeaderContainer from '../containers/mainHeader'
import Profile from '../features/user/Profile'

const AboutTemplate = () => {
  return (
    <Container>
      <Flex>
        <Aside>
          <Profile />
        </Aside>
        <Main>
          <MainHeaderContainer />
          <p>AboutTemplate</p>
        </Main>
      </Flex>
    </Container>
  )
}

export default AboutTemplate
