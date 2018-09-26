import Express from 'express'
import Cliente from './ClienteController'
import Context from '../../utils/context'

const App = Express.Router()

App.route('/')
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
  .post(async (req, res) => {    
    const context = new Context()
    
    try{      
      const cliente = await Cliente.add(req.body)
      context.data = cliente
      context.status.success = true
    } catch (err) {
      context.status.details = err
      context.status.success = false
    } finally {
      res.send(context)
    }
  })
  

App.route('/:id')
  .put(async (req, res) => {    
    const context = new Context()
    
    try{
      const cliente = await Cliente.update(req.params.id, req.body)
      context.data = cliente
      context.status.success = true
    } catch (err) {      
      context.status.details = err
      context.status.success = false
    } finally {
      res.send(context)
    }
  })
  .delete(async (req, res) => {    
    const context = new Context()
    
    try {
      const cliente = await Cliente.delete(req.params.id)
      context.data = cliente
      context.status.success = true
    } catch (err) {
      context.status.details = err
      context.status.success = false
    } finally {
      res.send(context)
    }
  })

export default App
