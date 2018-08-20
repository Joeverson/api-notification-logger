import Express from 'express'
import User from './UserController'

const App = Express.Router()

App.route('/login')
  .post((req, res) => {
    res.send(User.autenticate(req.body))
  })

App.route('/register')
  .post(async (req, res) => {
    try {
      res.send(await User.register(req.body))
    } catch (err) {
      res.send({
        error: err
      })
    }
  })

export default App
