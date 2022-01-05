import Image from 'next/image'

import * as S from './styles'

export default function Footer() {
  return (
    <S.Footer>
      <S.FooterWrrapper>
        <S.FooterLogo>
          <Image
            src="/assets/logo-footer.png"
            alt="Candleaf"
            width={236}
            height={64}
            quality={80}
          />
          <figcaption>
            Your natural candle made for your home and for your wellness.
          </figcaption>
        </S.FooterLogo>

        <S.FooterNav>
          <ul>
            <S.FooterNavItem className="titulo">Discovery</S.FooterNavItem>
            <S.FooterNavItem>New season</S.FooterNavItem>
            <S.FooterNavItem>Most searched</S.FooterNavItem>
            <S.FooterNavItem>Most selled</S.FooterNavItem>
          </ul>
          <ul>
            <S.FooterNavItem className="titulo">About</S.FooterNavItem>
            <S.FooterNavItem>Help</S.FooterNavItem>
            <S.FooterNavItem>Shipping</S.FooterNavItem>
            <S.FooterNavItem>Affilliate</S.FooterNavItem>
          </ul>
          <ul>
            <S.FooterNavItem className="titulo">Info</S.FooterNavItem>
            <S.FooterNavItem>Contact us</S.FooterNavItem>
            <S.FooterNavItem>Privacy Policies</S.FooterNavItem>
            <S.FooterNavItem>Terms & Conditions</S.FooterNavItem>
          </ul>
        </S.FooterNav>
      </S.FooterWrrapper>
    </S.Footer>
  )
}
