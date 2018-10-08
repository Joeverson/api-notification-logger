import Express from 'express'
import TipoDocto from './TipoDoctoController'
import Context from '../../utils/context'

const App = Express.Router()

App.route('/')
  .get(async (req, res) => {    
    res.send(await TipoDocto.list())
  })  

App.route('/:id')
  .put(async (req, res) => {
    const context = new Context()

    try {
      const tipoDocto = await TipoDocto.update(req.params.id, req.body)
      context.data = tipoDocto
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
      const tipoDocto = await TipoDocto.delete(req.params.id)
      context.data = tipoDocto
      context.status.success = true
    } catch (err) {
      context.status.details = err
      context.status.success = false
    } finally {
      res.send(context)
    }
  })

export default App
