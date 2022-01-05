import Image from 'next/image'
import Layout from '@components/Layout'
import { NextSeo } from 'next-seo'
import { FaRegCheckCircle } from '@react-icons/all-files/fa/FaRegCheckCircle'
import Hero from '@components/Hero'
import Titulo from '@components/Tipografia/titulo'
import Texto from '@components/Tipografia/texto'
import CardProduto from '@components/CardProduto'
import Button from '@ui/Button'

import * as S from './styles'

const beneficios = [
  '<strong>Eco-sustainable:</strong> All recyclable materials, 0% CO2 emissions',
  '<strong>Hyphoallergenic:</strong> 100% natural, human friendly ingredients',
  '<strong>Handmade:</strong> All candles are craftly made with love.',
  '<strong>Long burning:</strong> No more waste. Created for last long.'
]

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

      <S.Beneficios>
        <S.BeneficiosWrapper>
          <S.BeneficiosTexto>
            <Titulo>
              Clean and <br /> fragrant soy wax
            </Titulo>
            <h2>Made for your home and for your wellness</h2>
            <S.BeneficiosLista>
              {beneficios.map((beneficio, index) => (
                <S.BeneficiosItem key={index}>
                  <FaRegCheckCircle />
                  <p dangerouslySetInnerHTML={{ __html: beneficio }} />
                </S.BeneficiosItem>
              ))}
            </S.BeneficiosLista>
            <Button element="link" href="/about">
              Learn more
            </Button>
          </S.BeneficiosTexto>
          <S.BeneficiosImg>
            <Image
              src="/assets/mockups.png"
              alt="Clean and fragrant soy wax"
              width={540}
              height={377}
              quality={80}
            />
          </S.BeneficiosImg>
        </S.BeneficiosWrapper>
      </S.Beneficios>
    </Layout>
  )
}
