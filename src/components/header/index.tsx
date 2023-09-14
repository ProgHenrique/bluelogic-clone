import { useEffect, useState } from 'react'
import { backToTopFunction, shadowOnHeader } from '../../utils/when-scroll'
import { AiFillFacebook } from 'react-icons/ai'
import { PiXBold, PiArrowUpBold } from 'react-icons/pi'
import {
  BackToTopButton,
  CloseButton,
  HeaderContact,
  HeaderLogoMenu,
  Link,
  MenuButton,
  MenuFooter,
  MenuItems,
  NavHeader,
  Ul,
} from './styles'
import { useWindowSize } from '../../hooks/use-window-size'
import { useLocation } from 'react-router-dom'

export default function Header() {
  // Open and close menu
  const [show, setShow] = useState<boolean>(false)

  // menu item, hides the menu
  const [scroll, setScroll] = useState<boolean>(false)

  // Back to top
  const [backToTop, setBackToTop] = useState<boolean>(false)

  const windowSize = useWindowSize()
  const location = useLocation()
  const pathname = location.pathname

  window.addEventListener('scroll', () => {
    const isScroll = shadowOnHeader()
    setScroll(isScroll)
    const availableToTop = backToTopFunction()
    setBackToTop(availableToTop)
  })

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [show])

  return (
    <>
      <NavHeader id="header" isScrolled={scroll}>
        {windowSize >= 768 && (
          <HeaderContact>
            <div>
              <div>
                <p>41 99764-1530</p>
                <p>comercial@bluelogic.com.br</p>
              </div>
              <a
                href="https://www.facebook.com/bluelogicsistemas"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook />
              </a>
            </div>
          </HeaderContact>
        )}

        <HeaderLogoMenu>
          <a href="/">
            <img src="logo.jpeg" alt="" height={30} />
            <strong>
              BLUELOGIC <br />
              SISTEMAS
            </strong>
          </a>
          {windowSize < 768 && (
            <>
              <MenuButton onClick={() => setShow(true)}>
                <div />
                <div />
                <div />
              </MenuButton>
              <MenuItems open={show}>
                <CloseButton onClick={() => setShow(false)}>
                  <PiXBold />
                </CloseButton>
                <ul>
                  <li>
                    <Link href="/sobre-nos" onClick={() => setShow(false)}>
                      Quem Somos
                    </Link>
                  </li>
                  <li>
                    <Link href="/cases" onClick={() => setShow(false)}>
                      Clientes
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato" onClick={() => setShow(false)}>
                      Contato
                    </Link>
                  </li>
                </ul>
                <MenuFooter>
                  <div>
                    <p>41 3797-5387</p>
                    <p>comercial@bluelogic.com.br</p>
                  </div>
                  <a
                    href="https://www.facebook.com/bluelogicsistemas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillFacebook />
                  </a>
                </MenuFooter>
              </MenuItems>
            </>
          )}

          {windowSize >= 768 && (
            <Ul>
              <li>
                <Link
                  css={{
                    '&::after': {
                      width: pathname === '/sobre-nos' ? '100%' : '0',
                    },
                  }}
                  href="/sobre-nos"
                  onClick={() => setShow(false)}
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  css={{
                    '&::after': {
                      width: pathname === '/cases' ? '100%' : '0',
                    },
                  }}
                  href="/cases"
                  onClick={() => setShow(false)}
                >
                  Clientes
                </Link>
              </li>
              <li>
                <Link
                  css={{
                    '&::after': {
                      width: pathname === '/contato' ? '100%' : '0',
                    },
                  }}
                  href="/contato"
                  onClick={() => setShow(false)}
                >
                  Contato
                </Link>
              </li>
            </Ul>
          )}
        </HeaderLogoMenu>
      </NavHeader>
      <BackToTopButton
        backToTop={backToTop}
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        <PiArrowUpBold />
      </BackToTopButton>
    </>
  )
}
