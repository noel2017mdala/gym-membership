import React from 'react'

type Props = {
  children: React.ReactNode
}

const Heading = ({ children }: Props) => {
  return (
    <div>
      <h1 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
        {children}
      </h1>
    </div>
  )
}

export default Heading
