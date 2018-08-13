import Express from 'express'
import Http from 'http'
import core from './src/core'

/**
 * 
 * instance server
 * 
 */
const app = Express()
const Server = Http.Server(app)

/**
 * 
 * runner the core (routes modules, middlewares modules)
 * 
 */

core.loadResources(app)

/**
 * 
 * start server
 * 
 */

Server.listen('3002', () => {
  console.log('funfando...');    
})