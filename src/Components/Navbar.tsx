import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '../images/Logo.png'
import Link from './Navbar/Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from './Navbar/ActionButton'

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
  isTopOfPage:boolean
}

function Navbar({ selectedPage, setSelectedPage,  isTopOfPage}: Props) {
  const flexBetween = 'flex item-center justify-between'
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
  const navBackground = isTopOfPage ? "" : "drop-shadow";

  return (
    <nav>
      <div className={`${navBackground} ${flexBetween} fixed top-3 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left */}
            <img alt="logo" src={Logo} />

            {/* Right */}

            {isAboveMediaScreens ? (
              <div className={`${flexBetween} w-full `}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <p>Sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => {
                  setIsMenuToggle(!isMenuToggle)
                }}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* {Mobile  Menu} */}

      {isMenuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl bg-primary-300">
          <div className="flex justify-end p-12">
            <button
              onClick={() => {
                setIsMenuToggle(!isMenuToggle)
              }}
            >
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* {Menu Items} */}

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
