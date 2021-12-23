import Logo from '@ui/Logo'
import Nav from '@ui/Nav'
import User from '@ui/User'
import useMedia from '@hooks/useMedia'

import * as S from './styles'

export default function Header() {
  const { isMobile } = useMedia()

  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo />
        {isMobile ? <p style={{ order: -1 }}>mobile</p> : <Nav />}
        <User />
      </S.HeaderWrapper>
    </S.Header>
  )
}
