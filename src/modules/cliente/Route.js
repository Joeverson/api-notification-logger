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
  .get(async (req, res) => {    
    const context = new Context()
    
    try{
      const cliente = await Cliente.find(req.params.id)
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

      if (context.data == 0) {
        context.data = cliente
        context.status.success = true
      }
      context.status.success = false
      context.status.details.message = 'Problems in remove te client'
    } catch (err) {
      context.status.details = err
    } finally {
      res.send(context)
    }
  })

export default App
