import Image from 'next/image'
import * as S from './styles'

export default function CardProduto({ nome, preco, src }) {
  return (
    <S.Card>
      <Image src={src} alt={nome} width={255} height={177} quality={80} />
      <S.Infos>
        <S.Nome>{nome}</S.Nome>
        <S.Preco>R$ {preco}</S.Preco>
      </S.Infos>
    </S.Card>
  )
}
