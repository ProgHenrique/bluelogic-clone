import { useState } from 'react'
import { shadowOnHeader } from '../../utils/when-scroll'
import { AboutInfos, HeroSection, Main, Section } from './styles'

export default function AboutUs() {
  // menu item, hides the menu
  const [scroll, setScroll] = useState<boolean>(false)

  window.addEventListener('scroll', () => {
    const isScroll = shadowOnHeader()
    setScroll(isScroll)
  })
  return (
    <Main isScrolled={scroll}>
      <HeroSection>
        <div>
          <h1>Quem Somos</h1>
        </div>
      </HeroSection>
      <Section>
        <AboutInfos>
          <strong>Quem somos</strong>
          <p>
            Somos Engenheiros de Software com muita experiência em diversos
            projetos de software, atuando nos mais vários ramos de negócio, e
            com vivência em grandes projetos.
          </p>
        </AboutInfos>
        <AboutInfos>
          <strong>Segmento que atendemos</strong>
          <p>
            Atendemos todas as categorias de negócio desenvolvendo soluções
            customizadas em software, aplicativos, sites, portais, automação de
            processos via robotização, configurações de ambientes na nuvem.
            Temos experiência em diversas tecnologias que nos possibilita
            oferecer a melhor solução ao seu negócio.
          </p>
        </AboutInfos>
        <AboutInfos>
          <strong>Sobre a Bluelogic</strong>
          <p>
            A Bluelogic traz em seu DNA inovação e criatividade, buscando sempre
            as melhores práticas e tecnologias para o desenvolvimento de
            software. Atuamos de forma muito próxima aos nossos clientes, para
            oferecer a melhor solução baseada em seus desejos, temos em mente
            que a tecnologia foi feita para melhorar os processos, e baseado
            nessa premissa a Bluelogic oferece o conhecimento de profissionais
            com ampla experiência e vivência de mercado. Temos muito orgulho de
            desenvolver software com alta qualidade valorizando cada detalhe em
            nossas entregas, proporcionando uma experiência única na utilização
            dos nossos serviços.
          </p>
        </AboutInfos>
      </Section>
    </Main>
  )
}
