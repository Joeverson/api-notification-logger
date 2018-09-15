import _ from 'lodash'
import dbConnection from '../../db/connection'
import { password } from '../../utils'
import ValidationException from '../../utils/exceptions/ValidationsExceptions'

// constantes globais para essa aplicação

const ERRORS = {
  EMPTY_DATA: 'DADOS INFORMADOS ESTÃO VAZIOS',

  NAME_NOT_FOUND: 'NÃO FOI INFORMADO O NOME DO USUÁRIO',
  EMAIL_NOT_FOUND: 'NÃO FOI INFORMADO O EMAIL DO USUÁRIO',
  PASSWORD_NOT_FOUND: 'NÃO FOI INFORMADO A SENHA DO USUÁRIO',

  USER_NOT_FOUND: 'USUÁRIO NÃO FOI ENCONTRADO',
  
  EMAIL_ALREADY_EXISTS: 'ESTE EMAIL JÁ FOI CADASTRADO'
}

export default {
  /** não esta faltando dados obrigatodios */
  isRequired (data) {
    if (_.isUndefined(data)) {
      throw new ValidationException({ message: ERRORS.EMPTY_DATA })
    } else if (_.isUndefined(data.name)) {
      throw new ValidationException({ message: ERRORS.NAME_NOT_FOUND })
    } else if (_.isUndefined(data.email)) {
      throw new ValidationException({ message: ERRORS.EMAIL_NOT_FOUND })
    } else if (_.isUndefined(data.password)) {
      throw new ValidationException({ message: ERRORS.PASSWORD_NOT_FOUND })
    }
  },

  /** validando se o usuario existe no sistema */
  async exists (data) {
    const db = await dbConnection

    try {
      const user = await db.User.findOne({
        where: {
          email: data.email
        },
        include: [{
          model: db.User_types,
          where: {
            id: db.sequelize.col('user.user_type_id')
          }
        }]
      })

      if (user == null || !password.check(data.password, user.password)) {
        throw new ValidationException({
          message: ERRORS.USER_NOT_FOUND
        })
      }

      return user
    } catch (err) {
      throw err
    }
  },
  /**
   * Método responsavel por verificar se um email eiste no banco de dados
   * 
   * @param {String} email
   */
  async notExistsEmail (email) {
    const db = await dbConnection

    const user = await db.User.findOne({
      where: {
        email
      }     
    })
    
    if (!_.isNull(user)) {
      throw new ValidationException({
        message: ERRORS.EMAIL_ALREADY_EXISTS
      })
    }      
  }
}
