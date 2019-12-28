import React from 'react'

const Navbar = () => {
  return (
    <div>
      <h1>navbar</h1>
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/FAQ' component={FAQ} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
    </div>
  )
}

export default Navbar
