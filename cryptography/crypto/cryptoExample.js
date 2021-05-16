import { encrypt, decrypt } from './crypto';

const hash = encrypt("Hello crypto World!");
const text = decrypt(hash);

console.log(`${hash} \n ${text}`);