import * as crypto from 'crypto';

import { Transaction } from "../transaction/transaction";

// blocks on the chain
export class Block {

  public nonce = Math.round(Math.random() * 999999999); //one time use random number

  constructor(
    public prevHash: string,
    public transaction: Transaction,
    public ts = Date.now()
  ) { }

  get hash() {
    const str = JSON.stringify(this); // stringifying the object
    const hash = crypto.createHash('SHA256'); // one way algo to create hash
    hash.update(str).end(); // creating hash
    return hash.digest('hex'); // returning as hexadecimal
  }
}