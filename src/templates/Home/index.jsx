import Layout from '@components/Layout'
import { NextSeo } from 'next-seo'
import Hero from '@components/Hero'
import Titulo from '@components/Tipografia/titulo'
import Texto from '@components/Tipografia/texto'
import CardProduto from '@components/CardProduto'

import * as S from './styles'

export default function HomeTemplate() {
  return (
    <Layout>
      <NextSeo
        title="Candleaf :: Home"
        description="A simple NextJS Boilerplate to start an project"
        canonical="https://candleaf-ecommerce.vercel.app/"
        openGraph={{
          url: 'https://candleaf-ecommerce.vercel.app/',
          title: 'Candleaf',
          description: 'A simple NextJS Boilerplate to start an project',
          images: [
            {
              url: '',
              width: 1280,
              height: 720,
              alt: 'Candleaf'
            }
          ],
          site_name: 'Candleaf'
        }}
      />

      <Hero />

      <S.ProdutoWrapper>
        <Titulo>Products</Titulo>
        <Texto>Order it for you or for your beloved ones </Texto>

        <S.ProdutoLista>
          <CardProduto
            nome="Spiced Mint"
            preco="35,00"
            src="/assets/thumb-spiced-mint.png"
          />
          <CardProduto
            nome="Sweet Straweberry"
            preco="35,00"
            src="/assets/thumb-sweet-straweberry.png"
          />
        </S.ProdutoLista>
      </S.ProdutoWrapper>
    </Layout>
  )
}
