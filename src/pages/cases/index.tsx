import { useEffect, useState } from 'react'
import { shadowOnHeader } from '../../utils/when-scroll'
import {
  Main,
  HeroSection,
  Section,
  Customers,
  ReachCustomer,
  Contact,
} from './styles'
import ajudapet from '../../assets/ajudapet.png'
import amparo from '../../assets/amparo.png'
import doctor from '../../assets/doctor.png'
import ht from '../../assets/ht.png'
import ricker from '../../assets/ricker.png'
import reach from '../../assets/reach.png'

export default function Cases() {
  // menu item, hides the menu
  const [scroll, setScroll] = useState<boolean>(false)

  window.addEventListener('scroll', () => {
    const isScroll = shadowOnHeader()
    setScroll(isScroll)
  })

  useEffect(() => {
    document.title = 'Cases | Bluelogic'
  }, [])

  return (
    <Main isScrolled={scroll}>
      <HeroSection>
        <div>
          <h1>Cases</h1>
        </div>
      </HeroSection>
      <Section>
        <h2>
          Criamos e mantemos <span>sólidas parcerias</span> com clientes como:
        </h2>
        <Customers>
          <img src={reach} alt="" />
          <img src={amparo} alt="" />
          <img src={ht} alt="" />
          <img
            src="https://img10.naventcdn.com/home/RPHOMv4.96.1-RC2/images/logo-r-imovelweb.svg"
            alt=""
          />
          <img src={ricker} alt="" />
          <img src={ajudapet} alt="" />
          <img src={doctor} alt="" />
          <img
            src="https://www.webreceita.com.br/assets/images/logo_web_receita.webp"
            alt=""
          />
        </Customers>

        <ReachCustomer>
          <div>
            <img src={reach} alt="" />
            <strong>Reach Investment</strong>
            <p>
              Atuamos desenvolvendo toda a Plataforma <b>Financeira</b> para
              gestão de ativos Construímos um Aplicativo para visualizar
              informações sobre aplicações financeiras, uma plataforma Web para
              acompanhamento financeiro dos correntistas como também todo o
              sistema de gestão para gerenciamento das informações pela equipe
              da Reach.
            </p>
          </div>
          <div>
            <img
              src="https://www.bluelogic.com.br/assets/images/cases_logos/mobile_reach.png"
              alt=""
            />
          </div>
        </ReachCustomer>
        <Contact>
          <strong>
            Sua parceira para <br />
            desenvolvimento de software sob medida
          </strong>
          <a href="/contato">Entre em contato</a>
        </Contact>
      </Section>
    </Main>
  )
}
