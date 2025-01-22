import React from 'react'

const Btn = ({text, classname, icon}) => {
  return (
    <button className={classname}>
        {text}
        {icon}
    </button>
  )
}

export default Btn
