import JSEncrypt from 'jsencrypt'
import Encrypt from 'encryptlong'

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC80L0LpNqSjVnNq1mLtdEcH/Nfc6AKSqGcrahNeP3QIYnPS613bx/yTFTYkbol+lBd2H1r2DJFAm5KRO7UcqPpcw1hE98Xc3DSipnuRlCHggm8BzuOAqvQVzuX2Gf08ARYK2U5ColaDliDLdB6RuA11fATXJaIYAqLskIm5+92JQIDAQAB'

export function resPublicData(data) {
  var jsencrypt = new JSEncrypt()
  jsencrypt.setPublicKey(publicKey)
  var result = jsencrypt.encrypt(data)
  return result
}
export function encrypt(data) {
  const PUBLIC_KEY = publicKey
  var enceyptor = new Encrypt()
  enceyptor.setPublicKey(PUBLIC_KEY)
  var result = enceyptor.encryptLong(data)
  return result
}
