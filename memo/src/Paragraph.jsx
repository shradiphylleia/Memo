import React from 'react'

function Paragraph({classname,text}) {
  return (
    <>
    <p className={classname}>{text}</p>
    </>
  )
}

export default Paragraph