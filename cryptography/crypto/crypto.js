import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';

const algorithm = 'aes-256-ctr'; // This algorithm will be used to encode & decode data.
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3'; // You need to know it to have access to the data.
const initializationVector = randomBytes(16); // Random binary data to improve the process of encryption.
const key = crypto.scryptSync(secretKey, 'salt', 24); // Hashed secret key. It`s saver to keep this way.

export const encrypt = (text) => { 
    const cipher = createCipheriv(algorithm, key, initializationVector); // We create a secure box for data.

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]); // We put the data to this box.

    return {
        initializationVector: initializationVector.toString('hex'),
        content: encrypted.toString('hex')
    };
}

export const decrypt = (hash) => {
    const decipher = createDecipheriv(algorithm, key, Buffer.from(hash.initializationVector, 'hex')); // We open the secure box with the key.
    
    const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]); // We take the binary data out of the box.

    return decrypted.toString(); // Dectypted data.
}