import Image from 'next/image'

import * as S from './styles'

export default function ThumbProdutoInterna({ size = null }) {
  return (
    <S.Thumbproduto size={size}>
      <Image
        src="/assets/thumb-spiced-mint.png"
        alt="Candleaf"
        width={382}
        height={265}
        quality={80}
      />
    </S.Thumbproduto>
  )
}
