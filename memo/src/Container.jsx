import React, { Children } from 'react'

function Container({classname}) {
  return (
    <>
    <div className={classname}>
        <Children></Children>
    </div>
    </>
  )
}

export default Container