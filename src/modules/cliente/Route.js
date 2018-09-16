import Express from 'express'
import Cliente from './ClienteController'
import Context from '../../utils/context'

const App = Express.Router()

App.route('/')
  .post(async (req, res) => {    
    const context = new Context()
    
    try{
      const cliente = await Cliente.adicionar(req.body)
      context.data = cliente
      context.status.success = true
    } catch (err) {
      context.status.details = err
      context.status.success = false
    } finally {
      res.send(context)
    }
  })
  .get(async (req, res) => {    
    const context = new Context()
    
    try{
      const cliente = await Cliente.list()
      context.data = cliente
      context.status.success = true
    } catch (err) {
      context.status.details = err
      context.status.success = false
    } finally {
      res.send(context)
    }
  })
  .put(async (req, res) => {    
    const context = new Context()
    
    try{

    } catch (err) {

    } finally {
      res.send(context)
    }
  })
  .delete(async (req, res) => {    
    const context = new Context()
    
    try{

    } catch (err) {

    } finally {
      res.send(context)
    }
  })

export default App
