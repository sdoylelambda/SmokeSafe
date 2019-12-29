import React from 'react'
import { Router, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>navbar</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/FAQ'>FAQ</Link>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar

// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       <h1>navbar</h1>
//       <Route path='/home' component={Home} />
//       <Route path='/about' component={About} />
//       <Route path='/FAQ' component={FAQ} />
//       <Route path='/signup' component={Signup} />
//       <Route path='/login' component={Login} />
//     </div>
//   )
// }

// export default Navbar
