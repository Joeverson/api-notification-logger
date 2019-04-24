import Express from 'express'
import Log from './LogController'
import Context from '../../utils/context'

const App = Express.Router()

App.route('/:applicationName')
  .get(async (req, res) => {
    const context = new Context()

    try{
      const log = await Log.list(req.params.applicationName)
      context.data = log
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
    const app = {
      applicationName: req.params.applicationName,
      version: req.params.version
    }
    try{
      const log = await Log.add(app, req.body)
      context.data = log
      context.status.success = true
    } catch (err) {
      console.log(err);
      context.status.details = err
      context.status.success = false
    } finally {
      res.send(context)
    }
  })

export default App
