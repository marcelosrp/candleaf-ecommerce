import { useState } from 'react'
import Logo from '@ui/Logo'
import Nav from '@ui/Nav'
import User from '@ui/User'
import Hamburger from '@ui/Hamburger'
import useMedia from '@hooks/useMedia'

import * as S from './styles'

export default function Header() {
  const { isMobile } = useMedia()
  const [open, setOpen] = useState(false)

  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo />
        {isMobile ? <Hamburger open={open} setOpen={setOpen} /> : <Nav />}
        <User />
      </S.HeaderWrapper>

      {isMobile &&
        (open ? (
          <S.MenuMobile>
            <Nav isMobile />
          </S.MenuMobile>
        ) : null)}
    </S.Header>
  )
}
