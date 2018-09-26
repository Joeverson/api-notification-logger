import userController from '../../src/modules/user/UserController'
import assert from 'assert'

export default () => {
  describe('Usuários', () => {
    describe('Registrando um usuário', () => {
      it('deve retornar um array com as informações do usuario', () => {
        const data = {
          name: 'joão',
          email: 'joao@g.com',
          password: '123',
          user_type_id: '1'
        }

        const user = userController.register(data)

        assert.equal(user, data)
      })
    })
  })
}
