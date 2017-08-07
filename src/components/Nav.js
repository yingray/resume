import React from 'react'

const Nav = () => {
  return (
    <nav>
      <button className="material-icons" onClick={() => window.print()}>
        print
      </button>
      <button className="material-icons" onClick={() => window.print()}>
        save
      </button>
    </nav>
  )
}

export default Nav
