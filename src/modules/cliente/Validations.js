import _ from 'lodash'
import dbConnection from '../../db/connection'
import {
  password
} from '../../utils'
import ValidationException from '../../utils/exceptions/ValidationsExceptions'

// constantes globais para essa aplicação

const ERRORS = {
  EMPTY_DATA: 'DADOS INFORMADOS ESTÃO VAZIOS',

  NAME_NOT_FOUND: 'NÃO FOI INFORMADO O NOME DO USUÁRIO ex: {nome: xablau}',
  EMAIL_NOT_FOUND: 'NÃO FOI INFORMADO O EMAIL DO USUÁRIO',
  PASSWORD_NOT_FOUND: 'NÃO FOI INFORMADO A SENHA DO USUÁRIO ex. {senha: ****}',
  TYPE_USER_NOT_FOUND: 'NÃO FOI INFORMADO O TIPO DO USUÁRIO ex. {tipo_user_id: ****}',

  USER_NOT_FOUND: 'USUÁRIO NÃO FOI ENCONTRADO',

  EMAIL_ALREADY_EXISTS: 'ESTE EMAIL JÁ FOI CADASTRADO',
}

export default {
  
  /**
   * verificando se existe um cliente por id
   * 
   * @param {int} id 
   */
  async exists(id) {
    const db = await dbConnection

    try {
      const user = await db.Usuario.findById(id)

      if (user == null) {
        throw new ValidationException({
          message: ERRORS.USER_NOT_FOUND
        })
      }

      return user
    } catch (err) {
      throw err
    }
  }
}