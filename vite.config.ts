import { readFileSync } from 'fs'
import { Connect, PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const myPlugin = (filePath: string, endpoint: string) : PluginOption => ({
  name: 'configure-server',
  configureServer(server) {
    const configFile = readFileSync(filePath)
    server.middlewares.use((req: Connect.IncomingMessage, res, next) => {
      if(req.originalUrl === endpoint){
        res.setHeader('Content-Type','Application/json')
        res.end(configFile)
      }
      else
        next()
    })
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [myPlugin('./config.json','/config'),react()],
})
