import { ReactElement, useContext, useEffect, useState } from 'react'
import './App.css'
import ConfigContext, { type ConfigContextProps } from './ConfigContext'

function App(props : { children: ReactElement } ) {
  useEffect(() => {
    fetch('/config')
      .then(res => res.json())
      .then(json => {
        setAppContextProps(json)
  })
  },[])
  
  const [appContextProps, setAppContextProps] = useState<ConfigContextProps>()
  return (
    appContextProps ?
    <ConfigContext.Provider value={appContextProps}>
      { props.children }
    </ConfigContext.Provider> : <></>
  )
}

export default App
