// transaction between two entity

export class Transaction {
  constructor(
    public amount: number, // amount 
    public sender: string, // sender's public key
    public receiver: string // receiver's public key
  ) { }

  // convert the transaction to string
  toString() {
    return JSON.stringify(this);
  }
}