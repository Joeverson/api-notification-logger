import dbConnection from '../../db/connection'
import { password } from '../../utils'
import userValidations from './Validations'
import jwt from 'jsonwebtoken'

export default {
  async autenticate (data) {
    /**
     * essa validaçaõ valida e retorna caso tenha um usuario
     */
    const user = await userValidations.exists(data)
    
    const token = jwt.sign({
      id: user.id,
      role: user.tipo_user.name
    }, process.env.SECRET_KEY, {
      expiresIn: 86400 // expires in 24 hours
    })

    return {
      token,
      user
    }
  },

  /**
   * metodo responsavel por regitrar novos
   * usuarios no sistema
   */
  async register (data) {
    const model = await dbConnection

    // validations here
    userValidations.isRequired(data)
    await userValidations.notExistsEmail(data.email)

    // criptografando a senha
    data.senha = password.generate(data.senha)

    // insert
    const user = await model.Usuario.create(data)
    return user    
  },

  async get () {
    const model = await dbConnection

    const res = await model.Usuario.findAll()

    return res
  }
}
