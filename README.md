# basic-blockchain

A simple blockchain and cryptocurrency wallet implemented in typescript and node.js (for educational purposes).

## Description

A blockchain is a chain of blocks. And a block is a data structure that contains information, such as transactions. Each block also has its own hash and the hash of the previous block in the chain. A hash is a unique identifier, kind of like someone’s name (if no one has the same name). This is like if we have a line of people and each person knows their own name and the name of the person behind them in line, then the line is stored and can always be recreated. This is how we’ll create and store the blockchain.

To make a blockchain, we’re going to make a class for each of these:
```
class Transaction {}
class Block {}
class Chain {}
class Wallet {}
```

after that, we will add some data and hashing functions. A hash is a unique identifier, and each block and transaction needs one so that we can identify it. We calculate the hash by using a cryptographic hash algorithm called [SHA256](https://en.wikipedia.org/wiki/Secure_Hash_Algorithms). The hash is determined by all the data in each block or transaction, so if anything is tampered with or changed, such as the amount in a transaction, its hash will change too, and we’ll know something’s not right. 
Then we will make a function to add blocks or link blocks to the chain.

**Remember** that if someone tries to change some data in the blockchain, the hash of the tampered block would change too, breaking the chain. Let say, someone changes the value of a transaction to give them more money, this would break the chain. However, if this person were to recalculate the hashes of every block in the chain, then they could make it a valid blockchain again, one that includes their tampered data. This is very possible with a computer that can recalculate the hash values of the block and the previous block in seconds.
So, to ensure this doesn’t happen, blockchain technology relies on something called a **proof-of-work** algorithm. We will use a process called ***BRUTE FORCE/HIT and TRIAL***.

The easiest way for me to understand this was to imagine we have 3 variables: a, b, and c. We have the value of ***c*** and we have to find the value of a such that **a*b=c**. To solve this, we assume the value of a to be 1. We multiply **1*b** and then check if it equals **c**. If it doesn’t, then we try another value of **a**, let say 2. We multiply **2*x** and see if it equals **c**. We do this for every possible value of **a** until we get **a*y=z** and this process is called **brute force or hit and trial**. Once we get this value for **a**, we store it in our block, which affects its hash (making it the correct one).

***Note:*** This is a very basic example and wouldn’t be implemented in real-world applications because it’s too fast to solve.

A **proof-of-work algorithm** makes sure that rewriting the entire blockchain isn’t worthwhile because we would have to solve a new **a** (which is actually called **nonce** in this context) for every block and it will take a very long time.
The process of solving this **proof-of-work** to make a new block for our cryptocurrency is called ***mining***. For our cryptocurrency, I’ve implemented a ***proof-of-work algorithm*** that solves for a variable nonce such that it makes the hash of the block start with ***0000***.

Now, we need to be able to verify that each of the transactions we make is valid. We’re going to do this just like a person sign's a check to make that check valid.
To do this, cryptocurrencies use their own set of unique keys: a private key and a public key. With these keys, users will be able to sign their transactions in order to make them valid. The encryption algorithm we’re going to use in order to generate these keys is called [RSA (Rivest–Shamir–Adleman)](https://en.wikipedia.org/wiki/RSA_(cryptosystem)).

## Example Chain
```
chain: [
    Block {
      prevHash: '',
      transaction: [Transaction],
      ts: 1630438886256,
      nonce: 661703154
    },
    Block {
      prevHash: '184c9193d044342360819c1f0e45e5457815e612d4423620561d998f4530a4f9',
      transaction: [Transaction],
      ts: 1630438886437,
      nonce: 415034295
    },
    Block {
      prevHash: '42a6e4c5134ed0f109af27127dbd552d9385c1bdbee2bbe3c818db5797759ce4',
      transaction: [Transaction],
      ts: 1630438887428,
      nonce: 440023863
    },
    Block {
      prevHash: 'd59c8ec2bc900cd29bd12241b7c237bf563dcf2f4746ef3b041f1ba366bb1a50',
      transaction: [Transaction],
      ts: 1630438888449,
      nonce: 810302595
    }
  ]
  
```

## Usage
```
git clone <this-repo>

npm install
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)