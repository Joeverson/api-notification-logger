import _ from 'lodash'
import ValidationException from '../../utils/exceptions/ValidationsExceptions'

// constantes globais para essa aplicação

const ERRORS = {
  EMPTY_DATA: 'DADOS INFORMADOS ESTÃO VAZIOS',

  NOT_FOUND_NAME: 'NÃO FOI INFORMADO O NOME DO USUÁRIO',
  NOT_FOUND_EMAIL: 'NÃO FOI INFORMADO O EMAIL DO USUÁRIO',
  NOT_FOUND_PASSWORD: 'NÃO FOI INFORMADO A SENHA DO USUÁRIO'
}

export default {
  /** não esta faltando dados obrigatodios */
  isRequired (data) {
    if (_.isUndefined(data)) {
      throw new ValidationException({ message: ERRORS.EMPTY_DATA })
    } else if (_.isUndefined(data.name)) {
      throw new ValidationException({ message: ERRORS.NOT_FOUND_NAME })
    } else if (_.isUndefined(data.email)) {
      throw new ValidationException({ message: ERRORS.NOT_FOUND_EMAIL })
    } else if (_.isUndefined(data.password)) {
      throw new ValidationException({ message: ERRORS.NOT_FOUND_PASSWORD })
    }
  }
}
