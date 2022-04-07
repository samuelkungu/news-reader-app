import alanBtn from '@alan-ai/alan-sdk-web'
import React, { useEffect } from 'react'

const alanKey = 'd7992c199e46e6d7a0b4a1376eaf77602e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    useEffect(() => {
       alanBtn({
           key: alanKey,
       })
    }, [])
    
  return (
    <div>
        <h1>
            Alan AI news application
        </h1>
    </div>
  )
}

export default App