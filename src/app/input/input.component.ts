import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  p: number;
  q: number;
  e: number;
  m: number;
  c: number = null;
  n: number = null;
  d: number = null;
  phin: number = null;
  decrypted: number = null;
  constructor() {

  }
 // tslint:disable-next-line: typedef
 getn(){
    // tslint:disable-next-line: radix
    this.n = this.p * this.q;
    this.phin = (this.p - 1) * (this.q - 1);
  }
  // tslint:disable-next-line: typedef
  getc(){
    this.c = Math.pow(this.m, this.e) % this.n;
  }
  // tslint:disable-next-line: typedef
  getd(){
    for (let x = 0; x < this.phin; x++){
      if (this.e * x % this.phin === 1) {
        this.d = x;
        break;
      }
    }
  }
  // tslint:disable-next-line: typedef
  decrypt(){
    setTimeout(() => {this.decrypted = Math.pow(this.c, this.d) % this.n; } , 1000);
  }
  ngOnInit(): void {}
}
