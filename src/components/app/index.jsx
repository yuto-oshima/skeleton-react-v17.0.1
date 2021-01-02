import React, { Fragment, useRef } from 'react'
import './style.sass'

// components
import Loading from '../utils/loading/index.jsx'

const App = props => {
 
  const loadingRef = useRef(null)
 
  return(
    <Fragment>
      <div>
        skeleton
        <Loading ref={ loadingRef }/>
      </div>
    </Fragment>
  )
}

export default App