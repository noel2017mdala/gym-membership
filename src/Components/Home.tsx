import { SelectedPage } from '@/shared/types'
import React from 'react'
import ActionButton from './Navbar/ActionButton'
import TextImage from '../images/HomePageText.png'
import ImageGraphics from '../images/HomePageGraphic.png'
import RedBull from '../images/SponsorRedBull.png'
import Forbes from '../images/SponsorForbes.png'
import Fortune from '../images/SponsorFortune.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediaScreens = useMediaQuery('(min-width: 1060px)')
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* {IMAGE AND MAIN HEADER} */}
      <div>
        {/* {MAIN HEADER} */}
        <div>
          {/* {HEADINGS} */}
          <div>
            <div>
              <div>
                <img alt="home-page-text" src={TextImage} />
              </div>
            </div>
            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>

          {/* {ACTIONS} */}

          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>

            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => {
                setSelectedPage(SelectedPage.ContactUs)
              }}
              href={SelectedPage.ContactUs}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* {IMAGE} */}
        <div>
          <img src={ImageGraphics} alt="home-page-graphics" />
        </div>
      </div>

      {isAboveMediaScreens && (
        <div>
          <div>
            <div>
              <img alt="Red bull-sponsor" src={RedBull} />
              <img alt="Forbes-sponsor" src={Forbes} />
              <img alt="Fortune-sponsor" src={Fortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
