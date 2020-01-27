import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myApp: string = "Workshop POS";

  constructor() { }

  ngOnInit() {
  }

  onSayHi() {
    // alert(this.myApp + this.onGetName());
  }

  onGetName(): string {
    return "Pom";
  }

  login(loginForm: NgForm) {
    console.log(loginForm.value);
    console.log(loginForm.value.username);
    alert(JSON.stringify(loginForm.value));
  }

}
