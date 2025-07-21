import React from 'react'
import Link from 'next/link'

const Featurecard = ({title,description,buttonhref,learnmore}) => {
  return (

    <div>
    <h1>
        {title}
    </h1>
    <p>{description}</p>
    <Link href={buttonhref}>icon</Link>
    <Link href={learnmore}>Learnmore</Link>
    </div>
  )
}

export default Featurecard