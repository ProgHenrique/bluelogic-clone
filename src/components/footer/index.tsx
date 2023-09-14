import {
  Contact,
  FooterContent,
  FooterOnFooter,
  Info,
  InfoContainer,
} from './styles'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail, AiFillFacebook } from 'react-icons/ai'
import { GiSmartphone } from 'react-icons/gi'

export default function Footer() {
  return (
    <FooterContent>
      <InfoContainer>
        <Info>
          <img
            src="https://www.bluelogic.com.br/assets/images/logo.png"
            alt=""
          />
          <p>
            Utilizamos nossa tecnologia para dar mais liberdade às empresas que
            querem crescer rapidamente focando no que que fazem de melhor no
            mundo, enquanto cuidamos da tecnologia da sua empresa.
          </p>
        </Info>
        <Contact>
          <p>Contato</p>
          <p>
            <AiOutlineMail />
            comercial@bluelogic.com.br
          </p>
          <p>
            <FiPhone />
            (41) 99764-1530
          </p>
          <p>
            <FaWhatsapp />
            (41) 99764-1530
          </p>
        </Contact>
      </InfoContainer>

      <FooterOnFooter>
        <div>
          <strong>
            © 2023 - Bluelogic Sistemas e Consultoria. Todos os direitos
            reservados
          </strong>
          <p>
            <span>
              <GiSmartphone style={{ fontSize: '1rem' }} />
              41 99764-1530
            </span>
            <span>
              <AiOutlineMail style={{ fontSize: '1rem' }} />
              comercial@bluelogic.com.br
            </span>
          </p>
          <a
            href="https://www.facebook.com/bluelogicsistemas"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
        </div>
      </FooterOnFooter>
    </FooterContent>
  )
}
