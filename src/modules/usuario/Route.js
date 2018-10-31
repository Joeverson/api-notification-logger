import Express from 'express'
import User from './UsuarioController'
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

App.route('/:id/clientes')
  .get(async (req, res) => {
    const context = new Context()

    try {
      const clientes = await User.getClients(req.params.id)
      context.data = clientes
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

    try {
      const usuario = await User.findByid(req.params.id)
      context.data = usuario
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

    try {
      const usuario = await User.update(req.params.id, req.body)
      context.data = usuario
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
      const usuario = await User.delete(req.params.id)
      context.data = usuario
      context.status.success = true
    } catch (err) {
      context.status.details = err
      context.status.success = false
    } finally {
      res.send(context)
    }
  })


export default App