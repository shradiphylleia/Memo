import React from 'react'

function Button({className,link,text}) {
  return (
    <a className={className} href={link}>{text}</a>
  )
}

export default Button