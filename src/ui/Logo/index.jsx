import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export default function Logo() {
  return (
    <Link href="/" passHref>
      <S.LogoLink>
        <Image
          src="/assets/icon-logo.png"
          alt="logo"
          width={35}
          height={34}
          quality={80}
        />
        Candleaf
      </S.LogoLink>
    </Link>
  )
}
