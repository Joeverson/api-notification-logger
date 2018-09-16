import Express from 'express'
import User from './UserController'
import Context from '../../utils/context'

const App = Express.Router()

App.route('/')
  .get(async (req, res) => {    
    res.send(await User.get())
  })

App.route('/login')
  .post(async (req, res) => {
    const context = new Context()

    try {
      const userToken = await User.autenticate(req.body)

      context.data = userToken
      context.status.success = true 
    } catch (err) {
      context.status.success = false
      context.status.details = err
    } finally {
      res.send(context)
    }
    
  })

App.route('/register')
  .post(async (req, res) => {
    const context = new Context()

    try {
      const user = await User.register(req.body)

      context.data = user
      context.status.success = true      
    } catch (err) {
      context.status.success = false
      context.status.details = err
    } finally {
      res.send(context)
    }
  })

export default App
