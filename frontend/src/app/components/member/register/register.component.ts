import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  register(registerForm: NgForm) {
    alert(JSON.stringify(registerForm.value));
    alert("Register Complete!");
    this.router.navigate(["/login"]);
  }

}
