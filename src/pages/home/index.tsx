import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import {
  Hero,
  HeroButton,
  HeroSkills,
  HeroTitle,
  Main,
  HeroSection,
  Skill,
  Section,
  SkillsInfo,
  Info,
  About,
  Customers,
  Solutions,
  KeenSLider,
  SolutionsCards,
  Card,
  ScheduleButton,
  Flexibility,
  FlexibilitySection,
  HeroFilm,
} from './styles'
import { BsCheck2Circle } from 'react-icons/bs'
import { HiArrowLongRight } from 'react-icons/hi2'
import ajudapet from '../../assets/ajudapet.png'
import amparo from '../../assets/amparo.png'
import doctor from '../../assets/doctor.png'
import ht from '../../assets/ht.png'
import ricker from '../../assets/ricker.png'
import { useEffect, useState } from 'react'
import { shadowOnHeader } from '../../utils/when-scroll'

const animation = { duration: 8000, easing: (t: number) => t }

export default function Home() {
  // menu item, hides the menu
  const [scroll, setScroll] = useState<boolean>(false)

  // call scroll function
  window.addEventListener('scroll', () => {
    const isScroll = shadowOnHeader()
    setScroll(isScroll)
  })

  useEffect(() => {
    document.title = 'Início | Bluelogic'
  }, [])

  // slider settings
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 'auto',
      spacing: 48,
    },
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <Main isScrolled={scroll}>
      <HeroSection>
        <HeroFilm />
        <Hero>
          <HeroTitle>
            <span>Transforme</span> seu negócio <br />
            <span>com os nossos</span> serviços de <br /> desenvolvimento de
            software
          </HeroTitle>
          <HeroSkills>
            <Skill>
              <span>
                <BsCheck2Circle />
              </span>
              <p>Desenvolvemos Aplicativos (Android/iOS)</p>
            </Skill>
            <Skill>
              <span>
                <BsCheck2Circle />
              </span>
              <p>Sites e Sistemas personalizados</p>
            </Skill>
            <Skill>
              <span>
                <BsCheck2Circle />
              </span>
              <p>Processos automatizados com robô</p>
            </Skill>
            <Skill>
              <span>
                <BsCheck2Circle />
              </span>
              <p>Hospedagem de sites e sistemasz</p>
            </Skill>
          </HeroSkills>
          <HeroButton href="/contato">SAIBA MAIS</HeroButton>
        </Hero>
      </HeroSection>
      <Section>
        <SkillsInfo>
          <Info>
            <strong>Aplicativos</strong>
            <p>
              Somos especialistas em desenvolvimento de aplicativos trabalhamos
              com as principais tecnologias do mercado
            </p>
          </Info>
          <Info>
            <strong>Web</strong>
            <p>
              Desenvolvemos soluções Web Complexas, Escaláveis e Seguras,
              utilizando das melhores metodologias e tecnologias para o
              desenvolvimento.
            </p>
          </Info>
          <Info>
            <strong>Cloud</strong>
            <p>
              Temos servidores auto escaláveis para comportar sua aplicação.
            </p>
          </Info>
          <Info>
            <strong>Custo Benefício</strong>
            <p>
              Dispomos dos melhores profissionais e das melhores tecnologias
              para escalar seu negócio, com o melhor custo benefício do Brasil
              para desenvolver sua aplicação.
            </p>
          </Info>
        </SkillsInfo>
      </Section>
      <Section>
        <About>
          <h2>Sobre a BlueLogic</h2>
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
        </About>
      </Section>
      <FlexibilitySection>
        <div>
          <Flexibility>
            <strong>Flexbilidade</strong>
            <p>
              Não deixamos processos travados, atuamos com liberdade e foco na
              qualidade do desenvolvimento
            </p>
          </Flexibility>
        </div>
      </FlexibilitySection>
      <Section>
        <Customers>
          <strong>QUEM TRABALHA CONOSCO</strong>
          <p>Alguns dos nossos clientes</p>
          <div
            ref={sliderRef}
            className="keen-slider"
            style={{
              marginTop: '1rem',
              width: 1152,
            }}
          >
            <KeenSLider className="keen-slider__slide">
              <img
                src="https://img10.naventcdn.com/home/RPHOMv4.96.1-RC2/images/logo-r-imovelweb.svg"
                alt=""
                height={60}
                width={150}
              />
            </KeenSLider>
            <KeenSLider className="keen-slider__slide">
              <img
                src="https://www.webreceita.com.br/assets/images/logo_web_receita.webp"
                alt=""
                height={60}
                width={150}
              />
            </KeenSLider>
            <KeenSLider className="keen-slider__slide">
              <img src={ajudapet} alt="" height={60} width={150} />
            </KeenSLider>
            <KeenSLider className="keen-slider__slide">
              <img src={amparo} alt="" height={60} width={150} />
            </KeenSLider>
            <KeenSLider className="keen-slider__slide">
              <img src={doctor} alt="" height={60} width={150} />
            </KeenSLider>
            <KeenSLider className="keen-slider__slide">
              <img src={ht} alt="" height={60} width={150} />
            </KeenSLider>
            <KeenSLider className="keen-slider__slide">
              <img src={ricker} alt="" height={60} width={150} />
            </KeenSLider>
          </div>
        </Customers>
      </Section>
      <Section>
        <Solutions>
          <h2>Soluções BlueLogic</h2>
          <SolutionsCards>
            <Card>
              <img
                src="https://www.bluelogic.com.br/assets/images/rectangle5.webp"
                alt=""
              />
              <strong>Desenvolvimento de Aplicativos</strong>
              <p>
                Somos especialistas em aplicativos, trabalhamos com as
                principais tecnologias do mercado.
              </p>
            </Card>
            <Card>
              <img
                src="https://www.bluelogic.com.br/assets/images/rectangle6.webp"
                alt=""
              />
              <strong>Desenvolvimento Web</strong>
              <p>Desenvolvemos Portais, Sites e Sistemas Administrativos.</p>
            </Card>
            <Card>
              <img
                src="https://www.bluelogic.com.br/assets/images/rectangle7.webp"
                alt=""
              />
              <strong>Automatização de Processos</strong>
              <p>
                O Robotic Process Automation (RPA) chegou para trazer inovações
                às empresas, aumentando a produtividade do negócio mediante a
                automatização de tarefas humanas.
              </p>
            </Card>
            <Card>
              <img
                src="https://www.bluelogic.com.br/assets/images/rectangle8.webp"
                alt=""
              />
              <strong>Servidores</strong>
              <p>
                Temos serviço hospedagem em nuvem para garantir a escalibilidade
                da sua solução.
              </p>
            </Card>
            <Card>
              <img
                src="https://www.bluelogic.com.br/assets/images/rectangle9.webp"
                alt=""
              />
              <strong>Consultoria Tecnologica</strong>
              <p>
                Se você precisa de ajuda com a escolha de tecnologia para sua
                empresa, a Bluelogic tem os melhores profissionais para te
                ajudar com esse desafio.
              </p>
            </Card>
            <Card>
              <img
                src="https://www.bluelogic.com.br/assets/images/rectangle10.webp"
                alt=""
              />
              <strong>Marketplace Blue</strong>
              <p>
                Sua loja de serviços e aplicativos, o Marketplace Blue é uma
                forma inovadora de oferecer recursos adicionais aos clientes. EM
                BREVE
              </p>
            </Card>
          </SolutionsCards>
          <ScheduleButton href="/contato">
            Agende uma demonstração
            <span>
              <HiArrowLongRight />
            </span>
          </ScheduleButton>
        </Solutions>
      </Section>
    </Main>
  )
}
