import React, { FC, ReactNode } from "react"

interface Props{
    children: ReactNode | ReactNode[]
}

const Button:FC<Props> = ({children}) => {
  return (
    <button className=" bg-yellow-300 text-2xl" >{children}</button>
  )
}

export default Button