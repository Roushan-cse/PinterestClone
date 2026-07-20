import React from 'react'

const Container = ({children,className = ''}) => {
  return (
    <div
        className = {`mx-auto px-4 ${className} max-w-[var(--container-width)]`}>
      
      {children}
    </div>
  )
}

export default Container
