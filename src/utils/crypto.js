import CryptoJS from 'crypto-js';
 
export const encrypt = text => CryptoJS.AES.encrypt(text, "secret key 123").toString();

export const decrypt = text => CryptoJS.AES.decrypt(text, "secret key 123").toString(CryptoJS.enc.Utf8);
