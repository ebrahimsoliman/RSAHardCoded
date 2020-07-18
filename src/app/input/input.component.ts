import { Component, OnInit } from '@angular/core';
import * as bigInt from 'big-integer';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  p = bigInt('7');
  q = bigInt('13');
  e = bigInt('17');
  m = bigInt('2');
  c = bigInt();
  n = bigInt();
  d = bigInt();
  phin = bigInt();
  decrypted = bigInt();
  constructor() {
    this.getn();
    this.getc();
    this.getd();
    this.decrypt();
  }
  // tslint:disable-next-line: typedef
  calc() {
    this.getc();
    this.getd();
    this.decrypt();
  }
  // tslint:disable-next-line: typedef
  setp() {
    this.p.toString();
    this.p = bigInt(this.p);
    if (this.p.isPrime()) {
      return 'green';
    }else{
      return 'red';
    }
  }
  // tslint:disable-next-line: typedef
  setq() {
    this.q.toString();
    this.q = bigInt(this.q);
    if (this.q.isPrime()) {
      return 'green';
    }else{
      return 'red';
    }
  }
  // tslint:disable-next-line: typedef
  sete() {
    this.e.toString();
    this.e = bigInt(this.e);
    if (bigInt.gcd(this.e, this.phin).compare(1) == 0 && this.e.lesser(this.phin)){
      return 'green';
    }
    else{
      return 'red';
    }
  }
  // tslint:disable-next-line: typedef
  setm() {
    this.m.toString();
    this.m = bigInt(this.m);
  }
  // tslint:disable-next-line: typedef
  getn() {
    // tslint:disable-next-line: radix
    this.n = bigInt(this.p.multiply(this.q));
    this.phin = bigInt(this.p.subtract(1).multiply(this.q.subtract(1)));
  }
  // tslint:disable-next-line: typedef
  getc() {
    this.c = this.m.pow(this.e).remainder(this.n);
  }
  // tslint:disable-next-line: typedef
  getd() {

    for (let x = 0; this.phin.gt(x.toString()); x++) {
      console.log(x.toString());
      if (this.e.multiply(x.toString()).remainder(this.phin).compare(bigInt('1')) == 0) {
        this.d = bigInt(x.toString());
        break;
      }
    }
  }
  // tslint:disable-next-line: typedef
  decrypt() {
    setTimeout(() => {
      this.decrypted = bigInt(this.c).pow(this.d).remainder(this.n);
    }, 1000);
  }

  // tslint:disable-next-line: typedef
  ngOnInit(): void {}
}
