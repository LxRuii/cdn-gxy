// 加密
function encrypt(word) {
  let key = CryptoJS.enc.Utf8.parse('23DbtQHR2UMbH6mJ');
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });

  return encrypted = encrypted.ciphertext.toString();
}
// 解密
function decrypt(word, keyStr) {
  keyStr = keyStr ? keyStr : "23DbtQHR2UMbH6mJ";
  var key = CryptoJS.enc.Utf8.parse(keyStr);
  var decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
function getAES(data) {
  let str = this.encrypt(data)
  return str
  // return str.toUpperCase()
}
function setAES(data) {
  let str = this.decrypt(data)
  return str.toUpperCase()
}
