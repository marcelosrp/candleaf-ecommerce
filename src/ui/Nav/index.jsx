import Link from 'next/link'
import * as S from './styles'

export default function Nav() {
  return (
    <S.Nav>
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
