import PropTypes from 'prop-types'
import Link from 'next/link'

import * as S from './styles'

export default function Nav({ isMobile = false }) {
  return (
    <S.Nav isMobile={isMobile}>
      <Link href="/discovery" passHref>
        <S.NavLink>Discovery</S.NavLink>
      </Link>
      <Link href="/about" passHref>
        <S.NavLink>About</S.NavLink>
      </Link>
      <Link href="/contact" passHref>
        <S.NavLink>Contact Us</S.NavLink>
      </Link>
    </S.Nav>
  )
}

Nav.propTypes = {
  isMobile: PropTypes.bool
}
