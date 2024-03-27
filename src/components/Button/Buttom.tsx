import React, {ReactNode} from 'react'

interface ButtomProps {
    children: ReactNode | ReactNode[]
    }

function Buttom({ children}) {
  return (
    <button>
      {children}
    </button>
  )
}

export default Buttom