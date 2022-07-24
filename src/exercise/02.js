// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    // what would, kind of, make sense, is to be able to extend
    // the react element props, like below:
    // child.props.on = on
    // child.props.toggle = toggle
    // but this will result in error, since the object is not extensible
    // what React wants us to instead is:
    return React.cloneElement(child, { on, toggle })
  })
}

const ToggleOn = ({on, children}) => on ? children : null
const ToggleOff = ({on, children}) => on ? null : children
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
