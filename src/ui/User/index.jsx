import Link from 'next/link'
import { FaUserAlt } from '@react-icons/all-files/fa/FaUserAlt'
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart'

import * as S from './styles'

export default function User() {
  return (
    <S.UserWrapper>
      <Link href="/authentication">
        <a>
          <FaUserAlt />
        </a>
      </Link>
      <Link href="/cart">
        <a>
          <FaShoppingCart />
        </a>
      </Link>
    </S.UserWrapper>
  )
}
