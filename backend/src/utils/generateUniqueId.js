const crypto = require('crypto');

export default function generateUniqueId(){
  return crypto.randomBytes(4).toString('HEX');
}