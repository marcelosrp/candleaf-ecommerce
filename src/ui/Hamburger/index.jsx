import PropTypes from 'prop-types'

import * as S from './styles'

export default function Hamburger({ open, setOpen }) {
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

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}
