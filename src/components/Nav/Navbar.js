import React, { lazy } from 'react'
// import { Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import About from '../About/About'
import Home from '../About/About'
import FAQ from '../FAQ/FAQ'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// const About = lazy(() => import('../About/About'))

const Navbar = () => {
  return (
    <NavDiv>
      {/* <h1>navbar</h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>
        <About />
        About
      </NavLink>
      <NavLink path='/FAQ' render={() => <FAQ />} />
      <NavLink to='/signup'>Signup</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink
        path='/credentials/loginRoutes'
        component={props => <FAQ {...props} />}
      /> */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <FAQ />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </NavDiv>
  )
}

const NavDiv = styled.div`
  /* color: red
  :hover {
    color: green;
    curser: pointer;
  } */
`

const NavLink = styled(Link)`
  color: black;
  padding: 0 20px 
  :hover {
    color: green;
    curser: pointer;
  }
`

export default Navbar
