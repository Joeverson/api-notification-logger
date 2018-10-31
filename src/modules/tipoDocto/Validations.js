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

  EMAIL_ALREADY_EXISTS: 'ESTE EMAIL JÁ FOI CADASTRADO'
}

export default {
  /** não esta faltando dados obrigatodios */
  isRequired(data) {
    if (_.isUndefined(data)) {
      throw new ValidationException({
        message: ERRORS.EMPTY_DATA
      })
    } else if (_.isUndefined(data.nome)) {
      throw new ValidationException({
        message: ERRORS.NAME_NOT_FOUND
      })
    } else if (_.isUndefined(data.email)) {
      throw new ValidationException({
        message: ERRORS.EMAIL_NOT_FOUND
      })
    } else if (_.isUndefined(data.senha)) {
      throw new ValidationException({
        message: ERRORS.PASSWORD_NOT_FOUND
      })
    } else if (_.isUndefined(data.tipo_user_id)) {
      throw new ValidationException({
        message: ERRORS.TYPE_USER_NOT_FOUND
      })
    }
  },

  /** validando se o usuario existe no sistema */
  async exists(data) {
    const db = await dbConnection

    try {
      const user = await db.Usuario.findOne({
        where: {
          email: data.email
        },
        include: [{
          model: db.Tipo_user,
          where: {
            id: db.sequelize.col('usuario.tipo_user_id')
          }
        }],
        raw: true
      })

      if (user == null || !password.check(data.senha, user.senha)) {
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
  async notExistsEmail(email) {
    const db = await dbConnection

    const user = await db.Usuario.findOne({
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