import Logo from '@ui/Logo'
import Nav from '@ui/Nav'
import User from '@ui/User'
import Hamburger from '@ui/Hamburger'
import useMedia from '@hooks/useMedia'

import * as S from './styles'

export default function Header() {
  const { isMobile } = useMedia()

  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo />
        {isMobile ? <Hamburger /> : <Nav />}
        <User />
      </S.HeaderWrapper>
    </S.Header>
  )
}
