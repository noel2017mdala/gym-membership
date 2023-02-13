import { SelectedPage } from '@/shared/types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {

    const lowerPage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink 
    className={`${selectedPage === lowerPage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-500`}
    href={`#${lowerPage}`}
    onClick={():void =>{
        console.log("hello World");
        setSelectedPage(lowerPage)
    }}
    >
        {page}
    </AnchorLink>
  )
}

export default Link;