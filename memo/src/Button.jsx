import React from 'react'

function Button(classname,link,text) {
  return (
    <a className={classname} href={link}>{text}</a>
  )
}

export default Button