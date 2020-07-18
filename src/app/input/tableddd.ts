import * as bigInt from 'big-integer';

export class Tabledd {
  q: bigInt.BigInteger;
  i: string;
  r: bigInt.BigInteger;
  x: bigInt.BigInteger;
  y: bigInt.BigInteger;
  constructor(q0: string, r0: string, x0: string, y0: string) {
    // tslint:disable-next-line: prefer-const
    this.i = '0';
    this.q = bigInt(q0);
    this.r = bigInt(r0);
    this.x = bigInt(x0);
    this.y = bigInt(y0);
  }
}
