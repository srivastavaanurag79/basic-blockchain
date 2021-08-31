import * as crypto from 'crypto';

import { Chain } from "./src/chain/chain";
import { Wallet } from "./src/wallet/wallet";

// Example usage

const a_sharma = new Wallet();
const j_hong = new Wallet();
const h_singhal = new Wallet();

a_sharma.sendMoney(10000000, j_hong.publicKey);
j_hong.sendMoney(23, h_singhal.publicKey);
h_singhal.sendMoney(5, a_sharma.publicKey);

console.log(Chain.instance);