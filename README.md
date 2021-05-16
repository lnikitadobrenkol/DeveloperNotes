# CryptographyIntoduction
Getting familiar with the basics of cryptography.

# Cryptography 
- https://habr.com/ru/post/449552/

 # Crypto
 - https://nodejs.org/dist./v8.14.1/docs/api/crypto.html#crypto_crypto
 - https://attacomsian.com/blog/nodejs-encrypt-decrypt-data
 - https://nodejs.org/en/knowledge/cryptography/how-to-use-crypto-module/

# Note

## Encryption
Basically to encrypt data usind Crypto Node module you need to know: 
1) Algorithm or how to encrypt you data;
2) Secret key so only authorized people can decrypt the data

Then you need to use Cipher class fron Crypto to encode the data:
const cipher = createCipheriv(algorithm, key, initializationVector);

Initializatio Vector - is a random number to encrypt your data even better.
Creating a cipher you basicaly create a secure container for the data and tell how to encrypt it inside of this container. 

Then you just put data inside:
const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

update() - encrypt you data;
final() - returns a binary encrypted data.

## Decryption
In order to decrypt data you need to know:
1) Algorithm or how it was encrypted;
2) Secret key;
3) Optionaly Initializatio Vector.

Then you need to use Cipher class fron Crypto to decode the data:
const decipher = createDecipheriv(algorithm, key, Buffer.from(hash.initializationVector, 'hex'));

Here we are getting acces to the 'container' with data.
And then we simply take the data and convert it to readable format: 
const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
return decrypted.toString();

# Why do we need it? 
Because it is not safe to keep valnurable data as it is in the data bases. Additional levels of security. 
