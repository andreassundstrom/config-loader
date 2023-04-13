import { useContext } from "react"
import ConfigContext from "./ConfigContext"

export default function Header() {
  const context = useContext(ConfigContext)
  return(
    <div style={{position:'fixed',top:0, left:0,width:'100%',backgroundColor:'whitesmoke',color:"black"}}>
      <p>BaseUrl: {context.baseUrl}</p>
    </div>
  )
}