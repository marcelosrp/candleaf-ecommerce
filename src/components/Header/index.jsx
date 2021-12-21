import Logo from '@ui/Logo'
import Nav from '@ui/Nav'
import User from '@ui/User'

import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo />
        <Nav />
        <User />
      </S.HeaderWrapper>
    </S.Header>
  )
}
