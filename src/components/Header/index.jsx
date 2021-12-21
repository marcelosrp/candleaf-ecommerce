import { useState, useEffect } from 'react'
import Logo from '@ui/Logo'
import Nav from '@ui/Nav'
import User from '@ui/User'

import * as S from './styles'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)

  function isMobileFn() {
    if (matchMedia('(max-width: 768px)').matches) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    isMobileFn()
    window.addEventListener('resize', isMobileFn)
    window.addEventListener('load', isMobileFn)

    return () => {
      window.removeEventListener('resize', isMobileFn)
      window.removeEventListener('load', isMobileFn)
    }
  }, [])

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
