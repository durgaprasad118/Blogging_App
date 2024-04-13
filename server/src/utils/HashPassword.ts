import bcrypt from 'bcryptjs'

const HashPasswrd  = async (pass: string) => {
  return await bcrypt.hash(pass, 10)
}
const CheckPassword = async (userPass: string, bodyPass: string) => {
  const isValid = await bcrypt.compare(bodyPass,userPass);
  return isValid;
}

export {
    HashPasswrd,
    CheckPassword
}