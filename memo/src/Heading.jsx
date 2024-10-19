import React from 'react'

function Heading({classname,text}) {
  return (
    <>
    <h1 className={classname}>{text}</h1>
    </>
  )
}

export default Heading