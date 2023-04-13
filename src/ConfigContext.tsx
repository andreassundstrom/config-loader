import { createContext } from "react";

export type ConfigContextProps = {
  baseUrl: string
}

const ConfigContext = createContext<ConfigContextProps>({baseUrl:''})

export default ConfigContext