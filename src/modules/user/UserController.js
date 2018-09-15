import dbConnection from '../../db/connection'
import { password } from '../../utils'
import userValidations from './Validations'
import jwt from 'jsonwebtoken'

export default {
  async autenticate (data) {
    try {
      /**
       * essa validaçaõ valida e retorna caso tenha um usuario
       */
      const user = await userValidations.exists(data)
      
      const token = jwt.sign({
        id: user.id,
        role: user.user_type.name
      }, process.env.SECRET_KEY, {
        expiresIn: 86400 // expires in 24 hours
      })

      return {
        token,
        user
      }
    } catch (err) {
      return err
    }
  },

  /**
   * metodo responsavel por regitrar novos
   * usuarios no sistema
   */
  async register (data) {
    const model = await dbConnection

    try {
      // validations here
      userValidations.isRequired(data)
      await userValidations.notExistsEmail(data.email)

      // criptografando a senha
      data.password = password.generate(data.password)

      // insert
      const user = await model.User.create(data)
      return user
    } catch (err) {
      throw err
    }
  },

  async get () {
    const model = await dbConnection

    const res = await model.User.findAll()

    return res
  }
}
