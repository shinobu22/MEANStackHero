import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myApp: string = "Workshop POS";

  constructor(
    private router: Router,
    private authService: AuthService,
    private networkService: NetworkService) {
  }

  ngOnInit() {
    if (this.authService.isLogin()) {
      this.router.navigate(["/stock"]);
    }
  }

  login(loginForm: NgForm) {
    this.networkService.login(loginForm.value).subscribe(
      result => {
        if (result.token) {
          this.authService.login(result.token);
        } else {
          alert(result.message);
        }
      },
      error => {
        alert(error.error.message);
      }
    )
  }

}
