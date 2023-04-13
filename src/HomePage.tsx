import { useContext } from "react"
import ConfigContext from "./ConfigContext"
import Header from "./Header"

export default function HomePage() {
  const appContext = useContext(ConfigContext)
  return(
    <div>
      <Header />
      <p><strong>BaseUrl: </strong>{appContext.baseUrl}</p>
    </div>
    )
}