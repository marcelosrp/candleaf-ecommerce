import { useState } from 'react'

import * as S from './styles'

export default function Hamburger() {
  const [open, setOpen] = useState(false)

  return (
    <S.StyledBurger
      aria-label="Abrir menu mobile"
      style={{ order: -1 }}
      onClick={() => setOpen(!open)}
      open={open}
    >
      <div />
      <div />
      <div />
    </S.StyledBurger>
  )
}
