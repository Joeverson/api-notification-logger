import bcrypt from 'bcryptjs'

export function cryptPass (pass) {
  return bcrypt.hashSync(pass, 8)
}
